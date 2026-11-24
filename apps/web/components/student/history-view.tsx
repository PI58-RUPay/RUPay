"use client";

import {
	Add01Icon,
	ArrowLeft01Icon,
	Leaf01Icon,
	Restaurant01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@workspace/ui/lib/utils";
import { useState } from "react";
import { formatBRL } from "@/lib/format";
import { MEAL_PERIOD_LABELS, PAYMENT_METHOD_LABELS } from "@/lib/mock-data";
import { useRupayStore } from "@/store/use-rupay-store";

type HistoryFilter = "todas" | "recarga" | "consumo";

interface HistoryViewProps {
	onBack: () => void;
}

const FILTERS: { value: HistoryFilter; label: string }[] = [
	{ value: "todas", label: "Todas" },
	{ value: "recarga", label: "Recargas" },
	{ value: "consumo", label: "Consumos" },
];

export function HistoryView({ onBack }: HistoryViewProps) {
	const transactions = useRupayStore((state) => state.transactions);
	const student = useRupayStore((state) => state.student);
	const [filter, setFilter] = useState<HistoryFilter>("todas");

	const studentTransactions = transactions.filter(
		(tx) => tx.userRa === student.ra,
	);
	const filtered = studentTransactions.filter((tx) =>
		filter === "todas" ? true : tx.type === filter,
	);

	return (
		<div className="flex flex-col px-4 py-5">
			{/* Header with back arrow */}
			<header className="relative flex items-center justify-center pb-4">
				<button
					type="button"
					onClick={onBack}
					aria-label="Voltar para Início"
					className="absolute left-0 inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
				>
					<HugeiconsIcon icon={ArrowLeft01Icon} size={20} strokeWidth={2} />
				</button>
				<h1 className="text-lg font-bold tracking-tight text-foreground">
					Histórico
				</h1>
			</header>

			{/* Filter Pills */}
			<div
				role="tablist"
				aria-label="Filtrar movimentações"
				className="grid grid-cols-3 gap-2 pb-4"
			>
				{FILTERS.map((item) => {
					const active = filter === item.value;
					return (
						<button
							key={item.value}
							type="button"
							role="tab"
							aria-selected={active}
							onClick={() => setFilter(item.value)}
							className={cn(
								"rounded-full px-3 py-2 text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
								active
									? "bg-[#0B4F22] text-white shadow-xs dark:bg-primary dark:text-primary-foreground"
									: "bg-muted text-foreground/80 hover:bg-secondary",
							)}
						>
							{item.label}
						</button>
					);
				})}
			</div>

			{/* Transaction list */}
			<div className="divide-y divide-border/70 rounded-2xl border border-border/80 bg-card px-4 shadow-xs">
				{filtered.length === 0 ? (
					<p className="py-8 text-center text-sm text-muted-foreground">
						Nenhuma movimentação encontrada neste filtro.
					</p>
				) : (
					filtered.map((tx) => {
						const isRecharge = tx.type === "recarga";
						const detailLabel = isRecharge
							? tx.method
								? `${tx.dateLabel} · ${PAYMENT_METHOD_LABELS[tx.method]}`
								: tx.dateLabel
							: tx.period
								? `${tx.dateLabel} · ${MEAL_PERIOD_LABELS[tx.period]}`
								: tx.dateLabel;

						return (
							<div
								key={tx.id}
								className="flex items-center justify-between gap-3 py-3.5"
							>
								<div className="flex min-w-0 items-center gap-3">
									<span
										className={cn(
											"flex size-10 shrink-0 items-center justify-center rounded-full",
											isRecharge
												? "bg-[#5FA927] text-white"
												: "bg-[#F2E9CF] text-[#0B4F22] dark:bg-[#2A3A2C] dark:text-[#9AD168]",
										)}
									>
										<HugeiconsIcon
											icon={isRecharge ? Add01Icon : Restaurant01Icon}
											size={19}
											strokeWidth={2}
										/>
									</span>

									<div className="min-w-0">
										<p className="truncate text-sm font-semibold text-foreground">
											{tx.title}
										</p>
										<p className="truncate text-xs text-muted-foreground">
											{detailLabel}
										</p>
									</div>
								</div>

								<span
									className={cn(
										"shrink-0 text-sm font-bold tabular-nums",
										isRecharge
											? "text-[#5FA927] dark:text-[#86CF4D]"
											: "text-[#C94A1E] dark:text-[#F0855E]",
									)}
								>
									{isRecharge ? "+" : "-"} {formatBRL(Math.abs(tx.amount))}
								</span>
							</div>
						);
					})
				)}
			</div>

			{/* Bottom Eco Banner */}
			<div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#5FA927]/25 bg-gradient-to-r from-[#EBF4E3] via-[#DFF0D2] to-[#CCE7B5] p-4 shadow-xs dark:border-[#5FA927]/30 dark:from-[#1B3B25] dark:to-[#245231]">
				<span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/80 text-[#5FA927] dark:bg-[#0B4F22]/70">
					<HugeiconsIcon icon={Leaf01Icon} size={22} strokeWidth={1.8} />
				</span>
				<p className="text-xs font-semibold leading-relaxed text-[#0B4F22] dark:text-[#DDF2C7]">
					Você já evitou o desperdício de aproximadamente {student.cupsAvoided}{" "}
					copos plásticos!
				</p>
			</div>
		</div>
	);
}
