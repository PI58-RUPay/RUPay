const brlFormatter = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
});

const intFormatter = new Intl.NumberFormat("pt-BR");

const shortDateFormatter = new Intl.DateTimeFormat("pt-BR", {
	day: "2-digit",
	month: "2-digit",
	timeZone: "America/Sao_Paulo",
});

const fullDateFormatter = new Intl.DateTimeFormat("pt-BR", {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
	timeZone: "America/Sao_Paulo",
});

const timeFormatter = new Intl.DateTimeFormat("pt-BR", {
	hour: "2-digit",
	minute: "2-digit",
	hour12: false,
	timeZone: "America/Sao_Paulo",
});

export function roundCents(value: number): number {
	const rounded = Math.round(value * 100) / 100;
	return Object.is(rounded, -0) ? 0 : rounded;
}

export function formatBRL(value: number): string {
	const safe = Object.is(value, -0) ? 0 : value;
	return brlFormatter.format(safe);
}

export function formatInt(value: number): string {
	const safe = Object.is(value, -0) ? 0 : value;
	return intFormatter.format(safe);
}

export function formatDateShortBR(date: Date = new Date()): string {
	return shortDateFormatter.format(date);
}

export function formatDateFullBR(date: Date = new Date()): string {
	return fullDateFormatter.format(date);
}

export function formatTimeBR(date: Date = new Date()): string {
	return timeFormatter.format(date);
}

export function formatTransactionTimestampBR(date: Date = new Date()): string {
	return `${formatDateFullBR(date)} · ${formatTimeBR(date)}`;
}

export function formatActivityTimestampBR(date: Date = new Date()): string {
	return `${formatDateShortBR(date)} às ${formatTimeBR(date)}`;
}
