"use client";

import {
	Clock01Icon,
	CreditCardIcon,
	Dish01Icon,
	Leaf01Icon,
	Notification01Icon,
	Restaurant01Icon,
	Settings01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { RupayLogo } from "@/components/brand/rupay-logo";
import { formatBRL } from "@/lib/format";
import { useRupayStore } from "@/store/use-rupay-store";

export type StudentSubView = "historico" | "sustentavel" | "notificacoes";

interface HomeViewProps {
	onOpenRecharge: () => void;
	onOpenSubView: (view: StudentSubView) => void;
	onOpenMenuTab: () => void;
	onOpenAccountTab: () => void;
}

export function HomeView({
	onOpenRecharge,
	onOpenSubView,
	onOpenMenuTab,
	onOpenAccountTab,
}: HomeViewProps) {
	const student = useRupayStore((state) => state.student);
	const settings = useRupayStore((state) => state.settings);
	const menus = useRupayStore((state) => state.menus);
	const announcements = useRupayStore((state) => state.announcements);

	const unreadCount = announcements.filter((item) => !item.read).length;
	const lunchMenu = menus.find(
		(menu) => menu.period === "almoco" && menu.published,
	);

	return (
		<div className="flex flex-col pb-6">
			{/* Curved forest-green header matching TelaMobile-Paleta.jpeg */}
			<header className="relative overflow-hidden rounded-b-[28px] bg-gradient-to-br from-[#0B4F22] via-[#12612B] to-[#1A7435] px-5 pt-5 pb-14 text-white">
				{/* Decorative organic wave highlight */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-10 -bottom-12 size-44 rounded-full bg-[#5FA927]/20 blur-xl"
				/>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute top-4 -right-6 size-28 rounded-full bg-white/5"
				/>

				<div className="relative z-10 flex items-center justify-between">
					<div className="flex items-center gap-2.5">
						<RupayLogo variant="white" className="size-9 shrink-0" />
						<span className="text-xl font-bold tracking-tight">RUPay</span>
					</div>

					<button
						type="button"
						onClick={() => onOpenSubView("notificacoes")}
						aria-label={`Notificações (${unreadCount} não lidas)`}
						className="relative inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
					>
						<HugeiconsIcon
							icon={Notification01Icon}
							size={20}
							strokeWidth={1.8}
						/>
						{unreadCount > 0 ? (
							<span className="absolute -top-0.5 -right-0.5 flex min-w-5 items-center justify-center rounded-full bg-[#5FA927] px-1.5 py-0.5 text-[10px] font-bold leading-none text-white ring-2 ring-[#0B4F22]">
								{unreadCount}
							</span>
						) : null}
					</button>
				</div>

				<div className="relative z-10 mt-5 flex flex-col gap-2">
					<div>
						<p className="text-lg font-semibold leading-tight">
							Olá, estudante!
						</p>
						<p className="text-xs font-medium text-white/80">
							{student.name} · RA {student.ra}
						</p>
					</div>

					<div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/14 px-3 py-1 text-xs font-medium text-white backdrop-blur-xs">
						<span
							aria-hidden="true"
							className="size-2 rounded-full bg-[#9AD168]"
						/>
						<span>
							Fila: {settings.queueStatus} (~{settings.queueWaitMinutes} min)
						</span>
					</div>
				</div>
			</header>

			{/* Elevated balance card */}
			<section
				aria-label="Saldo disponível"
				className="relative z-20 mx-4 -mt-8 rounded-2xl border border-border bg-card p-5 shadow-md"
			>
				<div className="flex items-start justify-between gap-3">
					<div>
						<p className="text-sm font-medium text-muted-foreground">
							Saldo disponível
						</p>
						<p className="mt-1 text-3xl font-bold tracking-tight text-foreground tabular-nums">
							{formatBRL(student.balance)}
						</p>
					</div>
					<div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-[#5FA927]">
						<HugeiconsIcon icon={Leaf01Icon} size={24} strokeWidth={1.8} />
					</div>
				</div>

				<Button
					type="button"
					onClick={onOpenRecharge}
					size="lg"
					className="mt-4 h-11 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
				>
					<HugeiconsIcon icon={CreditCardIcon} size={20} strokeWidth={1.8} />
					<span>Recarregar</span>
				</Button>
			</section>

			{/* 3 Quick Action Squares */}
			<section
				aria-label="Ações rápidas"
				className="mt-4 grid grid-cols-3 gap-3 px-4"
			>
				<button
					type="button"
					onClick={() => onOpenSubView("historico")}
					className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-border/80 bg-card p-3.5 text-center shadow-xs transition-all hover:bg-secondary/60 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
				>
					<span className="flex size-9 items-center justify-center rounded-xl bg-secondary text-primary">
						<HugeiconsIcon icon={Clock01Icon} size={20} strokeWidth={1.8} />
					</span>
					<span className="text-xs font-semibold leading-tight text-foreground">
						Histórico
					</span>
				</button>

				<button
					type="button"
					onClick={() => onOpenSubView("sustentavel")}
					className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-border/80 bg-card p-3.5 text-center shadow-xs transition-all hover:bg-secondary/60 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
				>
					<span className="flex size-9 items-center justify-center rounded-xl bg-secondary text-[#5FA927]">
						<HugeiconsIcon icon={Leaf01Icon} size={20} strokeWidth={1.8} />
					</span>
					<span className="text-xs font-semibold leading-tight text-foreground">
						RU Sustentável
					</span>
				</button>

				<button
					type="button"
					onClick={onOpenAccountTab}
					className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-border/80 bg-card p-3.5 text-center shadow-xs transition-all hover:bg-secondary/60 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
				>
					<span className="flex size-9 items-center justify-center rounded-xl bg-secondary text-primary">
						<HugeiconsIcon icon={Settings01Icon} size={20} strokeWidth={1.8} />
					</span>
					<span className="text-xs font-semibold leading-tight text-foreground">
						Configurações
					</span>
				</button>
			</section>

			{/* Compact Today's Menu Preview Card */}
			<section aria-label="Cardápio de Hoje" className="mt-4 px-4">
				<div className="rounded-2xl border border-border/80 bg-card p-4 shadow-xs">
					<div className="flex items-center justify-between gap-2">
						<div className="flex items-center gap-2">
							<span className="flex size-8 items-center justify-center rounded-xl bg-secondary text-primary">
								<HugeiconsIcon icon={Dish01Icon} size={18} strokeWidth={1.8} />
							</span>
							<div>
								<h2 className="text-sm font-semibold text-foreground">
									Cardápio de Hoje
								</h2>
								<p className="text-[11px] text-muted-foreground">
									Almoço · {settings.openingHours}
								</p>
							</div>
						</div>

						<Badge variant="success" className="tabular-nums">
							{formatBRL(settings.mealPrices.almoco)}
						</Badge>
					</div>

					<p className="mt-3 text-sm font-medium text-foreground">
						{lunchMenu
							? lunchMenu.mainDish
							: "Cardápio em atualização pela equipe do RU"}
					</p>
					{lunchMenu ? (
						<p className="mt-1 text-xs text-muted-foreground">
							Opção veg: {lunchMenu.veganOption}
						</p>
					) : null}

					<Button
						type="button"
						variant="secondary"
						size="sm"
						onClick={onOpenMenuTab}
						className="mt-3 w-full rounded-full font-semibold"
					>
						<HugeiconsIcon
							icon={Restaurant01Icon}
							size={16}
							strokeWidth={1.8}
						/>
						<span>Ver cardápio completo</span>
					</Button>
				</div>
			</section>

			{/* Sustainability Promo Banner */}
			<section aria-label="Campanha de sustentabilidade" className="mt-4 px-4">
				<button
					type="button"
					onClick={() => onOpenSubView("sustentavel")}
					className="group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-2xl border border-[#5FA927]/25 bg-gradient-to-br from-[#EBF4E3] via-[#DFF0D2] to-[#CBE7B4] p-4 text-left shadow-xs transition-all hover:shadow-sm active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none dark:border-[#5FA927]/30 dark:from-[#1B3B25] dark:via-[#1F442A] dark:to-[#245231]"
				>
					<div className="relative z-10 max-w-[70%]">
						<p className="text-sm font-bold leading-snug text-[#0B4F22] dark:text-[#C5ECA1]">
							Juntos por um campus mais verde!
						</p>
						<p className="mt-1 text-xs leading-relaxed text-[#295335] dark:text-[#DDF2C7]/85">
							Use o RUPay e ajude a reduzir o uso de papel.
						</p>
					</div>

					<div
						aria-hidden="true"
						className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-white/75 shadow-inner dark:bg-[#0B4F22]/60"
					>
						<svg
							viewBox="0 0 64 64"
							fill="none"
							aria-hidden="true"
							className="size-12"
						>
							<circle cx="32" cy="36" r="18" fill="#5FA927" fillOpacity="0.2" />
							<path
								d="M17 37C17 44.7 23.7 51 32 51C40.3 51 47 44.7 47 37H17Z"
								fill="#0B4F22"
							/>
							<path
								d="M23 37C23 28 29 21 38 19C38 27 32 34 23 37Z"
								fill="#5FA927"
							/>
							<path
								d="M34 37C35 29 41 24 49 23C47 31 41 36 34 37Z"
								fill="#8FD152"
							/>
						</svg>
					</div>
				</button>
			</section>
		</div>
	);
}
