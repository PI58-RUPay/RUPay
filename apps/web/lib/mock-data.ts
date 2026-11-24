export type PaymentMethod = "pix" | "cartao" | "boleto";
export type MealPeriod = "almoco" | "jantar" | "lanche";
export type UserRole = "Estudante" | "Bolsista" | "Servidor";
export type UserStatus = "Ativo" | "Bloqueado";
export type AnnouncementCategory =
	| "info"
	| "cardapio"
	| "sustentabilidade"
	| "fila";
export type QueueStatus = "Livre" | "Moderada" | "Intensa";
export type TransactionType = "recarga" | "consumo";
export type ActivityType =
	| "recarga"
	| "consumo"
	| "usuario"
	| "cardapio"
	| "aviso"
	| "config";

export interface StudentProfile {
	id: string;
	name: string;
	ra: string;
	course: string;
	role: UserRole;
	balance: number;
	cupsAvoided: number;
	paperSheetsSaved: number;
	co2SavedGrams: number;
	notifyMenu: boolean;
	notifyLowBalance: boolean;
}

export interface Transaction {
	id: string;
	type: TransactionType;
	title: string;
	dateLabel: string;
	amount: number;
	method?: PaymentMethod;
	period?: MealPeriod;
	userRa: string;
}

export interface MenuEntry {
	id: string;
	period: MealPeriod;
	dateLabel: string;
	mainDish: string;
	veganOption: string;
	sideDish: string;
	accompaniment: string;
	salad: string;
	dessert: string;
	juice: string;
	calories: number;
	allergens: string[];
	published: boolean;
	updatedAt: string;
}

export interface Announcement {
	id: string;
	title: string;
	message: string;
	category: AnnouncementCategory;
	dateLabel: string;
	read: boolean;
}

export interface RuUser {
	id: string;
	name: string;
	ra: string;
	course: string;
	role: UserRole;
	balance: number;
	status: UserStatus;
	lastActivity: string;
}

export interface StudentFeedback {
	id: string;
	authorName: string;
	rating: number;
	comment?: string;
	dateLabel: string;
}

export interface HourlyTrafficPoint {
	hour: string;
	hoje: number;
	ontem: number;
}

export interface FinancialSeriesPoint {
	dateLabel: string;
	revenue: number;
	meals: number;
}

export interface ActivityItem {
	id: string;
	type: ActivityType;
	description: string;
	timeLabel: string;
}

export interface MealDistribution {
	almoco: number;
	jantar: number;
	lanche: number;
}

export interface MealPrices {
	almoco: number;
	jantar: number;
	lanche: number;
}

export interface RuSettings {
	mealPrices: MealPrices;
	queueWaitMinutes: number;
	queueStatus: QueueStatus;
	openingHours: string;
}

export interface RupayDataState {
	student: StudentProfile;
	transactions: Transaction[];
	mealsServedToday: number;
	dailyRevenue: number;
	satisfactionPercent: number;
	mealDistribution: MealDistribution;
	hourlyTraffic: HourlyTrafficPoint[];
	financialSeries: FinancialSeriesPoint[];
	activities: ActivityItem[];
	menus: MenuEntry[];
	announcements: Announcement[];
	users: RuUser[];
	feedbacks: StudentFeedback[];
	settings: RuSettings;
}

export const MEAL_PERIOD_LABELS: Record<MealPeriod, string> = {
	almoco: "Almoço",
	jantar: "Jantar",
	lanche: "Lanche",
};

export const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string> = {
	pix: "Pix",
	cartao: "Cartão",
	boleto: "Boleto",
};

export const INITIAL_RUPAY_DATA: RupayDataState = {
	student: {
		id: "u-12345",
		name: "Marina Oliveira",
		ra: "12345",
		course: "Engenharia de Produção",
		role: "Estudante",
		balance: 42.5,
		cupsAvoided: 2,
		paperSheetsSaved: 14,
		co2SavedGrams: 340,
		notifyMenu: true,
		notifyLowBalance: true,
	},
	transactions: [
		{
			id: "tx-1",
			type: "recarga",
			title: "Recarga de créditos",
			dateLabel: "10/11/2025 · 14:32",
			amount: 50.0,
			method: "pix",
			userRa: "12345",
		},
		{
			id: "tx-2",
			type: "consumo",
			title: "Consumo no RU",
			dateLabel: "09/11/2025 · 12:20",
			amount: -12.0,
			period: "almoco",
			userRa: "12345",
		},
		{
			id: "tx-3",
			type: "consumo",
			title: "Consumo no RU",
			dateLabel: "08/11/2025 · 12:15",
			amount: -12.0,
			period: "almoco",
			userRa: "12345",
		},
		{
			id: "tx-4",
			type: "recarga",
			title: "Recarga de créditos",
			dateLabel: "05/11/2025 · 16:40",
			amount: 30.0,
			method: "cartao",
			userRa: "12345",
		},
	],
	mealsServedToday: 4820,
	dailyRevenue: 18430.0,
	satisfactionPercent: 98,
	mealDistribution: {
		almoco: 2506,
		jantar: 1542,
		lanche: 772,
	},
	hourlyTraffic: [
		{ hour: "08h", hoje: 1520, ontem: 1120 },
		{ hour: "10h", hoje: 2210, ontem: 1740 },
		{ hour: "12h", hoje: 2890, ontem: 2460 },
		{ hour: "14h", hoje: 2190, ontem: 1850 },
		{ hour: "16h", hoje: 2510, ontem: 2050 },
		{ hour: "18h", hoje: 2040, ontem: 1520 },
	],
	financialSeries: [
		{ dateLabel: "03/11", revenue: 11840, meals: 3920 },
		{ dateLabel: "04/11", revenue: 14120, meals: 4210 },
		{ dateLabel: "05/11", revenue: 13080, meals: 4050 },
		{ dateLabel: "06/11", revenue: 14950, meals: 4380 },
		{ dateLabel: "07/11", revenue: 17120, meals: 4690 },
		{ dateLabel: "08/11", revenue: 14640, meals: 4180 },
		{ dateLabel: "09/11", revenue: 16210, meals: 4490 },
		{ dateLabel: "10/11", revenue: 18430, meals: 4820 },
	],
	activities: [
		{
			id: "act-1",
			type: "recarga",
			description: "Recarga de créditos realizada por 12345",
			timeLabel: "10/11 às 16:40",
		},
		{
			id: "act-2",
			type: "consumo",
			description: "Consumo no RU - Bandejão",
			timeLabel: "10/11 às 16:35",
		},
		{
			id: "act-3",
			type: "usuario",
			description: "Novo usuário cadastrado",
			timeLabel: "10/11 às 16:20",
		},
	],
	menus: [
		{
			id: "menu-almoco",
			period: "almoco",
			dateLabel: "10/11/2025",
			mainDish: "Frango grelhado ao molho de ervas finas",
			veganOption: "Grão-de-bico ao curry com leite de coco",
			sideDish: "Purê de batata-doce com alecrim",
			accompaniment: "Arroz integral e feijão carioca",
			salad: "Mix de folhas verdes, tomate-cereja e cenoura ralada",
			dessert: "Abacaxi em cubos com hortelã",
			juice: "Suco natural de maracujá",
			calories: 680,
			allergens: ["Glúten (traços)"],
			published: true,
			updatedAt: "10/11/2025 · 09:30",
		},
		{
			id: "menu-jantar",
			period: "jantar",
			dateLabel: "10/11/2025",
			mainDish: "Carne de panela desfiada com legumes",
			veganOption: "Quibe assado de abóbora com quinoa",
			sideDish: "Polenta cremosa com ervas",
			accompaniment: "Arroz parboilizado e feijão preto",
			salad: "Rúcula, beterraba cozida e pepino",
			dessert: "Gelatina de uva sem açúcar",
			juice: "Suco natural de acerola",
			calories: 640,
			allergens: ["Glúten", "Soja"],
			published: true,
			updatedAt: "10/11/2025 · 15:00",
		},
		{
			id: "menu-lanche",
			period: "lanche",
			dateLabel: "10/11/2025",
			mainDish: "Sanduíche natural de frango com ricota",
			veganOption: "Wrap integral de homus com legumes grelhados",
			sideDish: "Mix de castanhas e frutas secas",
			accompaniment: "Pão integral multigrãos",
			salad: "Alface americana e tomate fatiado",
			dessert: "Banana-prata com aveia",
			juice: "Chá mate gelado com limão",
			calories: 390,
			allergens: ["Glúten", "Castanhas", "Lactose"],
			published: true,
			updatedAt: "10/11/2025 · 07:15",
		},
	],
	announcements: [
		{
			id: "ann-1",
			title: "Cardápio Especial Orgânico",
			message:
				"Nesta semana, os vegetais servidos no RU da Universidade Nova Paulista vêm diretamente da agricultura familiar regional.",
			category: "cardapio",
			dateLabel: "10/11 · 10:00",
			read: false,
		},
		{
			id: "ann-2",
			title: "Traga sua caneca reutilizável",
			message:
				"Evite copos descartáveis no Bandejão e acompanhe seu impacto positivo direto na aba RU Sustentável.",
			category: "sustentabilidade",
			dateLabel: "10/11 · 08:30",
			read: false,
		},
		{
			id: "ann-3",
			title: "Horário estendido no jantar",
			message:
				"Durante o período de avaliações finais, o atendimento do jantar segue normalmente até as 21h00.",
			category: "info",
			dateLabel: "09/11 · 17:45",
			read: true,
		},
	],
	users: [
		{
			id: "u-12345",
			name: "Marina Oliveira",
			ra: "12345",
			course: "Engenharia de Produção",
			role: "Estudante",
			balance: 42.5,
			status: "Ativo",
			lastActivity: "10/11 às 14:32",
		},
		{
			id: "u-12890",
			name: "Lucas Ferreira Santos",
			ra: "12890",
			course: "Ciência da Computação",
			role: "Estudante",
			balance: 68.0,
			status: "Ativo",
			lastActivity: "10/11 às 16:35",
		},
		{
			id: "u-13421",
			name: "Beatriz Almeida Costa",
			ra: "13421",
			course: "Arquitetura e Urbanismo",
			role: "Bolsista",
			balance: 24.0,
			status: "Ativo",
			lastActivity: "10/11 às 12:40",
		},
		{
			id: "u-14002",
			name: "Rafael Mendes Lima",
			ra: "14002",
			course: "Administração",
			role: "Estudante",
			balance: 15.5,
			status: "Ativo",
			lastActivity: "09/11 às 19:12",
		},
		{
			id: "u-15118",
			name: "Camila Souza Ribeiro",
			ra: "15118",
			course: "Biologia",
			role: "Bolsista",
			balance: 36.0,
			status: "Ativo",
			lastActivity: "10/11 às 13:05",
		},
		{
			id: "u-20410",
			name: "Prof. Eduardo Nogueira",
			ra: "20410",
			course: "Física Aplicada",
			role: "Servidor",
			balance: 112.0,
			status: "Ativo",
			lastActivity: "10/11 às 12:10",
		},
		{
			id: "u-16230",
			name: "Thiago Carvalho Dias",
			ra: "16230",
			course: "Direito",
			role: "Estudante",
			balance: 4.5,
			status: "Bloqueado",
			lastActivity: "07/11 às 18:22",
		},
		{
			id: "u-17509",
			name: "Juliana Martins Prado",
			ra: "17509",
			course: "Nutrição",
			role: "Estudante",
			balance: 54.0,
			status: "Ativo",
			lastActivity: "10/11 às 16:20",
		},
	],
	feedbacks: [
		{
			id: "fb-1",
			authorName: "Lucas Ferreira Santos",
			rating: 5,
			comment:
				"Frango grelhado muito bem temperado e fila andando em menos de dois minutos!",
			dateLabel: "10/11 · 13:15",
		},
		{
			id: "fb-2",
			authorName: "Beatriz Almeida Costa",
			rating: 5,
			comment: "A opção vegana de grão-de-bico ao curry estava excelente hoje.",
			dateLabel: "10/11 · 12:50",
		},
		{
			id: "fb-3",
			authorName: "Marina Oliveira",
			rating: 4,
			comment: "Pagamento via QR Code super prático, sem papel na entrada.",
			dateLabel: "09/11 · 12:35",
		},
	],
	settings: {
		mealPrices: {
			almoco: 12,
			jantar: 12,
			lanche: 6,
		},
		queueWaitMinutes: 1,
		queueStatus: "Livre",
		openingHours: "07h00 às 21h00",
	},
};
