"use client";

import {
	BarChartIcon,
	Coins01Icon,
	Download01Icon,
	HappyIcon,
	Leaf01Icon,
	Restaurant01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@workspace/ui/components/card";
import { toast } from "sonner";
import { formatBRL, formatInt } from "@/lib/format";
import { useRupayStore } from "@/store/use-rupay-store";

function escapeCsvCell(value: string | number): string {
	const raw = String(value);
	if (raw.includes(";") || raw.includes('"') || raw.includes("\n")) {
		return `"${raw.replaceAll('"', '""')}"`;
	}
	return raw;
}

export function ReportsView() {
	const mealsServedToday = useRupayStore((s) => s.mealsServedToday);
	const dailyRevenue = useRupayStore((s) => s.dailyRevenue);
	const satisfactionPercent = useRupayStore((s) => s.satisfactionPercent);
	const mealDistribution = useRupayStore((s) => s.mealDistribution);
	const financialSeries = useRupayStore((s) => s.financialSeries);
	const student = useRupayStore((s) => s.student);

	const totalDistributionMeals =
		mealDistribution.almoco + mealDistribution.jantar + mealDistribution.lanche;

	const periodRevenueTotal = financialSeries.reduce(
		(sum, item) => sum + item.revenue,
		0,
	);
	const periodMealsTotal = financialSeries.reduce(
		(sum, item) => sum + item.meals,
		0,
	);

	// Campus aggregate impact across tracked RU meals
	const campusCupsAvoided = periodMealsTotal + student.cupsAvoided;
	const campusPaperSaved = periodMealsTotal * 2 + student.paperSheetsSaved;
	const campusCo2Kg = (
		(periodMealsTotal * 45 + student.co2SavedGrams) /
		1000
	).toFixed(1);

	const breakdownItems = [
		{
			label: "Almoço",
			count: mealDistribution.almoco,
			color: "bg-[#0B4F22]",
		},
		{
			label: "Jantar",
			count: mealDistribution.jantar,
			color: "bg-[#5FA927]",
		},
		{
			label: "Lanche",
			count: mealDistribution.lanche,
			color: "bg-[#9AD168]",
		},
	].map((item) => ({
		...item,
		pct:
			totalDistributionMeals > 0
				? Math.round((item.count / totalDistributionMeals) * 100)
				: 0,
	}));

	function handleExportCsv() {
		const lines: string[] = [
			"Relatorio Operacional RUPay - Universidade Nova Paulista",
			"Secao;Indicador;Valor;Detalhes",
			`Operacao;Refeicoes servidas hoje;${mealsServedToday};Distribuicao: Almoco ${mealDistribution.almoco} / Jantar ${mealDistribution.jantar} / Lanche ${mealDistribution.lanche}`,
			`Operacao;Arrecadacao hoje (BRL);${dailyRevenue.toFixed(2)};Satisfacao ${satisfactionPercent}%`,
			`Sustentabilidade;Copos plasticos evitados (campus);${campusCupsAvoided};Integracao QR Code sem cupom`,
			`Sustentabilidade;Folhas de papel economizadas (campus);${campusPaperSaved};Comprovantes digitais`,
			`Sustentabilidade;CO2 evitado estimado (kg);${campusCo2Kg};Base operacional do periodo`,
			"",
			"Data;Refeicoes;Arrecadacao (BRL);Ticket Medio (BRL)",
			...financialSeries.map((point) => {
				const avg = point.meals > 0 ? point.revenue / point.meals : 0;
				return [
					escapeCsvCell(point.dateLabel),
					escapeCsvCell(point.meals),
					escapeCsvCell(point.revenue.toFixed(2)),
					escapeCsvCell(avg.toFixed(2)),
				].join(";");
			}),
		];

		const csvContent = `\uFEFF${lines.join("\n")}`;
		const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "relatorio-rupay.csv";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);

		toast.success("Relatório relatorio-rupay.csv baixado com sucesso!");
	}

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">
						Relatórios Operacionais
					</h1>
					<p className="mt-1 text-sm text-muted-foreground">
						Consolidação financeira, fluxo por turno e impacto ambiental do
						campus.
					</p>
				</div>

				<Button onClick={handleExportCsv} className="w-fit">
					<HugeiconsIcon icon={Download01Icon} size={16} strokeWidth={2} />
					Exportar CSV
				</Button>
			</div>

			{/* Operational KPI Summary */}
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
				<Card className="py-4 shadow-xs">
					<CardContent className="flex items-center gap-3.5 px-5">
						<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
							<HugeiconsIcon
								icon={Restaurant01Icon}
								size={22}
								strokeWidth={1.8}
							/>
						</span>
						<div>
							<p className="text-xs font-medium text-muted-foreground">
								Refeições Hoje
							</p>
							<p className="mt-0.5 text-xl font-bold text-foreground tabular-nums">
								{formatInt(mealsServedToday)}
							</p>
						</div>
					</CardContent>
				</Card>

				<Card className="py-4 shadow-xs">
					<CardContent className="flex items-center gap-3.5 px-5">
						<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
							<HugeiconsIcon icon={Coins01Icon} size={22} strokeWidth={1.8} />
						</span>
						<div>
							<p className="text-xs font-medium text-muted-foreground">
								Arrecadação Hoje
							</p>
							<p className="mt-0.5 text-xl font-bold text-foreground tabular-nums">
								{formatBRL(dailyRevenue)}
							</p>
						</div>
					</CardContent>
				</Card>

				<Card className="py-4 shadow-xs">
					<CardContent className="flex items-center gap-3.5 px-5">
						<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
							<HugeiconsIcon icon={BarChartIcon} size={22} strokeWidth={1.8} />
						</span>
						<div>
							<p className="text-xs font-medium text-muted-foreground">
								Receita (8 dias)
							</p>
							<p className="mt-0.5 text-xl font-bold text-foreground tabular-nums">
								{formatBRL(periodRevenueTotal)}
							</p>
						</div>
					</CardContent>
				</Card>

				<Card className="py-4 shadow-xs">
					<CardContent className="flex items-center gap-3.5 px-5">
						<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
							<HugeiconsIcon icon={HappyIcon} size={22} strokeWidth={1.8} />
						</span>
						<div>
							<p className="text-xs font-medium text-muted-foreground">
								Satisfação Média
							</p>
							<p className="mt-0.5 text-xl font-bold text-foreground tabular-nums">
								{satisfactionPercent}%
							</p>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Sustainability Aggregate + Meal Breakdown */}
			<div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
				<Card className="gap-4 bg-accent/35 py-5 shadow-xs xl:col-span-6">
					<CardHeader className="px-5">
						<div className="flex items-center justify-between gap-2">
							<CardTitle className="flex items-center gap-2 text-base font-bold text-foreground">
								<HugeiconsIcon
									icon={Leaf01Icon}
									size={18}
									strokeWidth={2}
									className="text-primary"
								/>
								Sustentabilidade Agregada do Campus
							</CardTitle>
							<Badge variant="success">RU Sustentável</Badge>
						</div>
						<CardDescription>
							Economia acumulada com bilhetagem digital e redução de
							descartáveis em {formatInt(periodMealsTotal)} refeições do
							período.
						</CardDescription>
					</CardHeader>

					<CardContent className="grid grid-cols-1 gap-3 px-5 sm:grid-cols-3">
						<div className="rounded-xl border border-border/80 bg-card p-3.5">
							<p className="text-xs font-medium text-muted-foreground">
								Copos evitados
							</p>
							<p className="mt-1 text-xl font-bold text-primary tabular-nums">
								{formatInt(campusCupsAvoided)}
							</p>
							<p className="mt-0.5 text-[11px] text-muted-foreground">
								Canecas e refil digital
							</p>
						</div>

						<div className="rounded-xl border border-border/80 bg-card p-3.5">
							<p className="text-xs font-medium text-muted-foreground">
								Papel economizado
							</p>
							<p className="mt-1 text-xl font-bold text-primary tabular-nums">
								{formatInt(campusPaperSaved)} fls
							</p>
							<p className="mt-0.5 text-[11px] text-muted-foreground">
								Sem tickets impressos
							</p>
						</div>

						<div className="rounded-xl border border-border/80 bg-card p-3.5">
							<p className="text-xs font-medium text-muted-foreground">
								CO₂ evitado
							</p>
							<p className="mt-1 text-xl font-bold text-primary tabular-nums">
								{campusCo2Kg} kg
							</p>
							<p className="mt-0.5 text-[11px] text-muted-foreground">
								Pegada reduzida no RU
							</p>
						</div>
					</CardContent>
				</Card>

				<Card className="gap-4 py-5 shadow-xs xl:col-span-6">
					<CardHeader className="px-5">
						<CardTitle className="text-base font-bold">
							Distribuição de Refeições por Período
						</CardTitle>
						<CardDescription>
							Participação de cada turno no total de{" "}
							{formatInt(totalDistributionMeals)} refeições servidas hoje.
						</CardDescription>
					</CardHeader>

					<CardContent className="flex flex-col gap-4 px-5">
						{/* Stacked breakdown bar */}
						<div className="flex h-4 w-full overflow-hidden rounded-full bg-muted">
							{breakdownItems.map((item) => (
								<div
									key={item.label}
									className={`${item.color} transition-all`}
									style={{ width: `${item.pct}%` }}
									title={`${item.label}: ${item.pct}%`}
								/>
							))}
						</div>

						<div className="flex flex-col gap-3">
							{breakdownItems.map((item) => (
								<div key={item.label} className="flex flex-col gap-1">
									<div className="flex items-center justify-between text-xs font-semibold">
										<span className="inline-flex items-center gap-2 text-foreground">
											<span className={`size-2.5 rounded-full ${item.color}`} />
											{item.label}
										</span>
										<span className="text-muted-foreground tabular-nums">
											{formatInt(item.count)} ({item.pct}%)
										</span>
									</div>
									<div className="h-2 w-full overflow-hidden rounded-full bg-muted">
										<div
											className={`h-full rounded-full ${item.color}`}
											style={{ width: `${item.pct}%` }}
										/>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Daily Breakdown Table */}
			<Card className="gap-4 py-5 shadow-xs">
				<CardHeader className="px-5">
					<CardTitle className="text-base font-bold">
						Série Diária Consolidada
					</CardTitle>
					<CardDescription>
						Resumo dos últimos 8 dias de operação incluídos na exportação CSV.
					</CardDescription>
				</CardHeader>

				<CardContent className="px-5">
					<div className="overflow-x-auto">
						<table className="w-full min-w-[520px] border-collapse text-left text-sm">
							<thead>
								<tr className="border-b border-border text-xs font-semibold uppercase tracking-wide text-muted-foreground">
									<th className="py-3 pr-4">Data</th>
									<th className="py-3 pr-4 text-right">Refeições</th>
									<th className="py-3 pr-4 text-right">Arrecadação</th>
									<th className="py-3 text-right">Receita / Refeição</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-border/60">
								{financialSeries.map((point) => {
									const avg = point.meals > 0 ? point.revenue / point.meals : 0;
									return (
										<tr
											key={point.dateLabel}
											className="transition-colors hover:bg-muted/35"
										>
											<td className="py-3 pr-4 font-medium text-foreground tabular-nums">
												{point.dateLabel}
											</td>
											<td className="py-3 pr-4 text-right text-foreground tabular-nums">
												{formatInt(point.meals)}
											</td>
											<td className="py-3 pr-4 text-right font-semibold text-primary tabular-nums">
												{formatBRL(point.revenue)}
											</td>
											<td className="py-3 text-right text-muted-foreground tabular-nums">
												{formatBRL(avg)}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
