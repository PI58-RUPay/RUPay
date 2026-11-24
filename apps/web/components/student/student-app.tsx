"use client";

import {
	Home01Icon,
	Restaurant01Icon,
	UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { RupayLogo } from "@/components/brand/rupay-logo";
import { AccountView } from "@/components/student/account-view";
import { HistoryView } from "@/components/student/history-view";
import { HomeView, type StudentSubView } from "@/components/student/home-view";
import { MenuRuView } from "@/components/student/menu-ru-view";
import { NotificationsView } from "@/components/student/notifications-view";
import { RechargeDialog } from "@/components/student/recharge-dialog";
import { SustainableView } from "@/components/student/sustainable-view";

type ActiveTab = "inicio" | "ru" | "conta";

export function StudentApp() {
	const [activeTab, setActiveTab] = useState<ActiveTab>("inicio");
	const [subView, setSubView] = useState<StudentSubView | null>(null);
	const [rechargeOpen, setRechargeOpen] = useState(false);

	function selectTab(tab: ActiveTab) {
		setActiveTab(tab);
		setSubView(null);
	}

	const navItems: {
		id: ActiveTab;
		label: string;
		icon: typeof Home01Icon;
	}[] = [
		{ id: "inicio", label: "Início", icon: Home01Icon },
		{ id: "ru", label: "RU", icon: Restaurant01Icon },
		{ id: "conta", label: "Conta", icon: UserIcon },
	];

	return (
		<div className="min-h-dvh bg-background md:flex md:min-h-screen md:flex-col md:items-center md:bg-muted/40 md:px-4 md:py-5">
			{/* Desktop top switcher bar (>= md) */}
			<div className="hidden w-full max-w-2xl items-center justify-between gap-3 pb-4 md:flex">
				<div className="flex items-center gap-2 text-xs font-semibold text-foreground">
					<RupayLogo className="size-6 shrink-0" />
					<span>Universidade Nova Paulista · RUPay</span>
				</div>

				<div className="flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card p-1 shadow-xs">
					<span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
						App Estudante
					</span>
					<Link
						href="/admin"
						className="rounded-full px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
					>
						Painel ADM (RU Gestão)
					</Link>
				</div>
			</div>

			{/* Mobile App Shell */}
			<div className="flex h-dvh w-full flex-col overflow-hidden bg-background md:mx-auto md:h-[min(844px,calc(100dvh-6.5rem))] md:max-w-[430px] md:rounded-[32px] md:border md:border-border md:shadow-2xl">
				<main className="flex-1 overflow-y-auto overscroll-contain">
					{subView === "historico" ? (
						<HistoryView onBack={() => setSubView(null)} />
					) : subView === "sustentavel" ? (
						<SustainableView onBack={() => setSubView(null)} />
					) : subView === "notificacoes" ? (
						<NotificationsView onBack={() => setSubView(null)} />
					) : activeTab === "ru" ? (
						<MenuRuView />
					) : activeTab === "conta" ? (
						<AccountView />
					) : (
						<HomeView
							onOpenRecharge={() => setRechargeOpen(true)}
							onOpenSubView={(view) => setSubView(view)}
							onOpenMenuTab={() => selectTab("ru")}
							onOpenAccountTab={() => selectTab("conta")}
						/>
					)}
				</main>

				{/* Fixed bottom navigation bar inside mobile shell */}
				<nav
					aria-label="Navegação principal do estudante"
					className="shrink-0 border-t border-border bg-card/95 px-4 py-2 backdrop-blur-xs"
				>
					<div className="grid grid-cols-3 gap-1">
						{navItems.map((item) => {
							const isActive = subView === null && activeTab === item.id;
							return (
								<button
									key={item.id}
									type="button"
									aria-current={isActive ? "page" : undefined}
									onClick={() => selectTab(item.id)}
									className={cn(
										"flex flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[11px] font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
										isActive
											? "bg-secondary text-primary"
											: "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
									)}
								>
									<HugeiconsIcon
										icon={item.icon}
										size={20}
										strokeWidth={isActive ? 2.1 : 1.7}
									/>
									<span>{item.label}</span>
								</button>
							);
						})}
					</div>
				</nav>
			</div>

			<RechargeDialog open={rechargeOpen} onOpenChange={setRechargeOpen} />
		</div>
	);
}
