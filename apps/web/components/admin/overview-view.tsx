"use client";

import {
	ArrowDown01Icon,
	ArrowRight01Icon,
	ArrowUp01Icon,
	BarChartIcon,
	Clock01Icon,
	Coins01Icon,
	CreditCardIcon,
	FlashIcon,
	HappyIcon,
	Restaurant01Icon,
	UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@workspace/ui/components/card";
import { useId, useSyncExternalStore } from "react";
import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import type { AdminNavKey } from "@/components/admin/admin-shell";
import { formatBRL, formatInt } from "@/lib/format";
import { useRupayStore } from "@/store/use-rupay-store";

const emptySubscribe = () => () => {};

function useIsMounted(): boolean {
	return useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	);
}

const BAR_GRADIENT_COLORS = [
	"#A9D984",
	"#96CD70",
	"#81C05B",
	"#6BB247",
	"#53A036",
	"#3B8B2D",
	"#237126",
	"#0B4F22",
];

interface QuickActionItem {
	label: string;
	target: AdminNavKey;
	icon: IconSvgElement;
}

const QUICK_ACTIONS: QuickActionItem[] = [
	{
		label: "Consultar Vendas",
		target: "pagamentos",
		icon: CreditCardIcon,
	},
	{
		label: "Gerenciar Usuários",
		target: "usuarios",
		icon: UserGroupIcon,
	},
	{
		label: "Atualizar Cardápio",
		target: "cardapio",
		icon: Restaurant01Icon,
	},
	{
		label: "Ver Relatórios",
		target: "relatorios",
		icon: BarChartIcon,
	},
];

function formatTooltipCount(value: unknown): string {
	const numeric = typeof value === "number" ? value : Number(value);
	if (Number.isFinite(numeric)) {
		return `${formatInt(numeric)} acessos`;
	}
	return String(value ?? "");
}

function formatTooltipCurrency(value: unknown): string {
	const numeric = typeof value === "number" ? value : Number(value);
	if (Number.isFinite(numeric)) {
		return formatBRL(numeric);
	}
	return String(value ?? "");
}

function formatTooltipMeals(value: unknown): string {
	const numeric = typeof value === "number" ? value : Number(value);
	if (Number.isFinite(numeric)) {
		return `${formatInt(numeric)} refeições`;
	}
	return String(value ?? "");
}

export function OverviewView({
	onNavigate,
}: {
	onNavigate: (tab: AdminNavKey) => void;
}) {
	const mounted = useIsMounted();
	const uid = useId();
	const hojeGradId = `traffic-hoje-${uid}`;
	const ontemGradId = `traffic-ontem-${uid}`;

	const mealsServedToday = useRupayStore((s) => s.mealsServedToday);
	const dailyRevenue = useRupayStore((s) => s.dailyRevenue);
	const satisfactionPercent = useRupayStore((s) => s.satisfactionPercent);
	const mealDistribution = useRupayStore((s) => s.mealDistribution);
	const hourlyTraffic = useRupayStore((s) => s.hourlyTraffic);
	const financialSeries = useRupayStore((s) => s.financialSeries);
	const activities = useRupayStore((s) => s.activities);
	const settings = useRupayStore((s) => s.settings);

	const totalMeals =
		mealDistribution.almoco + mealDistribution.jantar + mealDistribution.lanche;

	const almocoPct =
		totalMeals > 0
			? Math.round((mealDistribution.almoco / totalMeals) * 100)
			: 0;
	const jantarPct =
		totalMeals > 0
			? Math.round((mealDistribution.jantar / totalMeals) * 100)
			: 0;
	const lanchePct =
		totalMeals > 0 ? Math.max(0, 100 - almocoPct - jantarPct) : 0;

	const pieData = [
		{
			name: "Almoço",
			value: mealDistribution.almoco,
			pct: almocoPct,
			fill: "#0B4F22",
		},
		{
			name: "Jantar",
			value: mealDistribution.jantar,
			pct: jantarPct,
			fill: "#5FA927",
		},
		{
			name: "Lanche",
			value: mealDistribution.lanche,
			pct: lanchePct,
			fill: "#9AD168",
		},
	];

	const kpiCards = [
		{
			icon: Restaurant01Icon,
			value: formatInt(mealsServedToday),
			label: "Refeições servidas",
			delta: "+6%",
			trend: "up" as const,
		},
		{
			icon: Coins01Icon,
			value: formatBRL(dailyRevenue),
			label: "Arrecadação do dia",
			delta: "+8%",
			trend: "up" as const,
		},
		{
			icon: Clock01Icon,
			value: `${settings.queueWaitMinutes} min`,
			label: "Tempo médio de atendimento",
			delta: "-12%",
			trend: "down" as const,
		},
		{
			icon: HappyIcon,
			value: `${satisfactionPercent}%`,
			label: "Satisfação dos usuários",
			delta: "+1%",
			trend: "up" as const,
		},
	];

	return (
		<div className="flex flex-col gap-5">
			<div>
				<h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">
					Visão Geral do Restaurante
				</h1>
				<p className="mt-1 text-sm text-muted-foreground">
					Acompanhe o desempenho e a operação do RU em tempo real.
				</p>
			</div>

			{/* Top Grid: 4 KPIs + Ações Rápidas */}
			<div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
				<div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 xl:col-span-8">
					{kpiCards.map((kpi) => (
						<Card
							key={kpi.label}
							className="justify-center gap-2 py-4 shadow-xs"
						>
							<CardContent className="flex flex-col items-center px-3.5 text-center">
								<span className="mb-2 inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
									<HugeiconsIcon icon={kpi.icon} size={24} strokeWidth={1.8} />
								</span>
								<p className="text-lg font-bold tracking-tight text-foreground tabular-nums sm:text-xl 2xl:text-2xl">
									{kpi.value}
								</p>
								<p className="mt-0.5 text-xs font-medium text-muted-foreground">
									{kpi.label}
								</p>
								<span className="mt-2 inline-flex items-center gap-0.5 text-xs font-semibold text-chart-2">
									<HugeiconsIcon
										icon={kpi.trend === "up" ? ArrowUp01Icon : ArrowDown01Icon}
										size={14}
										strokeWidth={2.2}
									/>
									{kpi.delta}
								</span>
							</CardContent>
						</Card>
					))}
				</div>

				<Card className="gap-3 py-4 shadow-xs xl:col-span-4">
					<CardHeader className="px-5">
						<CardTitle className="flex items-center gap-2 text-base font-bold">
							<HugeiconsIcon
								icon={FlashIcon}
								size={18}
								strokeWidth={2}
								className="text-primary"
							/>
							Ações Rápidas
						</CardTitle>
					</CardHeader>
					<CardContent className="grid grid-cols-2 gap-2.5 px-5">
						{QUICK_ACTIONS.map((action) => (
							<button
								key={action.target}
								type="button"
								onClick={() => onNavigate(action.target)}
								className="flex flex-col items-center justify-center gap-1.5 rounded-xl bg-accent/80 px-2.5 py-3 text-center text-accent-foreground transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none dark:bg-accent/50 dark:hover:bg-accent/80"
							>
								<HugeiconsIcon
									icon={action.icon}
									size={20}
									strokeWidth={1.8}
									className="text-primary"
								/>
								<span className="text-xs font-semibold leading-tight">
									{action.label}
								</span>
							</button>
						))}
					</CardContent>
				</Card>
			</div>

			{/* Middle Grid: Movimentação do RU + Distribuição das Refeições */}
			<div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
				<Card className="gap-3 py-5 shadow-xs xl:col-span-7">
					<CardHeader className="flex flex-row items-center justify-between px-5">
						<CardTitle className="flex items-center gap-2 text-base font-bold">
							<HugeiconsIcon
								icon={BarChartIcon}
								size={18}
								strokeWidth={2}
								className="text-primary"
							/>
							Movimentação do RU
						</CardTitle>
						<button
							type="button"
							onClick={() => onNavigate("relatorios")}
							className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
						>
							Ver mais
							<HugeiconsIcon
								icon={ArrowRight01Icon}
								size={14}
								strokeWidth={2}
							/>
						</button>
					</CardHeader>
					<CardContent className="px-5">
						<div className="mb-2 flex items-center justify-end gap-4 text-xs font-medium text-muted-foreground">
							<span className="inline-flex items-center gap-1.5">
								<span className="size-2.5 rounded-full bg-[#0B4F22]" />
								Hoje
							</span>
							<span className="inline-flex items-center gap-1.5">
								<span className="size-2.5 rounded-full bg-[#8FD16A]" />
								Ontem
							</span>
						</div>

						<div className="h-[225px] w-full">
							{mounted ? (
								<ResponsiveContainer width="100%" height="100%">
									<AreaChart
										data={hourlyTraffic}
										margin={{ top: 8, right: 12, left: -10, bottom: 0 }}
									>
										<defs>
											<linearGradient
												id={hojeGradId}
												x1="0"
												y1="0"
												x2="0"
												y2="1"
											>
												<stop
													offset="0%"
													stopColor="#0B4F22"
													stopOpacity={0.18}
												/>
												<stop
													offset="100%"
													stopColor="#0B4F22"
													stopOpacity={0.02}
												/>
											</linearGradient>
											<linearGradient
												id={ontemGradId}
												x1="0"
												y1="0"
												x2="0"
												y2="1"
											>
												<stop
													offset="0%"
													stopColor="#8FD16A"
													stopOpacity={0.24}
												/>
												<stop
													offset="100%"
													stopColor="#8FD16A"
													stopOpacity={0.02}
												/>
											</linearGradient>
										</defs>
										<CartesianGrid
											strokeDasharray="3 3"
											vertical={false}
											stroke="var(--border)"
										/>
										<XAxis
											dataKey="hour"
											axisLine={false}
											tickLine={false}
											tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
										/>
										<YAxis
											axisLine={false}
											tickLine={false}
											width={40}
											tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
											tickFormatter={(v: number) =>
												v >= 1000
													? `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}k`
													: String(v)
											}
										/>
										<Tooltip
											contentStyle={{
												backgroundColor: "var(--card)",
												borderColor: "var(--border)",
												borderRadius: "12px",
												fontSize: "12px",
												color: "var(--foreground)",
											}}
											formatter={(value) => formatTooltipCount(value)}
										/>
										<Area
											type="linear"
											dataKey="ontem"
											name="Ontem"
											stroke="#8FD16A"
											strokeWidth={2}
											fill={`url(#${ontemGradId})`}
											dot={{ r: 4, fill: "#8FD16A", strokeWidth: 0 }}
											activeDot={{ r: 5.5 }}
										/>
										<Area
											type="linear"
											dataKey="hoje"
											name="Hoje"
											stroke="#0B4F22"
											strokeWidth={2.5}
											fill={`url(#${hojeGradId})`}
											dot={{ r: 4.5, fill: "#0B4F22", strokeWidth: 0 }}
											activeDot={{ r: 6 }}
										/>
									</AreaChart>
								</ResponsiveContainer>
							) : (
								<div className="h-full w-full animate-pulse rounded-xl bg-muted/50" />
							)}
						</div>
					</CardContent>
				</Card>

				<Card className="gap-3 py-5 shadow-xs xl:col-span-5">
					<CardHeader className="px-5">
						<CardTitle className="text-base font-bold">
							Distribuição das Refeições
						</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-1 flex-col items-center justify-center gap-6 px-5 sm:flex-row">
						<div className="relative flex size-[184px] shrink-0 items-center justify-center">
							{mounted ? (
								<ResponsiveContainer width="100%" height="100%">
									<PieChart>
										<Pie
											data={pieData}
											dataKey="value"
											nameKey="name"
											cx="50%"
											cy="50%"
											innerRadius={56}
											outerRadius={84}
											startAngle={90}
											endAngle={-270}
											stroke="none"
										/>
										<Tooltip
											contentStyle={{
												backgroundColor: "var(--card)",
												borderColor: "var(--border)",
												borderRadius: "12px",
												fontSize: "12px",
												color: "var(--foreground)",
											}}
											formatter={(value) => formatTooltipMeals(value)}
										/>
									</PieChart>
								</ResponsiveContainer>
							) : (
								<div className="size-[168px] animate-pulse rounded-full bg-muted/50" />
							)}
							<div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
								<span className="text-2xl font-bold text-foreground tabular-nums">
									{formatInt(totalMeals)}
								</span>
								<span className="text-xs font-medium text-muted-foreground">
									Total
								</span>
							</div>
						</div>

						<div className="flex w-full max-w-[190px] flex-col gap-3.5">
							{pieData.map((entry) => (
								<div
									key={entry.name}
									className="flex items-center justify-between gap-3 text-sm"
								>
									<span className="inline-flex items-center gap-2 font-medium text-foreground">
										<span
											className="size-3 rounded-full shrink-0"
											style={{ backgroundColor: entry.fill }}
										/>
										{entry.name}
									</span>
									<span className="font-semibold text-foreground tabular-nums">
										{entry.pct}%
									</span>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Bottom Grid: Resumo Financeiro + Últimas Atividades */}
			<div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
				<Card className="gap-3 py-5 shadow-xs xl:col-span-6">
					<CardHeader className="flex flex-row items-center justify-between px-5">
						<CardTitle className="flex items-center gap-2 text-base font-bold">
							<HugeiconsIcon
								icon={Coins01Icon}
								size={18}
								strokeWidth={2}
								className="text-primary"
							/>
							Resumo Financeiro
						</CardTitle>
						<button
							type="button"
							onClick={() => onNavigate("pagamentos")}
							className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
						>
							Ver detalhes
							<HugeiconsIcon
								icon={ArrowRight01Icon}
								size={14}
								strokeWidth={2}
							/>
						</button>
					</CardHeader>
					<CardContent className="grid grid-cols-1 items-end gap-4 px-5 sm:grid-cols-12">
						<div className="flex flex-col gap-1.5 sm:col-span-5">
							<p className="text-2xl font-bold tracking-tight text-primary tabular-nums sm:text-[28px]">
								{formatBRL(dailyRevenue)}
							</p>
							<p className="text-xs text-muted-foreground">
								em relação ao período anterior
							</p>
							<span className="inline-flex items-center gap-1 text-xs font-bold text-chart-2">
								<HugeiconsIcon
									icon={ArrowUp01Icon}
									size={14}
									strokeWidth={2.2}
								/>
								+8,5%
							</span>
						</div>

						<div className="h-[126px] w-full sm:col-span-7">
							{mounted ? (
								<ResponsiveContainer width="100%" height="100%">
									<BarChart
										data={financialSeries}
										margin={{ top: 6, right: 4, left: 4, bottom: 0 }}
									>
										<XAxis dataKey="dateLabel" hide />
										<Tooltip
											cursor={{ fill: "var(--muted)", opacity: 0.35 }}
											contentStyle={{
												backgroundColor: "var(--card)",
												borderColor: "var(--border)",
												borderRadius: "12px",
												fontSize: "12px",
												color: "var(--foreground)",
											}}
											formatter={(value) => formatTooltipCurrency(value)}
										/>
										<Bar dataKey="revenue" name="Receita" radius={[4, 4, 0, 0]}>
											{financialSeries.map((entry, index) => (
												<Cell
													key={entry.dateLabel}
													fill={
														BAR_GRADIENT_COLORS[
															index % BAR_GRADIENT_COLORS.length
														]
													}
												/>
											))}
										</Bar>
									</BarChart>
								</ResponsiveContainer>
							) : (
								<div className="h-full w-full animate-pulse rounded-xl bg-muted/50" />
							)}
						</div>
					</CardContent>
				</Card>

				<Card className="gap-3 py-5 shadow-xs xl:col-span-6">
					<CardHeader className="flex flex-row items-center justify-between px-5">
						<CardTitle className="flex items-center gap-2 text-base font-bold">
							<HugeiconsIcon
								icon={Clock01Icon}
								size={18}
								strokeWidth={2}
								className="text-primary"
							/>
							Últimas Atividades
						</CardTitle>
						<button
							type="button"
							onClick={() => onNavigate("pagamentos")}
							className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
						>
							Ver todas
							<HugeiconsIcon
								icon={ArrowRight01Icon}
								size={14}
								strokeWidth={2}
							/>
						</button>
					</CardHeader>
					<CardContent className="flex flex-col divide-y divide-border/60 px-5">
						{activities.slice(0, 5).map((activity) => (
							<div
								key={activity.id}
								className="flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
							>
								<div className="flex min-w-0 items-center gap-2.5">
									<span className="size-2.5 shrink-0 rounded-full bg-chart-2" />
									<span className="truncate text-sm text-foreground">
										{activity.description}
									</span>
								</div>
								<span className="shrink-0 text-xs font-medium text-muted-foreground tabular-nums">
									{activity.timeLabel}
								</span>
							</div>
						))}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
