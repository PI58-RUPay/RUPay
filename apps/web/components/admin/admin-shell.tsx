"use client";

import {
	BarChartIcon,
	Calendar01Icon,
	Cancel01Icon,
	CreditCardIcon,
	Dish01Icon,
	Home01Icon,
	Leaf01Icon,
	Menu01Icon,
	Notification01Icon,
	Settings01Icon,
	SmartPhone01Icon,
	UserGroupIcon,
	UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuManagerView } from "@/components/admin/menu-manager-view";
import { NotificationsView } from "@/components/admin/notifications-view";
import { OverviewView } from "@/components/admin/overview-view";
import { PaymentsView } from "@/components/admin/payments-view";
import { ReportsView } from "@/components/admin/reports-view";
import { SettingsView } from "@/components/admin/settings-view";
import { UsersView } from "@/components/admin/users-view";
import { RuGestaoLogo } from "@/components/brand/rupay-logo";

export type AdminNavKey =
	| "inicio"
	| "relatorios"
	| "usuarios"
	| "cardapio"
	| "pagamentos"
	| "notificacoes"
	| "configuracoes";

interface NavItem {
	key: AdminNavKey;
	label: string;
	icon: IconSvgElement;
}

const NAV_ITEMS: NavItem[] = [
	{ key: "inicio", label: "Início", icon: Home01Icon },
	{ key: "relatorios", label: "Relatórios", icon: BarChartIcon },
	{ key: "usuarios", label: "Usuários", icon: UserGroupIcon },
	{ key: "cardapio", label: "Cardápio", icon: Dish01Icon },
	{ key: "pagamentos", label: "Pagamentos", icon: CreditCardIcon },
	{ key: "notificacoes", label: "Notificações", icon: Notification01Icon },
	{ key: "configuracoes", label: "Configurações", icon: Settings01Icon },
];

function SidebarContent({
	activeNav,
	onSelect,
	onCloseMobile,
}: {
	activeNav: AdminNavKey;
	onSelect: (key: AdminNavKey) => void;
	onCloseMobile?: () => void;
}) {
	return (
		<>
			<div className="flex flex-col gap-5">
				<div className="relative flex flex-col items-center gap-2.5 pt-2 pb-3">
					{onCloseMobile ? (
						<button
							type="button"
							onClick={onCloseMobile}
							aria-label="Fechar menu"
							className="absolute top-0 right-0 inline-flex size-8 items-center justify-center rounded-full text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
						>
							<HugeiconsIcon icon={Cancel01Icon} size={18} strokeWidth={1.8} />
						</button>
					) : null}
					<RuGestaoLogo className="size-11" aria-label="Logo RU Gestão" />
					<span className="text-lg font-bold tracking-tight text-white">
						RU Gestão
					</span>
				</div>

				<nav
					aria-label="Navegação administrativa"
					className="flex flex-col gap-1"
				>
					{NAV_ITEMS.map((item) => {
						const isActive = activeNav === item.key;
						return (
							<button
								key={item.key}
								type="button"
								onClick={() => {
									onSelect(item.key);
									onCloseMobile?.();
								}}
								aria-current={isActive ? "page" : undefined}
								className={cn(
									"flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
									isActive
										? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
										: "text-sidebar-foreground/90 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
								)}
							>
								<HugeiconsIcon
									icon={item.icon}
									size={18}
									strokeWidth={isActive ? 2 : 1.8}
								/>
								<span>{item.label}</span>
							</button>
						);
					})}
				</nav>
			</div>

			<div className="relative mt-6 overflow-hidden rounded-2xl bg-[#CDE8B8] p-4 text-[#0B4F22] shadow-xs">
				<div className="mb-2 flex justify-center">
					<span className="inline-flex size-9 items-center justify-center rounded-full bg-[#0B4F22]/10 text-[#0B4F22]">
						<HugeiconsIcon icon={Leaf01Icon} size={20} strokeWidth={2} />
					</span>
				</div>
				<p className="text-center text-sm font-bold leading-snug">
					Sustentabilidade em foco!
				</p>
				<p className="mt-1.5 text-center text-xs leading-relaxed text-[#144B26]">
					Reduza o uso de papel e contribua com o meio ambiente.
				</p>
				<HugeiconsIcon
					icon={Leaf01Icon}
					size={44}
					strokeWidth={1.4}
					className="pointer-events-none absolute -right-2 -bottom-2 rotate-12 text-[#5FA927]/25"
				/>
			</div>
		</>
	);
}

export function AdminShell() {
	const [activeNav, setActiveNav] = useState<AdminNavKey>("inicio");
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		if (!mobileOpen) {
			return;
		}
		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setMobileOpen(false);
			}
		}
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [mobileOpen]);

	return (
		<div className="flex min-h-screen bg-background text-foreground">
			{/* Desktop Sidebar */}
			<aside className="hidden w-64 shrink-0 flex-col justify-between bg-sidebar p-4 text-sidebar-foreground lg:sticky lg:top-0 lg:flex lg:h-screen">
				<SidebarContent activeNav={activeNav} onSelect={setActiveNav} />
			</aside>

			{/* Mobile Slide-Over Drawer */}
			{mobileOpen ? (
				<div
					className="fixed inset-0 z-50 flex lg:hidden"
					role="dialog"
					aria-modal="true"
					aria-label="Menu administrativo"
				>
					<button
						type="button"
						aria-label="Fechar menu lateral"
						onClick={() => setMobileOpen(false)}
						className="fixed inset-0 bg-black/45 backdrop-blur-xs"
					/>
					<aside className="relative z-10 flex h-full w-72 max-w-[85vw] flex-col justify-between overflow-y-auto bg-sidebar p-4 text-sidebar-foreground shadow-2xl">
						<SidebarContent
							activeNav={activeNav}
							onSelect={setActiveNav}
							onCloseMobile={() => setMobileOpen(false)}
						/>
					</aside>
				</div>
			) : null}

			{/* Main Area */}
			<div className="flex min-w-0 flex-1 flex-col">
				<header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-border bg-background/95 px-4 backdrop-blur-xs lg:px-8">
					<div className="flex min-w-0 items-center gap-3">
						<button
							type="button"
							onClick={() => setMobileOpen(true)}
							aria-label="Abrir menu"
							className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-muted lg:hidden"
						>
							<HugeiconsIcon icon={Menu01Icon} size={18} strokeWidth={1.8} />
						</button>
						<span className="truncate text-base font-semibold text-primary sm:text-lg">
							Universidade Nova Paulista
						</span>
					</div>

					<div className="flex shrink-0 items-center gap-2 sm:gap-3">
						<div className="hidden items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground shadow-2xs sm:inline-flex">
							<HugeiconsIcon
								icon={Calendar01Icon}
								size={15}
								strokeWidth={1.8}
								className="text-primary"
							/>
							<span>10/11/2025 · Ao vivo</span>
						</div>

						<Link
							href="/"
							className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-accent"
						>
							<HugeiconsIcon
								icon={SmartPhone01Icon}
								size={15}
								strokeWidth={1.8}
							/>
							<span>App Estudante</span>
						</Link>

						<button
							type="button"
							onClick={() => setActiveNav("configuracoes")}
							title="Configurações do Administrador"
							aria-label="Abrir configurações do administrador"
							className="inline-flex size-9 items-center justify-center rounded-full border border-primary/25 bg-secondary text-primary transition-colors hover:bg-accent"
						>
							<HugeiconsIcon icon={UserIcon} size={18} strokeWidth={1.8} />
						</button>
					</div>
				</header>

				<main className="mx-auto w-full max-w-[1360px] flex-1 p-4 sm:p-6 lg:px-8 lg:py-6">
					{activeNav === "inicio" ? (
						<OverviewView onNavigate={setActiveNav} />
					) : null}
					{activeNav === "relatorios" ? <ReportsView /> : null}
					{activeNav === "usuarios" ? <UsersView /> : null}
					{activeNav === "cardapio" ? <MenuManagerView /> : null}
					{activeNav === "pagamentos" ? <PaymentsView /> : null}
					{activeNav === "notificacoes" ? <NotificationsView /> : null}
					{activeNav === "configuracoes" ? <SettingsView /> : null}
				</main>
			</div>
		</div>
	);
}
