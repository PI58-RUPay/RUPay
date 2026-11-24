"use client";

import {
	CheckmarkCircle01Icon,
	Moon02Icon,
	RefreshIcon,
	Settings01Icon,
	Sun01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@workspace/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Separator } from "@workspace/ui/components/separator";
import { Switch } from "@workspace/ui/components/switch";
import { useTheme } from "next-themes";
import { useState, useSyncExternalStore } from "react";
import { toast } from "sonner";
import type { QueueStatus, RuSettings } from "@/lib/mock-data";
import { useRupayStore } from "@/store/use-rupay-store";

const emptySubscribe = () => () => {};

function useIsMounted(): boolean {
	return useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	);
}

const QUEUE_STATUS_OPTIONS: QueueStatus[] = ["Livre", "Moderada", "Intensa"];

function SettingsForm({
	settings,
	onSave,
}: {
	settings: RuSettings;
	onSave: (next: RuSettings) => { ok: true } | { ok: false; error: string };
}) {
	const [almocoPrice, setAlmocoPrice] = useState(() =>
		String(settings.mealPrices.almoco),
	);
	const [jantarPrice, setJantarPrice] = useState(() =>
		String(settings.mealPrices.jantar),
	);
	const [lanchePrice, setLanchePrice] = useState(() =>
		String(settings.mealPrices.lanche),
	);
	const [queueWaitMinutes, setQueueWaitMinutes] = useState(() =>
		String(settings.queueWaitMinutes),
	);
	const [queueStatus, setQueueStatus] = useState<QueueStatus>(
		() => settings.queueStatus,
	);
	const [openingHours, setOpeningHours] = useState(() => settings.openingHours);
	const [formError, setFormError] = useState<string | null>(null);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setFormError(null);

		const almoco = Number(almocoPrice.replace(",", "."));
		const jantar = Number(jantarPrice.replace(",", "."));
		const lanche = Number(lanchePrice.replace(",", "."));
		const wait = Number.parseInt(queueWaitMinutes, 10);

		const result = onSave({
			mealPrices: {
				almoco: Number.isFinite(almoco) ? almoco : -1,
				jantar: Number.isFinite(jantar) ? jantar : -1,
				lanche: Number.isFinite(lanche) ? lanche : -1,
			},
			queueWaitMinutes: Number.isFinite(wait) ? wait : -1,
			queueStatus,
			openingHours: openingHours.trim(),
		});

		if (!result.ok) {
			setFormError(result.error);
			return;
		}

		toast.success(
			"Configurações do RU atualizadas e sincronizadas com o app estudantil!",
		);
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-5">
			<div>
				<p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
					Tarifas por Refeição (R$)
				</p>
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
					<div className="flex flex-col gap-1.5">
						<label
							htmlFor="price-almoco"
							className="text-xs font-semibold text-foreground"
						>
							Almoço (R$)
						</label>
						<Input
							id="price-almoco"
							type="number"
							min={1}
							max={100}
							step="0.5"
							value={almocoPrice}
							onChange={(event) => setAlmocoPrice(event.target.value)}
						/>
					</div>

					<div className="flex flex-col gap-1.5">
						<label
							htmlFor="price-jantar"
							className="text-xs font-semibold text-foreground"
						>
							Jantar (R$)
						</label>
						<Input
							id="price-jantar"
							type="number"
							min={1}
							max={100}
							step="0.5"
							value={jantarPrice}
							onChange={(event) => setJantarPrice(event.target.value)}
						/>
					</div>

					<div className="flex flex-col gap-1.5">
						<label
							htmlFor="price-lanche"
							className="text-xs font-semibold text-foreground"
						>
							Lanche (R$)
						</label>
						<Input
							id="price-lanche"
							type="number"
							min={1}
							max={100}
							step="0.5"
							value={lanchePrice}
							onChange={(event) => setLanchePrice(event.target.value)}
						/>
					</div>
				</div>
			</div>

			<Separator />

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="queue-wait"
						className="text-xs font-semibold text-foreground"
					>
						Tempo médio de espera (min)
					</label>
					<Input
						id="queue-wait"
						type="number"
						min={0}
						max={120}
						value={queueWaitMinutes}
						onChange={(event) => setQueueWaitMinutes(event.target.value)}
					/>
				</div>

				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="opening-hours"
						className="text-xs font-semibold text-foreground"
					>
						Horário de funcionamento
					</label>
					<Input
						id="opening-hours"
						value={openingHours}
						onChange={(event) => setOpeningHours(event.target.value)}
						placeholder="07h00 às 21h00"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<span className="text-xs font-semibold text-foreground">
					Status atual da fila no Bandejão
				</span>
				<div className="flex flex-wrap gap-2">
					{QUEUE_STATUS_OPTIONS.map((option) => (
						<Button
							key={option}
							type="button"
							size="sm"
							variant={queueStatus === option ? "default" : "outline"}
							onClick={() => setQueueStatus(option)}
						>
							{option}
						</Button>
					))}
				</div>
			</div>

			{formError ? (
				<p className="rounded-xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs font-medium text-destructive">
					{formError}
				</p>
			) : null}

			<div>
				<Button type="submit">
					<HugeiconsIcon
						icon={CheckmarkCircle01Icon}
						size={16}
						strokeWidth={2}
					/>
					Salvar Configurações
				</Button>
			</div>
		</form>
	);
}

export function SettingsView() {
	const mounted = useIsMounted();
	const { resolvedTheme, setTheme } = useTheme();
	const settings = useRupayStore((s) => s.settings);
	const updateSettings = useRupayStore((s) => s.updateSettings);
	const resetDemoData = useRupayStore((s) => s.resetDemoData);

	const isDark = mounted && resolvedTheme === "dark";
	const settingsKey = `${settings.mealPrices.almoco}-${settings.mealPrices.jantar}-${settings.mealPrices.lanche}-${settings.queueWaitMinutes}-${settings.queueStatus}-${settings.openingHours}`;

	function handleResetDemo() {
		resetDemoData();
		toast.success("Dados de demonstração restaurados para o padrão inicial!");
	}

	return (
		<div className="flex flex-col gap-6">
			<div>
				<h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">
					Configurações do RU
				</h1>
				<p className="mt-1 text-sm text-muted-foreground">
					Ajuste valores das refeições, status da fila, tema e estado de
					demonstração.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
				<Card className="py-5 shadow-xs xl:col-span-7">
					<CardHeader className="px-5">
						<CardTitle className="flex items-center gap-2 text-base font-bold">
							<HugeiconsIcon
								icon={Settings01Icon}
								size={18}
								strokeWidth={2}
								className="text-primary"
							/>
							Parâmetros de Operação
						</CardTitle>
						<CardDescription>
							As alterações refletem imediatamente no cartão e no cardápio do
							App Estudante.
						</CardDescription>
					</CardHeader>

					<CardContent className="px-5">
						<SettingsForm
							key={settingsKey}
							settings={settings}
							onSave={updateSettings}
						/>
					</CardContent>
				</Card>

				<div className="flex flex-col gap-6 xl:col-span-5">
					<Card className="py-5 shadow-xs">
						<CardHeader className="px-5">
							<CardTitle className="text-base font-bold">Aparência</CardTitle>
							<CardDescription>
								Alterne entre o tema Creme Universitário (claro) e Floresta
								Escura.
							</CardDescription>
						</CardHeader>
						<CardContent className="px-5">
							<div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/60 p-4">
								<div className="flex items-center gap-3">
									<span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
										<HugeiconsIcon
											icon={isDark ? Moon02Icon : Sun01Icon}
											size={20}
											strokeWidth={1.8}
										/>
									</span>
									<div>
										<p className="text-sm font-semibold text-foreground">
											Modo Escuro
										</p>
										<p className="text-xs text-muted-foreground">
											{isDark ? "Ativado" : "Desativado"} (atalho: tecla D)
										</p>
									</div>
								</div>

								<Switch
									checked={isDark}
									disabled={!mounted}
									aria-label="Alternar modo escuro"
									onCheckedChange={(checked) =>
										setTheme(checked ? "dark" : "light")
									}
								/>
							</div>
						</CardContent>
					</Card>

					<Card className="py-5 shadow-xs">
						<CardHeader className="px-5">
							<CardTitle className="text-base font-bold">
								Dados de Demonstração
							</CardTitle>
							<CardDescription>
								Restaure saldos, transações, cardápios, avisos e métricas
								iniciais da Universidade Nova Paulista.
							</CardDescription>
						</CardHeader>
						<CardContent className="px-5">
							<Button
								type="button"
								variant="outline"
								onClick={handleResetDemo}
								className="w-full sm:w-fit"
							>
								<HugeiconsIcon icon={RefreshIcon} size={16} strokeWidth={2} />
								Restaurar Dados Demo
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
