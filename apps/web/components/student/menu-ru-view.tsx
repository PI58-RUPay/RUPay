"use client";

import {
	Clock01Icon,
	Dish01Icon,
	Leaf01Icon,
	QrCodeIcon,
	SentIcon,
	StarIcon,
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
import { Textarea } from "@workspace/ui/components/input";
import { Separator } from "@workspace/ui/components/separator";
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
import { MEAL_PERIOD_LABELS, type MealPeriod } from "@/lib/mock-data";
import { useRupayStore } from "@/store/use-rupay-store";

const PERIODS: MealPeriod[] = ["almoco", "jantar", "lanche"];

export function MenuRuView() {
	const menus = useRupayStore((state) => state.menus);
	const settings = useRupayStore((state) => state.settings);
	const consumeMeal = useRupayStore((state) => state.consumeMeal);
	const submitFeedback = useRupayStore((state) => state.submitFeedback);

	const [period, setPeriod] = useState<MealPeriod>("almoco");
	const [rating, setRating] = useState<number>(5);
	const [comment, setComment] = useState("");

	const activePrice = settings.mealPrices[period];

	function handleConsume() {
		const res = consumeMeal(period);
		if (!res.ok) {
			toast.error(res.error);
			return;
		}
		toast.success(
			`Passagem liberada no ${MEAL_PERIOD_LABELS[period]}! Bom apetite.`,
		);
	}

	function handleSubmitFeedback(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const res = submitFeedback({
			rating,
			comment: comment.trim() ? comment.trim() : undefined,
		});
		if (!res.ok) {
			toast.error(res.error);
			return;
		}
		toast.success("Avaliação registrada! Obrigado por ajudar o RU.");
		setComment("");
		setRating(5);
	}

	const queueBadgeVariant =
		settings.queueStatus === "Livre"
			? "success"
			: settings.queueStatus === "Moderada"
				? "secondary"
				: "destructive";

	return (
		<div className="flex flex-col gap-4 px-4 py-5">
			<header className="flex items-center justify-between gap-2">
				<div>
					<h1 className="text-xl font-bold tracking-tight text-foreground">
						Cardápio & Bandejão
					</h1>
					<p className="text-xs text-muted-foreground">
						Refeições balanceadas · Universidade Nova Paulista
					</p>
				</div>
				<Badge variant={queueBadgeVariant} className="shrink-0">
					Fila {settings.queueStatus} · ~{settings.queueWaitMinutes} min
				</Badge>
			</header>

			{/* Live status + Passar no Bandejão CTA */}
			<Card className="border-primary/20 bg-gradient-to-br from-card to-secondary/50 py-4 shadow-sm">
				<CardContent className="flex flex-col gap-3 px-4">
					<div className="flex items-center justify-between text-xs text-muted-foreground">
						<span className="inline-flex items-center gap-1.5 font-medium">
							<HugeiconsIcon icon={Clock01Icon} size={15} strokeWidth={1.8} />
							Horário: {settings.openingHours}
						</span>
						<span className="font-semibold text-foreground tabular-nums">
							{MEAL_PERIOD_LABELS[period]} · {formatBRL(activePrice)}
						</span>
					</div>

					<Button
						type="button"
						size="lg"
						onClick={handleConsume}
						className="h-11 w-full rounded-full font-semibold shadow-sm"
					>
						<HugeiconsIcon icon={QrCodeIcon} size={19} strokeWidth={1.8} />
						<span>Passar no Bandejão ({formatBRL(activePrice)})</span>
					</Button>
				</CardContent>
			</Card>

			{/* Period Tabs */}
			<Tabs
				value={period}
				onValueChange={(value) => {
					if (value === "almoco" || value === "jantar" || value === "lanche") {
						setPeriod(value);
					}
				}}
			>
				<TabsList className="grid w-full grid-cols-3">
					{PERIODS.map((item) => (
						<TabsTrigger key={item} value={item}>
							{MEAL_PERIOD_LABELS[item]}
						</TabsTrigger>
					))}
				</TabsList>

				{PERIODS.map((item) => {
					const menu = menus.find((entry) => entry.period === item);
					const isPublished = Boolean(menu?.published);

					return (
						<TabsContent key={item} value={item}>
							{!menu || !isPublished ? (
								<Card className="py-8 text-center">
									<CardContent className="flex flex-col items-center gap-2.5">
										<span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
											<HugeiconsIcon
												icon={Dish01Icon}
												size={24}
												strokeWidth={1.8}
											/>
										</span>
										<p className="text-sm font-semibold text-foreground">
											Cardápio em atualização pela equipe do RU
										</p>
										<p className="max-w-xs text-xs text-muted-foreground">
											A equipe de nutrição está finalizando os itens de{" "}
											{MEAL_PERIOD_LABELS[item]}. Volte em instantes!
										</p>
									</CardContent>
								</Card>
							) : (
								<Card className="gap-3.5 py-4">
									<CardHeader className="px-4">
										<div className="flex items-center justify-between gap-2">
											<CardTitle className="text-base">
												{MEAL_PERIOD_LABELS[item]} · {menu.dateLabel}
											</CardTitle>
											<Badge variant="secondary" className="tabular-nums">
												{menu.calories} kcal
											</Badge>
										</div>
										<p className="text-[11px] text-muted-foreground">
											Atualizado em {menu.updatedAt}
										</p>
									</CardHeader>

									<CardContent className="flex flex-col gap-3 px-4 text-sm">
										<div className="rounded-xl bg-secondary/60 p-3">
											<p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
												Prato Principal
											</p>
											<p className="mt-0.5 font-semibold text-foreground">
												{menu.mainDish}
											</p>
										</div>

										<div className="rounded-xl border border-[#5FA927]/25 bg-accent/60 p-3">
											<div className="flex items-center justify-between gap-2">
												<p className="text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
													Opção Vegetariana / Vegana
												</p>
												<Badge variant="success">
													<HugeiconsIcon
														icon={Leaf01Icon}
														size={12}
														strokeWidth={2}
													/>
													Plant-based
												</Badge>
											</div>
											<p className="mt-1 font-medium text-foreground">
												{menu.veganOption}
											</p>
										</div>

										<div className="grid grid-cols-1 gap-2 text-xs">
											<div className="flex justify-between gap-3">
												<span className="font-medium text-muted-foreground">
													Guarnição
												</span>
												<span className="text-right font-medium text-foreground">
													{menu.sideDish}
												</span>
											</div>
											<Separator />
											<div className="flex justify-between gap-3">
												<span className="font-medium text-muted-foreground">
													Acompanhamentos
												</span>
												<span className="text-right font-medium text-foreground">
													{menu.accompaniment}
												</span>
											</div>
											<Separator />
											<div className="flex justify-between gap-3">
												<span className="font-medium text-muted-foreground">
													Salada
												</span>
												<span className="text-right font-medium text-foreground">
													{menu.salad}
												</span>
											</div>
											<Separator />
											<div className="flex justify-between gap-3">
												<span className="font-medium text-muted-foreground">
													Sobremesa
												</span>
												<span className="text-right font-medium text-foreground">
													{menu.dessert}
												</span>
											</div>
											<Separator />
											<div className="flex justify-between gap-3">
												<span className="font-medium text-muted-foreground">
													Suco
												</span>
												<span className="text-right font-medium text-foreground">
													{menu.juice}
												</span>
											</div>
										</div>

										{menu.allergens.length > 0 ? (
											<div className="flex flex-wrap items-center gap-1.5 pt-1">
												<span className="text-[11px] font-medium text-muted-foreground">
													Alergênicos:
												</span>
												{menu.allergens.map((allergen) => (
													<Badge
														key={allergen}
														variant="outline"
														className="text-[11px]"
													>
														{allergen}
													</Badge>
												))}
											</div>
										) : null}
									</CardContent>
								</Card>
							)}
						</TabsContent>
					);
				})}
			</Tabs>

			{/* Compact Feedback Card */}
			<Card className="gap-3 py-4">
				<CardHeader className="px-4">
					<CardTitle className="text-sm font-semibold">
						Avaliar refeição
					</CardTitle>
				</CardHeader>
				<CardContent className="px-4">
					<form onSubmit={handleSubmitFeedback} className="flex flex-col gap-3">
						<div className="flex items-center justify-between">
							<span className="text-xs text-muted-foreground">
								Sua nota de hoje:
							</span>
							<fieldset className="m-0 flex items-center gap-1 border-0 p-0">
								<legend className="sr-only">Nota de 1 a 5 estrelas</legend>
								{[1, 2, 3, 4, 5].map((star) => {
									const active = star <= rating;
									return (
										<button
											key={star}
											type="button"
											aria-pressed={rating === star}
											aria-label={`${star} ${star === 1 ? "estrela" : "estrelas"}`}
											onClick={() => setRating(star)}
											className={cn(
												"inline-flex size-8 items-center justify-center rounded-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
												active ? "text-[#E09F1F]" : "text-muted-foreground/40",
											)}
										>
											<HugeiconsIcon
												icon={StarIcon}
												size={20}
												strokeWidth={1.8}
												fill={active ? "currentColor" : "none"}
											/>
										</button>
									);
								})}
							</fieldset>
						</div>

						<Textarea
							value={comment}
							onChange={(event) => setComment(event.target.value)}
							maxLength={300}
							placeholder="Deixe um comentário para a equipe do RU (opcional)..."
							className="min-h-16 rounded-xl text-xs"
						/>

						<Button
							type="submit"
							variant="secondary"
							size="sm"
							className="w-full rounded-full font-semibold"
						>
							<HugeiconsIcon icon={SentIcon} size={15} strokeWidth={1.8} />
							<span>Enviar avaliação</span>
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
