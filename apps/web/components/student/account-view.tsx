"use client";

import {
	ComputerIcon,
	Moon02Icon,
	Notification01Icon,
	QrCodeIcon,
	RefreshIcon,
	Sun01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@workspace/ui/components/badge";
import { Button, buttonVariants } from "@workspace/ui/components/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { Switch } from "@workspace/ui/components/switch";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { toast } from "sonner";
import { RupayLogo } from "@/components/brand/rupay-logo";
import { useRupayStore } from "@/store/use-rupay-store";

const emptySubscribe = () => () => {};

function useHydrated(): boolean {
	return useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	);
}

function RaQrBadge({ ra }: { ra: string }) {
	const seed = Array.from(ra).reduce(
		(acc, ch, idx) => acc + ch.charCodeAt(0) * (idx + 1),
		0,
	);
	const cells: { id: string; x: number; y: number }[] = [];
	for (let row = 0; row < 7; row += 1) {
		for (let col = 0; col < 7; col += 1) {
			const isFinder =
				(row < 2 && col < 2) || (row < 2 && col > 4) || (row > 4 && col < 2);
			const active = isFinder || (seed + row * 7 + col * 3) % 2 === 0;
			if (active) {
				cells.push({
					id: `${row}-${col}`,
					x: col * 9 + 4,
					y: row * 9 + 4,
				});
			}
		}
	}

	return (
		<div className="flex flex-col items-center gap-1 rounded-2xl bg-white p-2.5 text-[#0B4F22] shadow-sm">
			<svg
				viewBox="0 0 70 70"
				className="size-16"
				role="img"
				aria-label={`Código QR do RA ${ra}`}
			>
				<rect width="70" height="70" rx="6" fill="#FFFFFF" />
				{cells.map((cell) => (
					<rect
						key={cell.id}
						x={cell.x}
						y={cell.y}
						width="7"
						height="7"
						rx="1.5"
						fill="#0B4F22"
					/>
				))}
			</svg>
			<span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold">
				<HugeiconsIcon icon={QrCodeIcon} size={11} strokeWidth={2} />
				{ra}
			</span>
		</div>
	);
}

export function AccountView() {
	const student = useRupayStore((state) => state.student);
	const updateStudentPrefs = useRupayStore((state) => state.updateStudentPrefs);
	const resetDemoData = useRupayStore((state) => state.resetDemoData);
	const { resolvedTheme, setTheme } = useTheme();
	const hydrated = useHydrated();

	const isDark = hydrated ? resolvedTheme === "dark" : false;

	function handleResetDemo() {
		resetDemoData();
		toast.success("Dados de demonstração restaurados!");
	}

	return (
		<div className="flex flex-col gap-4 px-4 py-5">
			<header>
				<h1 className="text-xl font-bold tracking-tight text-foreground">
					Minha Conta
				</h1>
				<p className="text-xs text-muted-foreground">
					Carteirinha digital e preferências do estudante
				</p>
			</header>

			{/* Digital University ID Card */}
			<section
				aria-label="Carteirinha Universitária Digital"
				className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B4F22] via-[#12612B] to-[#1D7C39] p-5 text-white shadow-md"
			>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-10 -bottom-10 size-36 rounded-full bg-[#9AD168]/15"
				/>

				<div className="relative z-10 flex items-center justify-between gap-2">
					<div className="flex items-center gap-2">
						<RupayLogo variant="white" className="size-7" />
						<div className="leading-tight">
							<p className="text-[10px] font-semibold uppercase tracking-wider text-white/75">
								Universidade Nova Paulista
							</p>
							<p className="text-xs font-bold">Carteirinha Digital RU</p>
						</div>
					</div>

					<Badge className="border-white/20 bg-white/15 text-white">
						{student.role}
					</Badge>
				</div>

				<div className="relative z-10 mt-5 flex items-end justify-between gap-3">
					<div className="min-w-0 space-y-1.5">
						<div>
							<p className="text-[10px] uppercase tracking-wider text-white/70">
								Nome completo
							</p>
							<p className="truncate text-base font-bold">{student.name}</p>
						</div>
						<div>
							<p className="text-[10px] uppercase tracking-wider text-white/70">
								Curso
							</p>
							<p className="truncate text-xs font-medium text-white/90">
								{student.course}
							</p>
						</div>
						<div>
							<p className="text-[10px] uppercase tracking-wider text-white/70">
								Registro Acadêmico
							</p>
							<p className="font-mono text-sm font-semibold">RA {student.ra}</p>
						</div>
					</div>

					<RaQrBadge ra={student.ra} />
				</div>
			</section>

			{/* Appearance & Notification Preferences */}
			<Card className="gap-3 py-4">
				<CardHeader className="px-4">
					<CardTitle className="text-sm font-semibold">Preferências</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-3 px-4">
					<div className="flex items-center justify-between gap-3">
						<div className="flex items-center gap-2.5">
							<span className="flex size-8 items-center justify-center rounded-xl bg-secondary text-primary">
								<HugeiconsIcon
									icon={isDark ? Moon02Icon : Sun01Icon}
									size={17}
									strokeWidth={1.8}
								/>
							</span>
							<div>
								<p className="text-sm font-medium text-foreground">
									Modo escuro
								</p>
								<p className="text-xs text-muted-foreground">
									Alternar tema claro ou escuro
								</p>
							</div>
						</div>
						<Switch
							aria-label="Modo escuro"
							checked={isDark}
							onCheckedChange={(checked) =>
								setTheme(checked ? "dark" : "light")
							}
						/>
					</div>

					<Separator />

					<div className="flex items-center justify-between gap-3">
						<div className="flex items-center gap-2.5">
							<span className="flex size-8 items-center justify-center rounded-xl bg-secondary text-primary">
								<HugeiconsIcon
									icon={Notification01Icon}
									size={17}
									strokeWidth={1.8}
								/>
							</span>
							<div>
								<p className="text-sm font-medium text-foreground">
									Cardápio diário
								</p>
								<p className="text-xs text-muted-foreground">
									Notificar quando novos pratos forem publicados
								</p>
							</div>
						</div>
						<Switch
							aria-label="Notificações de cardápio diário"
							checked={student.notifyMenu}
							onCheckedChange={(checked) =>
								updateStudentPrefs({ notifyMenu: checked })
							}
						/>
					</div>

					<Separator />

					<div className="flex items-center justify-between gap-3">
						<div className="flex items-center gap-2.5">
							<span className="flex size-8 items-center justify-center rounded-xl bg-secondary text-primary">
								<HugeiconsIcon
									icon={Notification01Icon}
									size={17}
									strokeWidth={1.8}
								/>
							</span>
							<div>
								<p className="text-sm font-medium text-foreground">
									Alerta de saldo baixo
								</p>
								<p className="text-xs text-muted-foreground">
									Avisar quando saldo ficar abaixo de R$ 15,00
								</p>
							</div>
						</div>
						<Switch
							aria-label="Alerta de saldo baixo"
							checked={student.notifyLowBalance}
							onCheckedChange={(checked) =>
								updateStudentPrefs({ notifyLowBalance: checked })
							}
						/>
					</div>
				</CardContent>
			</Card>

			{/* Admin Switcher & Demo Reset */}
			<div className="flex flex-col gap-2.5">
				<Link
					href="/admin"
					className={cn(
						buttonVariants({ variant: "outline", size: "lg" }),
						"h-11 w-full justify-center gap-2 rounded-full font-semibold",
					)}
				>
					<HugeiconsIcon icon={ComputerIcon} size={18} strokeWidth={1.8} />
					<span>Abrir Painel ADM (RU Gestão)</span>
				</Link>

				<Button
					type="button"
					variant="ghost"
					size="default"
					onClick={handleResetDemo}
					className="w-full rounded-full text-muted-foreground hover:text-foreground"
				>
					<HugeiconsIcon icon={RefreshIcon} size={17} strokeWidth={1.8} />
					<span>Restaurar dados demo</span>
				</Button>
			</div>
		</div>
	);
}
