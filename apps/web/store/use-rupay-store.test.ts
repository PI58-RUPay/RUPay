import { beforeEach, describe, expect, test } from "bun:test";
import {
	formatBRL,
	formatDateShortBR,
	formatInt,
	formatTimeBR,
	roundCents,
} from "../lib/format";
import { INITIAL_RUPAY_DATA } from "../lib/mock-data";
import { useRupayStore } from "./use-rupay-store";

describe("format helpers", () => {
	test("roundCents rounds cleanly and normalizes negative zero", () => {
		expect(roundCents(10.126)).toBe(10.13);
		expect(roundCents(10.1 + 20.2)).toBe(30.3);
		expect(Object.is(roundCents(-0), 0)).toBe(true);
	});

	test("formatBRL and formatInt format in pt-BR", () => {
		expect(formatBRL(42.5)).toContain("42,50");
		expect(formatBRL(18430)).toContain("18.430,00");
		expect(formatInt(4820)).toBe("4.820");
	});

	test("formatDateShortBR and formatTimeBR format deterministically in America/Sao_Paulo", () => {
		const utcDate = new Date("2025-11-10T17:32:00.000Z");
		expect(formatDateShortBR(utcDate)).toBe("10/11");
		expect(formatTimeBR(utcDate)).toBe("14:32");
	});
});

describe("useRupayStore", () => {
	beforeEach(() => {
		useRupayStore.getState().resetDemoData();
	});

	test("initializes cleanly matching reference screenshots without shared mutable references", () => {
		const state = useRupayStore.getState();

		expect(state.student.balance).toBe(42.5);
		expect(state.transactions).toHaveLength(4);
		expect(state.mealsServedToday).toBe(4820);
		expect(state.dailyRevenue).toBe(18430);
		expect(state.satisfactionPercent).toBe(98);
		expect(state.mealDistribution).toEqual({
			almoco: 2506,
			jantar: 1542,
			lanche: 772,
		});
		expect(state.users).toHaveLength(8);
		expect(
			state.announcements.filter((a) => !a.read).length,
		).toBeGreaterThanOrEqual(2);

		state.student.balance = 999;
		expect(INITIAL_RUPAY_DATA.student.balance).toBe(42.5);
	});

	test("rechargeCredits validates Zod boundaries and rounds cents accurately", () => {
		const belowMin = useRupayStore.getState().rechargeCredits(4.99, "pix");
		expect(belowMin.ok).toBe(false);
		if (!belowMin.ok) {
			expect(belowMin.error).toBe("Valor mínimo de R$ 5,00");
		}

		const aboveMax = useRupayStore.getState().rechargeCredits(500.01, "cartao");
		expect(aboveMax.ok).toBe(false);
		if (!aboveMax.ok) {
			expect(aboveMax.error).toBe("Valor máximo de R$ 500,00");
		}

		const validMin = useRupayStore.getState().rechargeCredits(5, "boleto");
		expect(validMin).toEqual({ ok: true });
		expect(useRupayStore.getState().student.balance).toBe(47.5);

		const rounded = useRupayStore.getState().rechargeCredits(10.126, "pix");
		expect(rounded).toEqual({ ok: true });

		const after = useRupayStore.getState();
		expect(after.student.balance).toBe(57.63);
		expect(after.dailyRevenue).toBe(18445.13);
		expect(after.financialSeries.at(-1)?.revenue).toBe(18445.13);
		expect(after.transactions[0]?.amount).toBe(10.13);
		expect(after.transactions[0]?.method).toBe("pix");
		expect(after.users.find((u) => u.id === "u-12345")?.balance).toBe(57.63);
		expect(after.activities[0]?.description).toContain("12345");

		const validMax = useRupayStore.getState().rechargeCredits(500, "cartao");
		expect(validMax).toEqual({ ok: true });
		expect(useRupayStore.getState().student.balance).toBe(557.63);
	});

	test("consumeMeal deducts price, updates eco & admin metrics, and guards insufficient balance", () => {
		const first = useRupayStore.getState().consumeMeal("almoco");
		expect(first).toEqual({ ok: true });

		const afterFirst = useRupayStore.getState();
		expect(afterFirst.student.balance).toBe(30.5);
		expect(afterFirst.student.cupsAvoided).toBe(3);
		expect(afterFirst.student.paperSheetsSaved).toBe(16);
		expect(afterFirst.student.co2SavedGrams).toBe(385);
		expect(afterFirst.mealsServedToday).toBe(4821);
		expect(afterFirst.mealDistribution.almoco).toBe(2507);
		expect(afterFirst.transactions[0]?.amount).toBe(-12);
		expect(afterFirst.transactions[0]?.period).toBe("almoco");

		expect(useRupayStore.getState().consumeMeal("jantar").ok).toBe(true);
		expect(useRupayStore.getState().consumeMeal("almoco").ok).toBe(true);
		expect(useRupayStore.getState().student.balance).toBe(6.5);

		const lanche = useRupayStore.getState().consumeMeal("lanche");
		expect(lanche.ok).toBe(true);
		expect(useRupayStore.getState().student.balance).toBe(0.5);

		const insufficient = useRupayStore.getState().consumeMeal("almoco");
		expect(insufficient.ok).toBe(false);
		if (!insufficient.ok) {
			expect(insufficient.error).toContain("Saldo insuficiente");
		}
		expect(useRupayStore.getState().student.balance).toBe(0.5);
	});

	test("saveMenu validates Zod schema, updates or creates menu, and toggleMenuPublished flips published", () => {
		const baseMenu = INITIAL_RUPAY_DATA.menus[0];
		expect(baseMenu).toBeDefined();
		if (!baseMenu) {
			return;
		}

		const invalid = useRupayStore.getState().saveMenu({
			...baseMenu,
			mainDish: "AB",
		});
		expect(invalid.ok).toBe(false);

		const updated = useRupayStore.getState().saveMenu({
			...baseMenu,
			mainDish: "Filé de peixe grelhado ao limão",
			allergens: [" Peixe ", ""],
		});
		expect(updated).toEqual({ ok: true });
		expect(
			useRupayStore.getState().menus.find((m) => m.id === "menu-almoco")
				?.mainDish,
		).toBe("Filé de peixe grelhado ao limão");
		expect(
			useRupayStore.getState().menus.find((m) => m.id === "menu-almoco")
				?.allergens,
		).toEqual(["Peixe"]);

		useRupayStore.getState().toggleMenuPublished("menu-almoco");
		expect(
			useRupayStore.getState().menus.find((m) => m.id === "menu-almoco")
				?.published,
		).toBe(false);

		useRupayStore.getState().toggleMenuPublished("menu-almoco");
		expect(
			useRupayStore.getState().menus.find((m) => m.id === "menu-almoco")
				?.published,
		).toBe(true);
	});

	test("sendAnnouncement validates input and read flags update correctly", () => {
		const invalid = useRupayStore.getState().sendAnnouncement({
			title: "Oi",
			message: "curta",
			category: "info",
		});
		expect(invalid.ok).toBe(false);

		const valid = useRupayStore.getState().sendAnnouncement({
			title: "Fila livre no RU Central",
			message: "Tempo médio de espera abaixo de 2 minutos neste momento.",
			category: "fila",
		});
		expect(valid).toEqual({ ok: true });

		const newest = useRupayStore.getState().announcements[0];
		expect(newest?.read).toBe(false);
		expect(newest?.category).toBe("fila");

		if (newest) {
			useRupayStore.getState().markAnnouncementRead(newest.id);
			expect(
				useRupayStore.getState().announcements.find((a) => a.id === newest.id)
					?.read,
			).toBe(true);
		}

		useRupayStore.getState().markAllAnnouncementsRead();
		expect(
			useRupayStore.getState().announcements.every((item) => item.read),
		).toBe(true);
	});

	test("adminManualRecharge syncs active student balance and handles non-active users & guards", () => {
		const missingUser = useRupayStore
			.getState()
			.adminManualRecharge("u-unknown", 20);
		expect(missingUser.ok).toBe(false);

		const invalidAmount = useRupayStore
			.getState()
			.adminManualRecharge("u-12345", 0);
		expect(invalidAmount.ok).toBe(false);

		const syncActive = useRupayStore
			.getState()
			.adminManualRecharge("u-12345", 25.5);
		expect(syncActive).toEqual({ ok: true });
		expect(useRupayStore.getState().student.balance).toBe(68);
		expect(
			useRupayStore.getState().users.find((u) => u.id === "u-12345")?.balance,
		).toBe(68);
		expect(useRupayStore.getState().transactions[0]?.title).toBe(
			"Recarga administrativa",
		);

		const otherUser = useRupayStore
			.getState()
			.adminManualRecharge("u-12890", 12);
		expect(otherUser).toEqual({ ok: true });
		expect(useRupayStore.getState().student.balance).toBe(68);
		expect(
			useRupayStore.getState().users.find((u) => u.id === "u-12890")?.balance,
		).toBe(80);
	});

	test("addUser, toggleUserStatus, submitFeedback, updateSettings, updateStudentPrefs, and resetDemoData work cohesively", () => {
		const dupUser = useRupayStore.getState().addUser({
			name: "Outro Estudante",
			ra: "12345",
			course: "Matemática",
			role: "Estudante",
			initialBalance: 10,
		});
		expect(dupUser.ok).toBe(false);

		const added = useRupayStore.getState().addUser({
			name: "Gabriel Rocha",
			ra: "99887",
			course: "Engenharia Civil",
			role: "Bolsista",
			initialBalance: 20.5,
		});
		expect(added).toEqual({ ok: true });
		const newUser = useRupayStore.getState().users[0];
		expect(newUser?.ra).toBe("99887");
		expect(newUser?.status).toBe("Ativo");

		if (newUser) {
			useRupayStore.getState().toggleUserStatus(newUser.id);
			expect(
				useRupayStore.getState().users.find((u) => u.id === newUser.id)?.status,
			).toBe("Bloqueado");
		}

		const badFeedback = useRupayStore.getState().submitFeedback({ rating: 6 });
		expect(badFeedback.ok).toBe(false);
		expect(
			useRupayStore.getState().submitFeedback({
				rating: 5,
				comment: "Excelente atendimento!",
			}),
		).toEqual({ ok: true });
		expect(useRupayStore.getState().feedbacks).toHaveLength(4);

		const badSettings = useRupayStore
			.getState()
			.updateSettings({ queueWaitMinutes: -1 });
		expect(badSettings.ok).toBe(false);
		expect(
			useRupayStore.getState().updateSettings({
				mealPrices: { almoco: 13.5, jantar: 13.5, lanche: 7 },
				queueStatus: "Moderada",
				queueWaitMinutes: 6,
			}),
		).toEqual({ ok: true });
		expect(useRupayStore.getState().settings.mealPrices.almoco).toBe(13.5);
		expect(useRupayStore.getState().settings.queueStatus).toBe("Moderada");

		useRupayStore
			.getState()
			.updateStudentPrefs({ notifyMenu: false, notifyLowBalance: false });
		expect(useRupayStore.getState().student.notifyMenu).toBe(false);
		expect(useRupayStore.getState().student.notifyLowBalance).toBe(false);

		useRupayStore.getState().resetDemoData();
		const resetState = useRupayStore.getState();
		expect(resetState.student.balance).toBe(42.5);
		expect(resetState.student.notifyMenu).toBe(true);
		expect(resetState.transactions).toHaveLength(4);
		expect(resetState.users).toHaveLength(8);
		expect(resetState.feedbacks).toHaveLength(3);
		expect(resetState.settings.mealPrices.almoco).toBe(12);
		expect(resetState.settings.queueStatus).toBe("Livre");
		expect(resetState.dailyRevenue).toBe(18430);
	});
});
