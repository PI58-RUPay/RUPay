"use client";

import {
	AlertCircleIcon,
	CheckmarkCircle01Icon,
	Copy01Icon,
	CreditCardIcon,
	FlashIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@workspace/ui/components/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@workspace/ui/components/tabs";
import { cn } from "@workspace/ui/lib/utils";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { formatBRL } from "@/lib/format";
import { PAYMENT_METHOD_LABELS, type PaymentMethod } from "@/lib/mock-data";
import { useRupayStore } from "@/store/use-rupay-store";

interface RechargeDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const PRESET_AMOUNTS = [15, 30, 50, 100] as const;

export function RechargeDialog({ open, onOpenChange }: RechargeDialogProps) {
	const rechargeCredits = useRupayStore((state) => state.rechargeCredits);
	const studentRa = useRupayStore((state) => state.student.ra);

	const [amountText, setAmountText] = useState("30");
	const [method, setMethod] = useState<PaymentMethod>("pix");
	const [error, setError] = useState<string | null>(null);
	const [copiedPix, setCopiedPix] = useState(false);

	const parsedAmount = Number(amountText.replace(",", "."));
	const pixCode = `00020126480014BR.GOV.BCB.PIX0126rupay@novapaulista.edu.br5204000053039865405${
		Number.isFinite(parsedAmount) && parsedAmount > 0
			? parsedAmount.toFixed(2)
			: "30.00"
	}5802BR5914RUPAY UNP ${studentRa}6009SAO PAULO6304E1F9`;

	function handleOpenChange(nextOpen: boolean) {
		setError(null);
		setCopiedPix(false);
		onOpenChange(nextOpen);
	}

	async function handleCopyPix() {
		try {
			await navigator.clipboard?.writeText(pixCode);
			setCopiedPix(true);
			toast.success("Código Pix Copia e Cola copiado!");
			setTimeout(() => setCopiedPix(false), 2500);
		} catch {
			toast.error("Não foi possível copiar automaticamente.");
		}
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const numericValue = Number(amountText.replace(",", "."));
		if (!amountText.trim() || Number.isNaN(numericValue)) {
			setError("Informe um valor numérico válido.");
			return;
		}

		const result = rechargeCredits(numericValue, method);
		if (!result.ok) {
			setError(result.error);
			return;
		}

		setError(null);
		toast.success(
			`Recarga de ${formatBRL(numericValue)} via ${PAYMENT_METHOD_LABELS[method]} confirmada!`,
		);
		onOpenChange(false);
	}

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent className="max-w-md rounded-3xl p-5 sm:p-6">
				<DialogHeader>
					<DialogTitle className="flex items-center gap-2 text-lg font-bold text-foreground">
						<span className="flex size-8 items-center justify-center rounded-xl bg-secondary text-primary">
							<HugeiconsIcon
								icon={CreditCardIcon}
								size={18}
								strokeWidth={1.8}
							/>
						</span>
						<span>Recarregar Créditos</span>
					</DialogTitle>
					<DialogDescription>
						Escolha o valor e a forma de pagamento para adicionar saldo ao seu
						RU.
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="flex min-w-0 flex-col gap-4">
					<div>
						<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
							Valores rápidos
						</p>
						<div className="grid grid-cols-4 gap-2">
							{PRESET_AMOUNTS.map((preset) => {
								const isSelected = parsedAmount === preset;
								return (
									<button
										key={preset}
										type="button"
										onClick={() => {
											setAmountText(String(preset));
											setError(null);
										}}
										className={cn(
											"rounded-xl border px-2 py-2.5 text-sm font-semibold tabular-nums transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
											isSelected
												? "border-primary bg-primary text-primary-foreground shadow-xs"
												: "border-border bg-card text-foreground hover:bg-secondary/70",
										)}
									>
										R$ {preset}
									</button>
								);
							})}
						</div>
					</div>

					<div className="flex flex-col gap-1.5">
						<label
							htmlFor="recharge-amount"
							className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
						>
							Outro valor (R$ 5 a R$ 500)
						</label>
						<Input
							id="recharge-amount"
							type="number"
							inputMode="decimal"
							min={5}
							max={500}
							step="0.50"
							value={amountText}
							onChange={(event) => {
								setAmountText(event.target.value);
								setError(null);
							}}
							placeholder="Ex.: 25,00"
							aria-invalid={Boolean(error)}
							className="h-11 rounded-xl text-base font-semibold tabular-nums"
						/>
					</div>

					<Tabs
						value={method}
						onValueChange={(value) => {
							if (value === "pix" || value === "cartao" || value === "boleto") {
								setMethod(value);
								setError(null);
							}
						}}
						className="min-w-0"
					>
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="pix">Pix</TabsTrigger>
							<TabsTrigger value="cartao">Cartão</TabsTrigger>
							<TabsTrigger value="boleto">Boleto</TabsTrigger>
						</TabsList>

						<TabsContent value="pix" className="mt-1 min-w-0">
							<div className="min-w-0 rounded-2xl border border-border bg-secondary/50 p-3.5">
								<div className="flex flex-wrap items-center justify-between gap-2">
									<span className="inline-flex min-w-0 items-center gap-1.5 text-xs font-semibold text-primary">
										<HugeiconsIcon
											icon={FlashIcon}
											size={15}
											strokeWidth={2}
											className="shrink-0"
										/>
										<span>Pix Copia e Cola</span>
									</span>
									<Button
										type="button"
										variant="secondary"
										size="xs"
										onClick={handleCopyPix}
										className="shrink-0 rounded-full"
									>
										<HugeiconsIcon
											icon={copiedPix ? CheckmarkCircle01Icon : Copy01Icon}
											size={14}
											strokeWidth={1.8}
										/>
										<span>{copiedPix ? "Copiado" : "Copiar"}</span>
									</Button>
								</div>
								<p className="mt-2 min-w-0 rounded-lg bg-card px-2.5 py-2 font-mono text-[11px] leading-relaxed break-all whitespace-normal text-muted-foreground">
									{pixCode}
								</p>
							</div>
						</TabsContent>

						<TabsContent value="cartao" className="mt-1">
							<div className="rounded-2xl border border-border bg-secondary/50 p-3.5 text-xs text-muted-foreground">
								<p className="font-semibold text-foreground">
									Cartão Universitário / Crédito
								</p>
								<p className="mt-1">
									Final 4821 · Crédito instantâneo na carteirinha digital sem
									taxas adicionais.
								</p>
							</div>
						</TabsContent>

						<TabsContent value="boleto" className="mt-1">
							<div className="rounded-2xl border border-border bg-secondary/50 p-3.5 text-xs text-muted-foreground">
								<p className="font-semibold text-foreground">
									Boleto Bancário UNP
								</p>
								<p className="mt-1">
									Vencimento em 2 dias úteis · Neste ambiente demo o crédito é
									aplicado na hora.
								</p>
							</div>
						</TabsContent>
					</Tabs>

					{error ? (
						<div
							role="alert"
							className="flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs font-medium text-destructive"
						>
							<HugeiconsIcon
								icon={AlertCircleIcon}
								size={16}
								strokeWidth={1.8}
							/>
							<span>{error}</span>
						</div>
					) : null}

					<DialogFooter className="mt-1">
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
							className="rounded-full"
						>
							Cancelar
						</Button>
						<Button
							type="submit"
							className="rounded-full px-6 font-semibold shadow-sm"
						>
							Confirmar recarga
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
