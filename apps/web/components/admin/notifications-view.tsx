"use client";

import {
	Notification01Icon,
	SentIcon,
	StarIcon,
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
import { Input, Textarea } from "@workspace/ui/components/input";
import { useState } from "react";
import { toast } from "sonner";
import type { AnnouncementCategory } from "@/lib/mock-data";
import { useRupayStore } from "@/store/use-rupay-store";

const CATEGORY_LABELS: Record<AnnouncementCategory, string> = {
	info: "Informativo",
	cardapio: "Cardápio",
	sustentabilidade: "Sustentabilidade",
	fila: "Fluxo e Fila",
};

const CATEGORY_OPTIONS: AnnouncementCategory[] = [
	"info",
	"cardapio",
	"sustentabilidade",
	"fila",
];

export function NotificationsView() {
	const announcements = useRupayStore((s) => s.announcements);
	const feedbacks = useRupayStore((s) => s.feedbacks);
	const sendAnnouncement = useRupayStore((s) => s.sendAnnouncement);

	const [title, setTitle] = useState("");
	const [category, setCategory] = useState<AnnouncementCategory>("info");
	const [message, setMessage] = useState("");
	const [formError, setFormError] = useState<string | null>(null);

	const averageRating =
		feedbacks.length > 0
			? (
					feedbacks.reduce((sum, fb) => sum + fb.rating, 0) / feedbacks.length
				).toFixed(1)
			: "5.0";

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setFormError(null);

		const result = sendAnnouncement({
			title: title.trim(),
			category,
			message: message.trim(),
		});

		if (!result.ok) {
			setFormError(result.error);
			return;
		}

		toast.success("Comunicado publicado para todos os estudantes!");
		setTitle("");
		setMessage("");
		setCategory("info");
	}

	return (
		<div className="flex flex-col gap-6">
			<div>
				<h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">
					Comunicados e Feedbacks
				</h1>
				<p className="mt-1 text-sm text-muted-foreground">
					Envie alertas em tempo real para o sino do App Estudante e acompanhe a
					avaliação das refeições.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
				{/* Left: Publish Announcement Form */}
				<Card className="h-fit py-5 shadow-xs xl:col-span-5">
					<CardHeader className="px-5">
						<CardTitle className="flex items-center gap-2 text-base font-bold">
							<HugeiconsIcon
								icon={Notification01Icon}
								size={18}
								strokeWidth={2}
								className="text-primary"
							/>
							Publicar Comunicado para Estudantes
						</CardTitle>
						<CardDescription>
							O aviso aparece imediatamente na central de notificações do app
							estudantil.
						</CardDescription>
					</CardHeader>

					<CardContent className="px-5">
						<form onSubmit={handleSubmit} className="flex flex-col gap-4">
							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="ann-title"
									className="text-xs font-semibold text-foreground"
								>
									Título do comunicado
								</label>
								<Input
									id="ann-title"
									value={title}
									onChange={(event) => setTitle(event.target.value)}
									placeholder="Ex.: Cardápio especial de quinta-feira"
								/>
							</div>

							<div className="flex flex-col gap-1.5">
								<span className="text-xs font-semibold text-foreground">
									Categoria
								</span>
								<div className="flex flex-wrap gap-2">
									{CATEGORY_OPTIONS.map((option) => (
										<Button
											key={option}
											type="button"
											size="xs"
											variant={category === option ? "default" : "outline"}
											onClick={() => setCategory(option)}
										>
											{CATEGORY_LABELS[option]}
										</Button>
									))}
								</div>
							</div>

							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="ann-message"
									className="text-xs font-semibold text-foreground"
								>
									Mensagem
								</label>
								<Textarea
									id="ann-message"
									rows={4}
									value={message}
									onChange={(event) => setMessage(event.target.value)}
									placeholder="Escreva o aviso que será exibido aos estudantes..."
								/>
							</div>

							{formError ? (
								<p className="rounded-xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs font-medium text-destructive">
									{formError}
								</p>
							) : null}

							<Button type="submit" className="w-full sm:w-fit">
								<HugeiconsIcon icon={SentIcon} size={16} strokeWidth={2} />
								Publicar Comunicado
							</Button>
						</form>
					</CardContent>
				</Card>

				{/* Right: Sent Announcements + Student Feedbacks */}
				<div className="flex flex-col gap-6 xl:col-span-7">
					<Card className="py-5 shadow-xs">
						<CardHeader className="flex flex-row items-center justify-between px-5">
							<div>
								<CardTitle className="text-base font-bold">
									Comunicados Publicados
								</CardTitle>
								<CardDescription>
									Histórico de avisos enviados ao campus.
								</CardDescription>
							</div>
							<Badge variant="secondary">{announcements.length} avisos</Badge>
						</CardHeader>

						<CardContent className="flex flex-col gap-3 px-5">
							{announcements.map((item) => (
								<div
									key={item.id}
									className="rounded-xl border border-border/70 bg-background/60 p-3.5"
								>
									<div className="flex flex-wrap items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<Badge
												variant={
													item.category === "sustentabilidade"
														? "success"
														: "secondary"
												}
											>
												{CATEGORY_LABELS[item.category]}
											</Badge>
											<span className="text-xs font-medium text-muted-foreground">
												{item.dateLabel}
											</span>
										</div>
										<Badge variant={item.read ? "outline" : "default"}>
											{item.read ? "Lido" : "Novo"}
										</Badge>
									</div>
									<p className="mt-2 text-sm font-semibold text-foreground">
										{item.title}
									</p>
									<p className="mt-1 text-xs leading-relaxed text-muted-foreground">
										{item.message}
									</p>
								</div>
							))}
						</CardContent>
					</Card>

					<Card className="py-5 shadow-xs">
						<CardHeader className="flex flex-row items-center justify-between px-5">
							<div>
								<CardTitle className="text-base font-bold">
									Feedbacks dos Estudantes
								</CardTitle>
								<CardDescription>
									Avaliações enviadas após as refeições no Bandejão.
								</CardDescription>
							</div>
							<Badge variant="success">Nota média {averageRating}/5</Badge>
						</CardHeader>

						<CardContent className="flex flex-col gap-3 px-5">
							{feedbacks.length === 0 ? (
								<p className="text-sm text-muted-foreground">
									Nenhuma avaliação registrada até o momento.
								</p>
							) : (
								feedbacks.map((fb) => (
									<div
										key={fb.id}
										className="rounded-xl border border-border/70 bg-background/60 p-3.5"
									>
										<div className="flex flex-wrap items-center justify-between gap-2">
											<div className="flex items-center gap-2">
												<span className="text-sm font-semibold text-foreground">
													{fb.authorName}
												</span>
												<span className="text-xs text-muted-foreground">
													{fb.dateLabel}
												</span>
											</div>
											<div
												role="img"
												className="flex items-center gap-0.5 text-amber-500"
												aria-label={`${fb.rating} de 5 estrelas`}
											>
												{[1, 2, 3, 4, 5].map((star) => (
													<HugeiconsIcon
														key={star}
														icon={StarIcon}
														size={14}
														strokeWidth={1.8}
														className={
															star <= fb.rating
																? "fill-amber-400 text-amber-500"
																: "text-muted-foreground/35"
														}
													/>
												))}
											</div>
										</div>
										{fb.comment ? (
											<p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
												“{fb.comment}”
											</p>
										) : (
											<p className="mt-1 text-xs italic text-muted-foreground/75">
												Avaliação sem comentário adicional.
											</p>
										)}
									</div>
								))
							)}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
