"use client";

import {
	Add01Icon,
	CheckmarkCircle01Icon,
	Coins01Icon,
	CreditCardIcon,
	Restaurant01Icon,
	Search01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@workspace/ui/components/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import { useState } from "react";
import { toast } from "sonner";
import { formatBRL, formatInt } from "@/lib/format";
import { MEAL_PERIOD_LABELS, PAYMENT_METHOD_LABELS } from "@/lib/mock-data";
import { useRupayStore } from "@/store/use-rupay-store";

type TransactionFilter = "todas" | "recarga" | "consumo";

const PRESET_AMOUNTS = [15, 30, 50, 100];

export function PaymentsView() {
	const transactions = useRupayStore((s) => s.transactions);
	const users = useRupayStore((s) => s.users);
	const dailyRevenue = useRupayStore((s) => s.dailyRevenue);
	const adminManualRecharge = useRupayStore((s) => s.adminManualRecharge);

	const [filter, setFilter] = useState<TransactionFilter>("todas");
	const [search, setSearch] = useState("");
	const [dialogOpen, setDialogOpen] = useState(false);
	const [selectedUserId, setSelectedUserId] = useState(
		() => users[0]?.id ?? "",
	);
	const [amountInput, setAmountInput] = useState("30");
	const [formError, setFormError] = useState<string | null>(null);

	const totalRecargas = transactions
		.filter((tx) => tx.type === "recarga")
		.reduce((sum, tx) => sum + tx.amount, 0);

	const totalConsumos = transactions
		.filter((tx) => tx.type === "consumo")
		.reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

	const ticketMedio =
		transactions.length > 0
			? transactions.reduce((sum, tx) => sum + Math.abs(tx.amount), 0) /
				transactions.length
			: 0;

	const normalizedSearch = search.trim().toLowerCase();
	const filteredTransactions = transactions.filter((tx) => {
		if (filter !== "todas" && tx.type !== filter) {
			return false;
		}
		if (!normalizedSearch) {
			return true;
		}
		const methodLabel = tx.method
			? PAYMENT_METHOD_LABELS[tx.method].toLowerCase()
			: "";
		const periodLabel = tx.period
			? MEAL_PERIOD_LABELS[tx.period].toLowerCase()
			: "";
		return (
			tx.userRa.toLowerCase().includes(normalizedSearch) ||
			tx.title.toLowerCase().includes(normalizedSearch) ||
			methodLabel.includes(normalizedSearch) ||
			periodLabel.includes(normalizedSearch)
		);
	});

	function openRechargeDialog() {
		setSelectedUserId((current) =>
			users.some((u) => u.id === current) ? current : (users[0]?.id ?? ""),
		);
		setAmountInput("30");
		setFormError(null);
		setDialogOpen(true);
	}

	function handleManualRecharge(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setFormError(null);

		const parsedAmount = Number(amountInput.replace(",", "."));
		if (!selectedUserId) {
			setFormError("Selecione um usuário para realizar a recarga.");
			return;
		}

		const result = adminManualRecharge(selectedUserId, parsedAmount);
		if (!result.ok) {
			setFormError(result.error);
			return;
		}

		const target = users.find((u) => u.id === selectedUserId);
		toast.success(
			`Recarga manual de ${formatBRL(parsedAmount)} realizada para ${target?.name ?? "usuário"}!`,
		);
		setDialogOpen(false);
	}

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">
						Pagamentos e Recargas
					</h1>
					<p className="mt-1 text-sm text-muted-foreground">
						Monitore entradas, consumos no bandejão e realize recargas manuais
						no balcão.
					</p>
				</div>

				<Button onClick={openRechargeDialog} className="w-fit">
					<HugeiconsIcon icon={Add01Icon} size={16} strokeWidth={2} />
					Nova Recarga Manual
				</Button>
			</div>

			{/* Summary KPIs */}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<Card className="py-4 shadow-xs">
					<CardContent className="flex items-center gap-4 px-5">
						<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
							<HugeiconsIcon
								icon={CreditCardIcon}
								size={22}
								strokeWidth={1.8}
							/>
						</span>
						<div>
							<p className="text-xs font-medium text-muted-foreground">
								Total Recargas (Extrato)
							</p>
							<p className="mt-0.5 text-xl font-bold text-foreground tabular-nums">
								{formatBRL(totalRecargas)}
							</p>
							<p className="text-xs text-muted-foreground">
								Receita do dia: {formatBRL(dailyRevenue)}
							</p>
						</div>
					</CardContent>
				</Card>

				<Card className="py-4 shadow-xs">
					<CardContent className="flex items-center gap-4 px-5">
						<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
							<HugeiconsIcon
								icon={Restaurant01Icon}
								size={22}
								strokeWidth={1.8}
							/>
						</span>
						<div>
							<p className="text-xs font-medium text-muted-foreground">
								Total Consumos
							</p>
							<p className="mt-0.5 text-xl font-bold text-foreground tabular-nums">
								{formatBRL(totalConsumos)}
							</p>
							<p className="text-xs text-muted-foreground">
								{formatInt(
									transactions.filter((tx) => tx.type === "consumo").length,
								)}{" "}
								passagens registradas
							</p>
						</div>
					</CardContent>
				</Card>

				<Card className="py-4 shadow-xs">
					<CardContent className="flex items-center gap-4 px-5">
						<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
							<HugeiconsIcon icon={Coins01Icon} size={22} strokeWidth={1.8} />
						</span>
						<div>
							<p className="text-xs font-medium text-muted-foreground">
								Ticket Médio
							</p>
							<p className="mt-0.5 text-xl font-bold text-foreground tabular-nums">
								{formatBRL(ticketMedio)}
							</p>
							<p className="text-xs text-muted-foreground">
								Média em {formatInt(transactions.length)} transações
							</p>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Filter & Table */}
			<Card className="gap-4 py-5 shadow-xs">
				<CardHeader className="flex flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between">
					<CardTitle className="text-base font-bold">
						Histórico de Transações
					</CardTitle>

					<div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
						<Tabs
							value={filter}
							onValueChange={(value) =>
								setFilter(String(value) as TransactionFilter)
							}
						>
							<TabsList>
								<TabsTrigger value="todas">Todas</TabsTrigger>
								<TabsTrigger value="recarga">Recargas</TabsTrigger>
								<TabsTrigger value="consumo">Consumos</TabsTrigger>
							</TabsList>
						</Tabs>

						<div className="relative w-full sm:w-64">
							<HugeiconsIcon
								icon={Search01Icon}
								size={16}
								strokeWidth={1.8}
								className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
							/>
							<Input
								value={search}
								onChange={(event) => setSearch(event.target.value)}
								placeholder="Buscar por RA ou título..."
								className="pl-9"
							/>
						</div>
					</div>
				</CardHeader>

				<CardContent className="px-5">
					{filteredTransactions.length === 0 ? (
						<div className="rounded-xl border border-dashed border-border py-10 text-center text-sm text-muted-foreground">
							Nenhuma transação encontrada para os filtros aplicados.
						</div>
					) : (
						<div className="overflow-x-auto">
							<table className="w-full min-w-[640px] border-collapse text-left text-sm">
								<thead>
									<tr className="border-b border-border text-xs font-semibold uppercase tracking-wide text-muted-foreground">
										<th className="py-3 pr-4">Tipo</th>
										<th className="py-3 pr-4">Descrição</th>
										<th className="py-3 pr-4">Detalhe</th>
										<th className="py-3 pr-4">RA</th>
										<th className="py-3 pr-4">Data / Hora</th>
										<th className="py-3 text-right">Valor</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-border/60">
									{filteredTransactions.map((tx) => (
										<tr
											key={tx.id}
											className="transition-colors hover:bg-muted/35"
										>
											<td className="py-3 pr-4">
												<Badge
													variant={
														tx.type === "recarga" ? "success" : "secondary"
													}
												>
													{tx.type === "recarga" ? "Recarga" : "Consumo"}
												</Badge>
											</td>
											<td className="py-3 pr-4 font-medium text-foreground">
												{tx.title}
											</td>
											<td className="py-3 pr-4 text-xs text-muted-foreground">
												{tx.method
													? PAYMENT_METHOD_LABELS[tx.method]
													: tx.period
														? MEAL_PERIOD_LABELS[tx.period]
														: "—"}
											</td>
											<td className="py-3 pr-4 font-mono text-xs text-muted-foreground">
												{tx.userRa}
											</td>
											<td className="py-3 pr-4 text-xs text-muted-foreground tabular-nums">
												{tx.dateLabel}
											</td>
											<td
												className={`py-3 text-right font-semibold tabular-nums ${
													tx.amount >= 0 ? "text-chart-2" : "text-destructive"
												}`}
											>
												{tx.amount >= 0
													? `+ ${formatBRL(tx.amount)}`
													: `- ${formatBRL(Math.abs(tx.amount))}`}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</CardContent>
			</Card>

			<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>Nova Recarga Manual</DialogTitle>
						<DialogDescription>
							Credite saldo diretamente para um usuário do campus. O valor é
							somado à arrecadação do dia em tempo real.
						</DialogDescription>
					</DialogHeader>

					<form onSubmit={handleManualRecharge} className="flex flex-col gap-4">
						<div className="flex flex-col gap-1.5">
							<label
								htmlFor="recharge-user"
								className="text-xs font-semibold text-foreground"
							>
								Usuário (Estudante / Servidor)
							</label>
							<select
								id="recharge-user"
								value={selectedUserId}
								onChange={(event) => setSelectedUserId(event.target.value)}
								className="h-9 w-full rounded-xl border border-input bg-card px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
							>
								{users.map((user) => (
									<option key={user.id} value={user.id}>
										{user.name} (RA {user.ra}) — {formatBRL(user.balance)}
									</option>
								))}
							</select>
						</div>

						<div className="flex flex-col gap-1.5">
							<label
								htmlFor="recharge-amount"
								className="text-xs font-semibold text-foreground"
							>
								Valor da Recarga (R$)
							</label>
							<Input
								id="recharge-amount"
								type="number"
								min={1}
								max={500}
								step="0.5"
								value={amountInput}
								onChange={(event) => setAmountInput(event.target.value)}
								placeholder="30.00"
							/>
							<div className="mt-1 flex flex-wrap gap-2">
								{PRESET_AMOUNTS.map((preset) => (
									<Button
										key={preset}
										type="button"
										variant={
											Number(amountInput) === preset ? "default" : "outline"
										}
										size="xs"
										onClick={() => setAmountInput(String(preset))}
									>
										{formatBRL(preset)}
									</Button>
								))}
							</div>
						</div>

						{formError ? (
							<p className="rounded-xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs font-medium text-destructive">
								{formError}
							</p>
						) : null}

						<DialogFooter>
							<Button
								type="button"
								variant="outline"
								onClick={() => setDialogOpen(false)}
							>
								Cancelar
							</Button>
							<Button type="submit">
								<HugeiconsIcon
									icon={CheckmarkCircle01Icon}
									size={16}
									strokeWidth={2}
								/>
								Confirmar Recarga
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
}
