"use client";

import { z } from "zod";
import { create } from "zustand";
import {
	createJSONStorage,
	persist,
	type StateStorage,
} from "zustand/middleware";
import {
	formatActivityTimestampBR,
	formatBRL,
	formatTransactionTimestampBR,
	roundCents,
} from "../lib/format";
import {
	type AnnouncementCategory,
	INITIAL_RUPAY_DATA,
	MEAL_PERIOD_LABELS,
	type MealPeriod,
	type MenuEntry,
	type PaymentMethod,
	type RupayDataState,
	type RuSettings,
	type UserRole,
} from "../lib/mock-data";
import {
	announcementSchema,
	feedbackSchema,
	manualRechargeSchema,
	menuEntrySchema,
	newUserSchema,
	rechargeSchema,
	settingsSchema,
} from "../lib/schemas";

export type ActionResult = { ok: true } | { ok: false; error: string };

export interface RupayStoreActions {
	rechargeCredits: (amount: number, method: PaymentMethod) => ActionResult;
	consumeMeal: (period: MealPeriod) => ActionResult;
	saveMenu: (entry: MenuEntry) => ActionResult;
	toggleMenuPublished: (id: string) => void;
	sendAnnouncement: (input: {
		title: string;
		message: string;
		category: AnnouncementCategory;
	}) => ActionResult;
	markAnnouncementRead: (id: string) => void;
	markAllAnnouncementsRead: () => void;
	submitFeedback: (input: { rating: number; comment?: string }) => ActionResult;
	addUser: (input: {
		name: string;
		ra: string;
		course: string;
		role: UserRole;
		initialBalance: number;
	}) => ActionResult;
	toggleUserStatus: (id: string) => void;
	adminManualRecharge: (userId: string, amount: number) => ActionResult;
	updateSettings: (partial: Partial<RuSettings>) => ActionResult;
	updateStudentPrefs: (partial: {
		notifyMenu?: boolean;
		notifyLowBalance?: boolean;
	}) => void;
	resetDemoData: () => void;
}

export type RupayStore = RupayDataState & RupayStoreActions;

let idCounter = 0;

function createId(prefix: string): string {
	idCounter += 1;
	return `${prefix}-${Date.now()}-${idCounter}`;
}

export function cloneInitialData(): RupayDataState {
	return {
		student: { ...INITIAL_RUPAY_DATA.student },
		transactions: INITIAL_RUPAY_DATA.transactions.map((tx) => ({ ...tx })),
		mealsServedToday: INITIAL_RUPAY_DATA.mealsServedToday,
		dailyRevenue: INITIAL_RUPAY_DATA.dailyRevenue,
		satisfactionPercent: INITIAL_RUPAY_DATA.satisfactionPercent,
		mealDistribution: { ...INITIAL_RUPAY_DATA.mealDistribution },
		hourlyTraffic: INITIAL_RUPAY_DATA.hourlyTraffic.map((slot) => ({
			...slot,
		})),
		financialSeries: INITIAL_RUPAY_DATA.financialSeries.map((item) => ({
			...item,
		})),
		activities: INITIAL_RUPAY_DATA.activities.map((item) => ({ ...item })),
		menus: INITIAL_RUPAY_DATA.menus.map((menu) => ({
			...menu,
			allergens: [...menu.allergens],
		})),
		announcements: INITIAL_RUPAY_DATA.announcements.map((item) => ({
			...item,
		})),
		users: INITIAL_RUPAY_DATA.users.map((user) => ({ ...user })),
		feedbacks: INITIAL_RUPAY_DATA.feedbacks.map((fb) => ({ ...fb })),
		settings: {
			...INITIAL_RUPAY_DATA.settings,
			mealPrices: { ...INITIAL_RUPAY_DATA.settings.mealPrices },
		},
	};
}

const mealPeriodSchema = z.enum(["almoco", "jantar", "lanche"]);

const safeStorage: StateStorage = {
	getItem: (name) =>
		typeof localStorage !== "undefined" &&
		typeof localStorage.getItem === "function"
			? localStorage.getItem(name)
			: null,
	setItem: (name, value) => {
		if (
			typeof localStorage !== "undefined" &&
			typeof localStorage.setItem === "function"
		) {
			localStorage.setItem(name, value);
		}
	},
	removeItem: (name) => {
		if (
			typeof localStorage !== "undefined" &&
			typeof localStorage.removeItem === "function"
		) {
			localStorage.removeItem(name);
		}
	},
};

export const useRupayStore = create<RupayStore>()(
	persist(
		(set, get) => ({
			...cloneInitialData(),

			rechargeCredits: (amount, method) => {
				const parsed = rechargeSchema.safeParse({ amount, method });
				if (!parsed.success) {
					return {
						ok: false,
						error:
							parsed.error.issues[0]?.message ?? "Dados de recarga inválidos.",
					};
				}

				const cleanAmount = roundCents(parsed.data.amount);
				const now = new Date();
				const state = get();
				const nextBalance = roundCents(state.student.balance + cleanAmount);

				set({
					student: {
						...state.student,
						balance: nextBalance,
						paperSheetsSaved: state.student.paperSheetsSaved + 1,
						co2SavedGrams: state.student.co2SavedGrams + 15,
					},
					users: state.users.map((user) =>
						user.id === state.student.id || user.ra === state.student.ra
							? { ...user, balance: nextBalance, lastActivity: "Agora" }
							: user,
					),
					transactions: [
						{
							id: createId("tx"),
							type: "recarga",
							title: "Recarga de créditos",
							dateLabel: formatTransactionTimestampBR(now),
							amount: cleanAmount,
							method: parsed.data.method,
							userRa: state.student.ra,
						},
						...state.transactions,
					],
					dailyRevenue: roundCents(state.dailyRevenue + cleanAmount),
					financialSeries: state.financialSeries.map((point, index, list) =>
						index === list.length - 1
							? { ...point, revenue: roundCents(point.revenue + cleanAmount) }
							: point,
					),
					activities: [
						{
							id: createId("act"),
							type: "recarga",
							description: `Recarga de créditos realizada por ${state.student.ra}`,
							timeLabel: formatActivityTimestampBR(now),
						},
						...state.activities,
					],
				});

				return { ok: true };
			},

			consumeMeal: (period) => {
				const periodParsed = mealPeriodSchema.safeParse(period);
				if (!periodParsed.success) {
					return { ok: false, error: "Período de refeição inválido." };
				}

				const validPeriod = periodParsed.data;
				const state = get();
				const activeUser = state.users.find(
					(user) =>
						user.id === state.student.id || user.ra === state.student.ra,
				);
				if (activeUser && activeUser.status === "Bloqueado") {
					return {
						ok: false,
						error: "Usuário bloqueado. Procure a administração do RU.",
					};
				}

				const price = roundCents(state.settings.mealPrices[validPeriod]);
				if (state.student.balance < price) {
					return {
						ok: false,
						error: `Saldo insuficiente para ${MEAL_PERIOD_LABELS[validPeriod]} (${formatBRL(price)}).`,
					};
				}

				const now = new Date();
				const nextBalance = roundCents(state.student.balance - price);

				set({
					student: {
						...state.student,
						balance: nextBalance,
						cupsAvoided: state.student.cupsAvoided + 1,
						paperSheetsSaved: state.student.paperSheetsSaved + 2,
						co2SavedGrams: state.student.co2SavedGrams + 45,
					},
					users: state.users.map((user) =>
						user.id === state.student.id || user.ra === state.student.ra
							? { ...user, balance: nextBalance, lastActivity: "Agora" }
							: user,
					),
					transactions: [
						{
							id: createId("tx"),
							type: "consumo",
							title: "Consumo no RU",
							dateLabel: formatTransactionTimestampBR(now),
							amount: -price,
							period: validPeriod,
							userRa: state.student.ra,
						},
						...state.transactions,
					],
					mealsServedToday: state.mealsServedToday + 1,
					mealDistribution: {
						...state.mealDistribution,
						[validPeriod]: state.mealDistribution[validPeriod] + 1,
					},
					hourlyTraffic: state.hourlyTraffic.map((slot, index, list) =>
						index === list.length - 1 ? { ...slot, hoje: slot.hoje + 1 } : slot,
					),
					financialSeries: state.financialSeries.map((point, index, list) =>
						index === list.length - 1
							? { ...point, meals: point.meals + 1 }
							: point,
					),
					activities: [
						{
							id: createId("act"),
							type: "consumo",
							description: `Consumo no RU - ${MEAL_PERIOD_LABELS[validPeriod]}`,
							timeLabel: formatActivityTimestampBR(now),
						},
						...state.activities,
					],
				});

				return { ok: true };
			},

			saveMenu: (entry) => {
				const parsed = menuEntrySchema.safeParse(entry);
				if (!parsed.success) {
					return {
						ok: false,
						error: parsed.error.issues[0]?.message ?? "Cardápio inválido.",
					};
				}

				const now = new Date();
				const cleanEntry: MenuEntry = {
					...parsed.data,
					allergens: parsed.data.allergens
						.map((item) => item.trim())
						.filter(Boolean),
					updatedAt:
						parsed.data.updatedAt.trim() || formatTransactionTimestampBR(now),
				};

				const state = get();
				const exists = state.menus.some((menu) => menu.id === cleanEntry.id);

				set({
					menus: exists
						? state.menus.map((menu) =>
								menu.id === cleanEntry.id ? cleanEntry : menu,
							)
						: [cleanEntry, ...state.menus],
					activities: [
						{
							id: createId("act"),
							type: "cardapio",
							description: `Cardápio de ${MEAL_PERIOD_LABELS[cleanEntry.period]} atualizado`,
							timeLabel: formatActivityTimestampBR(now),
						},
						...state.activities,
					],
				});

				return { ok: true };
			},

			toggleMenuPublished: (id) => {
				const now = new Date();
				set((state) => {
					const target = state.menus.find((menu) => menu.id === id);
					if (!target) {
						return state;
					}
					const nextPublished = !target.published;
					return {
						menus: state.menus.map((menu) =>
							menu.id === id
								? {
										...menu,
										published: nextPublished,
										updatedAt: formatTransactionTimestampBR(now),
									}
								: menu,
						),
						activities: [
							{
								id: createId("act"),
								type: "cardapio",
								description: `Cardápio de ${MEAL_PERIOD_LABELS[target.period]} ${nextPublished ? "publicado" : "ocultado"}`,
								timeLabel: formatActivityTimestampBR(now),
							},
							...state.activities,
						],
					};
				});
			},

			sendAnnouncement: (input) => {
				const parsed = announcementSchema.safeParse(input);
				if (!parsed.success) {
					return {
						ok: false,
						error: parsed.error.issues[0]?.message ?? "Comunicado inválido.",
					};
				}

				const now = new Date();
				const title = parsed.data.title.trim();
				const message = parsed.data.message.trim();
				const state = get();

				set({
					announcements: [
						{
							id: createId("ann"),
							title,
							message,
							category: parsed.data.category,
							dateLabel: formatActivityTimestampBR(now).replace(" às ", " · "),
							read: false,
						},
						...state.announcements,
					],
					activities: [
						{
							id: createId("act"),
							type: "aviso",
							description: `Comunicado enviado: ${title}`,
							timeLabel: formatActivityTimestampBR(now),
						},
						...state.activities,
					],
				});

				return { ok: true };
			},

			markAnnouncementRead: (id) => {
				set((state) => ({
					announcements: state.announcements.map((item) =>
						item.id === id ? { ...item, read: true } : item,
					),
				}));
			},

			markAllAnnouncementsRead: () => {
				set((state) => ({
					announcements: state.announcements.map((item) =>
						item.read ? item : { ...item, read: true },
					),
				}));
			},

			submitFeedback: (input) => {
				const parsed = feedbackSchema.safeParse(input);
				if (!parsed.success) {
					return {
						ok: false,
						error: parsed.error.issues[0]?.message ?? "Avaliação inválida.",
					};
				}

				const now = new Date();
				const cleanComment = parsed.data.comment?.trim();
				const state = get();
				const ratingPercent = (parsed.data.rating / 5) * 100;
				const nextSatisfaction = Math.min(
					100,
					Math.max(
						0,
						Math.round((state.satisfactionPercent * 19 + ratingPercent) / 20),
					),
				);

				set({
					satisfactionPercent: nextSatisfaction,
					feedbacks: [
						{
							id: createId("fb"),
							authorName: state.student.name,
							rating: parsed.data.rating,
							...(cleanComment ? { comment: cleanComment } : {}),
							dateLabel: formatActivityTimestampBR(now).replace(" às ", " · "),
						},
						...state.feedbacks,
					],
					activities: [
						{
							id: createId("act"),
							type: "aviso",
							description: `Avaliação (${parsed.data.rating}/5) registrada por ${state.student.ra}`,
							timeLabel: formatActivityTimestampBR(now),
						},
						...state.activities,
					],
				});

				return { ok: true };
			},

			addUser: (input) => {
				const parsed = newUserSchema.safeParse(input);
				if (!parsed.success) {
					return {
						ok: false,
						error:
							parsed.error.issues[0]?.message ?? "Dados do usuário inválidos.",
					};
				}

				const name = parsed.data.name.trim();
				const ra = parsed.data.ra.trim();
				const course = parsed.data.course.trim();
				const initialBalance = roundCents(parsed.data.initialBalance);
				const state = get();

				if (state.users.some((user) => user.ra === ra)) {
					return {
						ok: false,
						error: `Já existe um usuário cadastrado com o RA ${ra}.`,
					};
				}

				const now = new Date();

				set({
					users: [
						{
							id: createId("u"),
							name,
							ra,
							course,
							role: parsed.data.role,
							balance: initialBalance,
							status: "Ativo",
							lastActivity: "Agora",
						},
						...state.users,
					],
					activities: [
						{
							id: createId("act"),
							type: "usuario",
							description: `Novo usuário cadastrado: ${name} (${ra})`,
							timeLabel: formatActivityTimestampBR(now),
						},
						...state.activities,
					],
				});

				return { ok: true };
			},

			toggleUserStatus: (id) => {
				set((state) => ({
					users: state.users.map((user) =>
						user.id === id
							? {
									...user,
									status: user.status === "Ativo" ? "Bloqueado" : "Ativo",
								}
							: user,
					),
				}));
			},

			adminManualRecharge: (userId, amount) => {
				const parsed = manualRechargeSchema.safeParse({ amount });
				if (!parsed.success) {
					return {
						ok: false,
						error: parsed.error.issues[0]?.message ?? "Valor inválido.",
					};
				}

				const state = get();
				const targetUser = state.users.find((user) => user.id === userId);
				if (!targetUser) {
					return { ok: false, error: "Usuário não encontrado." };
				}

				const cleanAmount = roundCents(parsed.data.amount);
				const nextBalance = roundCents(targetUser.balance + cleanAmount);
				const isActiveStudent =
					targetUser.id === state.student.id ||
					targetUser.ra === state.student.ra;
				const now = new Date();

				set({
					users: state.users.map((user) =>
						user.id === userId
							? { ...user, balance: nextBalance, lastActivity: "Agora" }
							: user,
					),
					student: isActiveStudent
						? { ...state.student, balance: nextBalance }
						: state.student,
					transactions: isActiveStudent
						? [
								{
									id: createId("tx"),
									type: "recarga",
									title: "Recarga administrativa",
									dateLabel: formatTransactionTimestampBR(now),
									amount: cleanAmount,
									method: "pix",
									userRa: targetUser.ra,
								},
								...state.transactions,
							]
						: state.transactions,
					dailyRevenue: roundCents(state.dailyRevenue + cleanAmount),
					financialSeries: state.financialSeries.map((point, index, list) =>
						index === list.length - 1
							? { ...point, revenue: roundCents(point.revenue + cleanAmount) }
							: point,
					),
					activities: [
						{
							id: createId("act"),
							type: "recarga",
							description: `Recarga de créditos realizada por ${targetUser.ra}`,
							timeLabel: formatActivityTimestampBR(now),
						},
						...state.activities,
					],
				});

				return { ok: true };
			},

			updateSettings: (partial) => {
				const state = get();
				const candidate: RuSettings = {
					...state.settings,
					...partial,
					mealPrices: {
						...state.settings.mealPrices,
						...(partial.mealPrices ?? {}),
					},
				};

				const parsed = settingsSchema.safeParse(candidate);
				if (!parsed.success) {
					return {
						ok: false,
						error:
							parsed.error.issues[0]?.message ?? "Configurações inválidas.",
					};
				}

				const cleanSettings: RuSettings = {
					...parsed.data,
					openingHours: parsed.data.openingHours.trim(),
					mealPrices: {
						almoco: roundCents(parsed.data.mealPrices.almoco),
						jantar: roundCents(parsed.data.mealPrices.jantar),
						lanche: roundCents(parsed.data.mealPrices.lanche),
					},
				};

				const now = new Date();

				set({
					settings: cleanSettings,
					activities: [
						{
							id: createId("act"),
							type: "config",
							description: "Configurações do RU atualizadas",
							timeLabel: formatActivityTimestampBR(now),
						},
						...state.activities,
					],
				});

				return { ok: true };
			},

			updateStudentPrefs: (partial) => {
				set((state) => ({
					student: {
						...state.student,
						...(typeof partial.notifyMenu === "boolean"
							? { notifyMenu: partial.notifyMenu }
							: {}),
						...(typeof partial.notifyLowBalance === "boolean"
							? { notifyLowBalance: partial.notifyLowBalance }
							: {}),
					},
				}));
			},

			resetDemoData: () => {
				set(cloneInitialData());
			},
		}),
		{
			name: "rupay-store-v1",
			storage: createJSONStorage(() => safeStorage),
			skipHydration: true,
			version: 1,
			partialize: (state): RupayDataState => ({
				student: state.student,
				transactions: state.transactions,
				mealsServedToday: state.mealsServedToday,
				dailyRevenue: state.dailyRevenue,
				satisfactionPercent: state.satisfactionPercent,
				mealDistribution: state.mealDistribution,
				hourlyTraffic: state.hourlyTraffic,
				financialSeries: state.financialSeries,
				activities: state.activities,
				menus: state.menus,
				announcements: state.announcements,
				users: state.users,
				feedbacks: state.feedbacks,
				settings: state.settings,
			}),
		},
	),
);
