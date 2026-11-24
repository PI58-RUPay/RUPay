"use client";

import {
	ArrowLeft01Icon,
	CheckmarkCircle01Icon,
	Notification01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import type { AnnouncementCategory } from "@/lib/mock-data";
import { useRupayStore } from "@/store/use-rupay-store";

interface NotificationsViewProps {
	onBack: () => void;
}

const CATEGORY_META: Record<
	AnnouncementCategory,
	{
		label: string;
		variant: "default" | "secondary" | "success" | "destructive" | "outline";
	}
> = {
	cardapio: { label: "Cardápio", variant: "secondary" },
	sustentabilidade: { label: "Sustentabilidade", variant: "success" },
	fila: { label: "Fila", variant: "destructive" },
	info: { label: "Informativo", variant: "outline" },
};

export function NotificationsView({ onBack }: NotificationsViewProps) {
	const announcements = useRupayStore((state) => state.announcements);
	const markAnnouncementRead = useRupayStore(
		(state) => state.markAnnouncementRead,
	);
	const markAllAnnouncementsRead = useRupayStore(
		(state) => state.markAllAnnouncementsRead,
	);

	const unreadCount = announcements.filter((item) => !item.read).length;

	return (
		<div className="flex flex-col px-4 py-5">
			<header className="flex items-center justify-between gap-2 pb-4">
				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={onBack}
						aria-label="Voltar para Início"
						className="inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
					>
						<HugeiconsIcon icon={ArrowLeft01Icon} size={20} strokeWidth={2} />
					</button>
					<div>
						<h1 className="text-lg font-bold tracking-tight text-foreground">
							Comunicados do RU
						</h1>
						<p className="text-[11px] text-muted-foreground">
							{unreadCount > 0
								? `${unreadCount} ${unreadCount === 1 ? "não lido" : "não lidos"}`
								: "Tudo lido"}
						</p>
					</div>
				</div>

				<Button
					type="button"
					variant="secondary"
					size="xs"
					disabled={unreadCount === 0}
					onClick={markAllAnnouncementsRead}
					className="rounded-full"
				>
					<HugeiconsIcon
						icon={CheckmarkCircle01Icon}
						size={14}
						strokeWidth={1.8}
					/>
					<span>Marcar todas como lidas</span>
				</Button>
			</header>

			{announcements.length === 0 ? (
				<div className="flex flex-col items-center gap-2 rounded-2xl border border-border/80 bg-card px-4 py-10 text-center">
					<span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
						<HugeiconsIcon
							icon={Notification01Icon}
							size={22}
							strokeWidth={1.8}
						/>
					</span>
					<p className="text-sm font-semibold text-foreground">
						Nenhum comunicado no momento
					</p>
					<p className="text-xs text-muted-foreground">
						Avisos da administração do RU aparecerão aqui.
					</p>
				</div>
			) : (
				<div className="flex flex-col gap-3">
					{announcements.map((item) => {
						const meta = CATEGORY_META[item.category];
						return (
							<button
								key={item.id}
								type="button"
								onClick={() => markAnnouncementRead(item.id)}
								className={cn(
									"flex w-full flex-col gap-2 rounded-2xl border p-4 text-left transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
									item.read
										? "border-border/70 bg-card/80"
										: "border-[#5FA927]/35 bg-card shadow-xs hover:bg-secondary/35",
								)}
							>
								<div className="flex items-center justify-between gap-2">
									<div className="flex items-center gap-2">
										<Badge variant={meta.variant}>{meta.label}</Badge>
										{!item.read ? (
											<>
												<span
													aria-hidden="true"
													className="size-2 rounded-full bg-[#5FA927]"
												/>
												<span className="sr-only">Não lido</span>
											</>
										) : null}
									</div>
									<span className="text-[11px] text-muted-foreground">
										{item.dateLabel}
									</span>
								</div>

								<p className="text-sm font-semibold text-foreground">
									{item.title}
								</p>
								<p className="text-xs leading-relaxed text-muted-foreground">
									{item.message}
								</p>
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}
