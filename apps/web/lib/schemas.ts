import { z } from "zod";

export const rechargeSchema = z.object({
	amount: z
		.number("Informe um valor numérico válido")
		.min(5, "Valor mínimo de R$ 5,00")
		.max(500, "Valor máximo de R$ 500,00"),
	method: z.enum(["pix", "cartao", "boleto"], "Método de pagamento inválido"),
});

export const manualRechargeSchema = z.object({
	amount: z
		.number("Informe um valor numérico válido")
		.min(1, "Valor mínimo de R$ 1,00")
		.max(500, "Valor máximo de R$ 500,00"),
});

export const menuEntrySchema = z.object({
	id: z.string().min(1, "ID do cardápio é obrigatório"),
	period: z.enum(["almoco", "jantar", "lanche"], "Período inválido"),
	dateLabel: z.string().min(2, "Data deve ter ao menos 2 caracteres"),
	mainDish: z.string().min(3, "Prato principal deve ter ao menos 3 caracteres"),
	veganOption: z.string().min(3, "Opção vegana deve ter ao menos 3 caracteres"),
	sideDish: z.string().min(2, "Guarnição deve ter ao menos 2 caracteres"),
	accompaniment: z
		.string()
		.min(2, "Acompanhamento deve ter ao menos 2 caracteres"),
	salad: z.string().min(2, "Salada deve ter ao menos 2 caracteres"),
	dessert: z.string().min(2, "Sobremesa deve ter ao menos 2 caracteres"),
	juice: z.string().min(2, "Suco deve ter ao menos 2 caracteres"),
	calories: z
		.number("Calorias devem ser numéricas")
		.int("Calorias devem ser um número inteiro")
		.min(100, "Calorias mínimas de 100 kcal")
		.max(2000, "Calorias máximas de 2000 kcal"),
	allergens: z.array(z.string()),
	published: z.boolean(),
	updatedAt: z.string(),
});

export const announcementSchema = z.object({
	title: z.string().min(3, "Título deve ter ao menos 3 caracteres"),
	message: z.string().min(5, "Mensagem deve ter ao menos 5 caracteres"),
	category: z.enum(
		["info", "cardapio", "sustentabilidade", "fila"],
		"Categoria inválida",
	),
});

export const newUserSchema = z.object({
	name: z.string().min(3, "Nome deve ter ao menos 3 caracteres"),
	ra: z.string().min(4, "RA deve ter ao menos 4 caracteres"),
	course: z.string().min(2, "Curso deve ter ao menos 2 caracteres"),
	role: z.enum(["Estudante", "Bolsista", "Servidor"], "Vínculo inválido"),
	initialBalance: z
		.number("Saldo inicial deve ser numérico")
		.min(0, "Saldo inicial não pode ser negativo")
		.max(500, "Saldo inicial máximo de R$ 500,00"),
});

export const feedbackSchema = z.object({
	rating: z
		.number("Avaliação deve ser numérica")
		.int("Avaliação deve ser um número inteiro")
		.min(1, "Nota mínima é 1")
		.max(5, "Nota máxima é 5"),
	comment: z
		.string()
		.max(300, "Comentário deve ter no máximo 300 caracteres")
		.optional(),
});

export const settingsSchema = z.object({
	mealPrices: z.object({
		almoco: z
			.number("Valor do almoço deve ser numérico")
			.min(1, "Valor mínimo de R$ 1,00")
			.max(100, "Valor máximo de R$ 100,00"),
		jantar: z
			.number("Valor do jantar deve ser numérico")
			.min(1, "Valor mínimo de R$ 1,00")
			.max(100, "Valor máximo de R$ 100,00"),
		lanche: z
			.number("Valor do lanche deve ser numérico")
			.min(1, "Valor mínimo de R$ 1,00")
			.max(100, "Valor máximo de R$ 100,00"),
	}),
	queueWaitMinutes: z
		.number("Tempo de espera deve ser numérico")
		.int("Tempo de espera deve ser inteiro")
		.min(0, "Tempo mínimo é 0 minutos")
		.max(120, "Tempo máximo é 120 minutos"),
	queueStatus: z.enum(
		["Livre", "Moderada", "Intensa"],
		"Status da fila inválido",
	),
	openingHours: z
		.string()
		.min(3, "Horário de funcionamento deve ter ao menos 3 caracteres"),
});

export type RechargeInput = z.infer<typeof rechargeSchema>;
export type MenuEntryInput = z.infer<typeof menuEntrySchema>;
export type AnnouncementInput = z.infer<typeof announcementSchema>;
export type NewUserInput = z.infer<typeof newUserSchema>;
export type FeedbackInput = z.infer<typeof feedbackSchema>;
export type SettingsInput = z.infer<typeof settingsSchema>;
