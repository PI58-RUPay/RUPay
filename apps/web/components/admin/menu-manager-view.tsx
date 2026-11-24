"use client";

import {
	Add01Icon,
	CheckmarkCircle01Icon,
	Dish01Icon,
	Edit02Icon,
	Leaf01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
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
import { Switch } from "@workspace/ui/components/switch";
import { useState } from "react";
import { toast } from "sonner";
import { formatDateFullBR } from "@/lib/format";
import {
	MEAL_PERIOD_LABELS,
	type MealPeriod,
	type MenuEntry,
} from "@/lib/mock-data";
import { useRupayStore } from "@/store/use-rupay-store";

interface MenuFormState {
	id: string;
	isNew: boolean;
	period: MealPeriod;
	dateLabel: string;
	mainDish: string;
	veganOption: string;
	sideDish: string;
	accompaniment: string;
	salad: string;
	dessert: string;
	juice: string;
	calories: string;
	allergensText: string;
	published: boolean;
	autoAnnounce: boolean;
}

const PERIOD_ORDER: Record<MealPeriod, number> = {
	almoco: 0,
	jantar: 1,
	lanche: 2,
};

function createEmptyMenuForm(): MenuFormState {
	return {
		id: `menu-${Date.now()}`,
		isNew: true,
		period: "almoco",
		dateLabel: formatDateFullBR(),
		mainDish: "",
		veganOption: "",
		sideDish: "",
		accompaniment: "",
		salad: "",
		dessert: "",
		juice: "",
		calories: "620",
		allergensText: "",
		published: true,
		autoAnnounce: false,
	};
}

function createEditMenuForm(entry: MenuEntry): MenuFormState {
	return {
		id: entry.id,
		isNew: false,
		period: entry.period,
		dateLabel: entry.dateLabel,
		mainDish: entry.mainDish,
		veganOption: entry.veganOption,
		sideDish: entry.sideDish,
		accompaniment: entry.accompaniment,
		salad: entry.salad,
		dessert: entry.dessert,
		juice: entry.juice,
		calories: String(entry.calories),
		allergensText: entry.allergens.join(", "),
		published: entry.published,
		autoAnnounce: false,
	};
}

export function MenuManagerView() {
	const menus = useRupayStore((s) => s.menus);
	const saveMenu = useRupayStore((s) => s.saveMenu);
	const toggleMenuPublished = useRupayStore((s) => s.toggleMenuPublished);
	const sendAnnouncement = useRupayStore((s) => s.sendAnnouncement);

	const [dialogOpen, setDialogOpen] = useState(false);
	const [form, setForm] = useState<MenuFormState>(() => createEmptyMenuForm());
	const [formError, setFormError] = useState<string | null>(null);

	const sortedMenus = [...menus].sort(
		(a, b) => PERIOD_ORDER[a.period] - PERIOD_ORDER[b.period],
	);

	function openCreateDialog() {
		setForm(createEmptyMenuForm());
		setFormError(null);
		setDialogOpen(true);
	}

	function openEditDialog(entry: MenuEntry) {
		setForm(createEditMenuForm(entry));
		setFormError(null);
		setDialogOpen(true);
	}

	function handleTogglePublish(entry: MenuEntry) {
		toggleMenuPublished(entry.id);
		const label = MEAL_PERIOD_LABELS[entry.period];
		toast.success(
			entry.published
				? `Cardápio de ${label} movido para Rascunho.`
				: `Cardápio de ${label} publicado no App Estudante!`,
		);
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setFormError(null);

		const parsedCalories = Number.parseInt(form.calories, 10);
		const allergens = form.allergensText
			.split(",")
			.map((item) => item.trim())
			.filter(Boolean);

		const result = saveMenu({
			id: form.id,
			period: form.period,
			dateLabel: form.dateLabel.trim(),
			mainDish: form.mainDish.trim(),
			veganOption: form.veganOption.trim(),
			sideDish: form.sideDish.trim(),
			accompaniment: form.accompaniment.trim(),
			salad: form.salad.trim(),
			dessert: form.dessert.trim(),
			juice: form.juice.trim(),
			calories: Number.isFinite(parsedCalories) ? parsedCalories : 0,
			allergens,
			published: form.published,
			updatedAt: "",
		});

		if (!result.ok) {
			setFormError(result.error);
			return;
		}

		if (form.autoAnnounce) {
			const periodLabel = MEAL_PERIOD_LABELS[form.period];
			const announceResult = sendAnnouncement({
				title: `Cardápio de ${periodLabel} atualizado`,
				category: "cardapio",
				message: `${form.mainDish.trim()} · Opção vegana: ${form.veganOption.trim()}.`,
			});
			if (!announceResult.ok) {
				toast.warning(
					`Cardápio salvo, mas o comunicado falhou: ${announceResult.error}`,
				);
				setDialogOpen(false);
				return;
			}
		}

		toast.success(
			`Cardápio de ${MEAL_PERIOD_LABELS[form.period]} salvo e sincronizado!`,
		);
		setDialogOpen(false);
	}

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">
						Gestão de Cardápios
					</h1>
					<p className="mt-1 text-sm text-muted-foreground">
						Edite e publique os pratos do dia com sincronização imediata no app
						dos estudantes.
					</p>
				</div>

				<Button onClick={openCreateDialog} className="w-fit">
					<HugeiconsIcon icon={Add01Icon} size={16} strokeWidth={2} />
					Novo Cardápio
				</Button>
			</div>

			<div className="flex items-center justify-between">
				<h2 className="flex items-center gap-2 text-base font-bold text-foreground">
					<HugeiconsIcon
						icon={Dish01Icon}
						size={18}
						strokeWidth={2}
						className="text-primary"
					/>
					Publicação do Cardápio Atual
				</h2>
				<span className="text-xs font-medium text-muted-foreground">
					{sortedMenus.filter((m) => m.published).length} de{" "}
					{sortedMenus.length} publicados
				</span>
			</div>

			<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
				{sortedMenus.map((entry) => (
					<Card key={entry.id} className="justify-between shadow-xs">
						<div>
							<CardHeader className="border-b border-border/60 pb-4">
								<div className="flex items-start justify-between gap-3">
									<div>
										<CardTitle className="text-lg font-bold">
											{MEAL_PERIOD_LABELS[entry.period]}
										</CardTitle>
										<CardDescription className="mt-0.5 text-xs">
											{entry.dateLabel} · Atualizado em {entry.updatedAt}
										</CardDescription>
									</div>
									<Badge variant={entry.published ? "success" : "secondary"}>
										{entry.published ? "Publicado" : "Rascunho"}
									</Badge>
								</div>
							</CardHeader>

							<CardContent className="flex flex-col gap-3 pt-4 text-sm">
								<div>
									<span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
										Prato Principal
									</span>
									<p className="mt-0.5 font-semibold text-foreground">
										{entry.mainDish}
									</p>
								</div>

								<div className="rounded-xl bg-accent/60 p-3 dark:bg-accent/35">
									<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
										<HugeiconsIcon
											icon={Leaf01Icon}
											size={14}
											strokeWidth={2}
										/>
										Opção Vegetariana / Vegana
									</span>
									<p className="mt-0.5 text-xs font-medium text-foreground">
										{entry.veganOption}
									</p>
								</div>

								<dl className="grid grid-cols-1 gap-2 text-xs">
									<div className="flex justify-between gap-2 border-b border-border/40 pb-1.5">
										<dt className="font-medium text-muted-foreground">
											Guarnição
										</dt>
										<dd className="text-right font-medium text-foreground">
											{entry.sideDish}
										</dd>
									</div>
									<div className="flex justify-between gap-2 border-b border-border/40 pb-1.5">
										<dt className="font-medium text-muted-foreground">
											Acompanhamento
										</dt>
										<dd className="text-right font-medium text-foreground">
											{entry.accompaniment}
										</dd>
									</div>
									<div className="flex justify-between gap-2 border-b border-border/40 pb-1.5">
										<dt className="font-medium text-muted-foreground">
											Salada
										</dt>
										<dd className="text-right font-medium text-foreground">
											{entry.salad}
										</dd>
									</div>
									<div className="flex justify-between gap-2 border-b border-border/40 pb-1.5">
										<dt className="font-medium text-muted-foreground">
											Sobremesa
										</dt>
										<dd className="text-right font-medium text-foreground">
											{entry.dessert}
										</dd>
									</div>
									<div className="flex justify-between gap-2">
										<dt className="font-medium text-muted-foreground">Suco</dt>
										<dd className="text-right font-medium text-foreground">
											{entry.juice}
										</dd>
									</div>
								</dl>

								<div className="flex flex-wrap items-center gap-1.5 pt-1">
									<Badge variant="outline">{entry.calories} kcal</Badge>
									{entry.allergens.map((allergen) => (
										<Badge key={allergen} variant="secondary">
											{allergen}
										</Badge>
									))}
								</div>
							</CardContent>
						</div>

						<CardFooter className="flex items-center justify-between gap-3 border-t border-border/60 pt-4">
							<div className="flex items-center gap-2">
								<Switch
									id={`publish-switch-${entry.id}`}
									checked={entry.published}
									onCheckedChange={() => handleTogglePublish(entry)}
								/>
								<label
									htmlFor={`publish-switch-${entry.id}`}
									className="cursor-pointer text-xs font-medium text-muted-foreground"
								>
									{entry.published ? "Visível no app" : "Oculto"}
								</label>
							</div>

							<Button
								variant="outline"
								size="sm"
								onClick={() => openEditDialog(entry)}
							>
								<HugeiconsIcon icon={Edit02Icon} size={15} strokeWidth={1.8} />
								Editar
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>

			<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
				<DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
					<DialogHeader>
						<DialogTitle>
							{form.isNew
								? "Cadastrar Novo Cardápio"
								: `Editar Cardápio — ${MEAL_PERIOD_LABELS[form.period]}`}
						</DialogTitle>
						<DialogDescription>
							Preencha todos os itens nutricionais. As alterações ficam
							disponíveis imediatamente para os estudantes quando publicado.
						</DialogDescription>
					</DialogHeader>

					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="menu-period"
									className="text-xs font-semibold text-foreground"
								>
									Período
								</label>
								<select
									id="menu-period"
									value={form.period}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											period: event.target.value as MealPeriod,
										}))
									}
									className="h-9 w-full rounded-xl border border-input bg-card px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
								>
									<option value="almoco">Almoço</option>
									<option value="jantar">Jantar</option>
									<option value="lanche">Lanche</option>
								</select>
							</div>

							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="menu-date"
									className="text-xs font-semibold text-foreground"
								>
									Data de exibição
								</label>
								<Input
									id="menu-date"
									value={form.dateLabel}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											dateLabel: event.target.value,
										}))
									}
									placeholder="10/11/2025"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="menu-main-dish"
									className="text-xs font-semibold text-foreground"
								>
									Prato Principal
								</label>
								<Input
									id="menu-main-dish"
									value={form.mainDish}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											mainDish: event.target.value,
										}))
									}
									placeholder="Ex.: Frango grelhado ao molho de ervas"
								/>
							</div>

							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="menu-vegan-option"
									className="text-xs font-semibold text-foreground"
								>
									Opção Vegetariana / Vegana
								</label>
								<Input
									id="menu-vegan-option"
									value={form.veganOption}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											veganOption: event.target.value,
										}))
									}
									placeholder="Ex.: Grão-de-bico ao curry"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="menu-side-dish"
									className="text-xs font-semibold text-foreground"
								>
									Guarnição
								</label>
								<Input
									id="menu-side-dish"
									value={form.sideDish}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											sideDish: event.target.value,
										}))
									}
									placeholder="Ex.: Purê de batata-doce"
								/>
							</div>

							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="menu-accompaniment"
									className="text-xs font-semibold text-foreground"
								>
									Acompanhamento
								</label>
								<Input
									id="menu-accompaniment"
									value={form.accompaniment}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											accompaniment: event.target.value,
										}))
									}
									placeholder="Ex.: Arroz integral e feijão carioca"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="menu-salad"
									className="text-xs font-semibold text-foreground"
								>
									Salada
								</label>
								<Input
									id="menu-salad"
									value={form.salad}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											salad: event.target.value,
										}))
									}
									placeholder="Mix de folhas"
								/>
							</div>

							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="menu-dessert"
									className="text-xs font-semibold text-foreground"
								>
									Sobremesa
								</label>
								<Input
									id="menu-dessert"
									value={form.dessert}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											dessert: event.target.value,
										}))
									}
									placeholder="Abacaxi com hortelã"
								/>
							</div>

							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="menu-juice"
									className="text-xs font-semibold text-foreground"
								>
									Suco / Bebida
								</label>
								<Input
									id="menu-juice"
									value={form.juice}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											juice: event.target.value,
										}))
									}
									placeholder="Suco de maracujá"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="menu-calories"
									className="text-xs font-semibold text-foreground"
								>
									Calorias (kcal)
								</label>
								<Input
									id="menu-calories"
									type="number"
									min={100}
									max={2000}
									value={form.calories}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											calories: event.target.value,
										}))
									}
								/>
							</div>

							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="menu-allergens"
									className="text-xs font-semibold text-foreground"
								>
									Alergênicos (separados por vírgula)
								</label>
								<Input
									id="menu-allergens"
									value={form.allergensText}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											allergensText: event.target.value,
										}))
									}
									placeholder="Glúten, Lactose, Soja"
								/>
							</div>
						</div>

						<div className="flex flex-col gap-3 rounded-xl border border-border bg-muted/40 p-3.5 sm:flex-row sm:items-center sm:justify-between">
							<div className="flex items-center gap-2.5">
								<Switch
									id="menu-dialog-published"
									checked={form.published}
									onCheckedChange={(checked) =>
										setForm((prev) => ({ ...prev, published: checked }))
									}
								/>
								<label
									htmlFor="menu-dialog-published"
									className="cursor-pointer text-sm font-medium text-foreground"
								>
									Publicar imediatamente no App Estudante
								</label>
							</div>

							<label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-muted-foreground">
								<input
									type="checkbox"
									checked={form.autoAnnounce}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											autoAnnounce: event.target.checked,
										}))
									}
									className="size-4 rounded border-input accent-primary"
								/>
								<span>Enviar comunicado automático aos estudantes</span>
							</label>
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
								Salvar Cardápio
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
}
