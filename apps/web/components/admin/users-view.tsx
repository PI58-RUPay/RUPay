"use client";

import {
	Add01Icon,
	CheckmarkCircle01Icon,
	Search01Icon,
	Shield01Icon,
	UserGroupIcon,
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
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import { useState } from "react";
import { toast } from "sonner";
import { formatBRL, formatInt } from "@/lib/format";
import type { RuUser, UserRole } from "@/lib/mock-data";
import { useRupayStore } from "@/store/use-rupay-store";

type RoleFilter = "Todos" | UserRole;

const ROLE_FILTERS: RoleFilter[] = [
	"Todos",
	"Estudante",
	"Bolsista",
	"Servidor",
];

function getRoleBadgeVariant(
	role: UserRole,
): "default" | "secondary" | "success" {
	if (role === "Bolsista") {
		return "success";
	}
	if (role === "Servidor") {
		return "default";
	}
	return "secondary";
}

export function UsersView() {
	const users = useRupayStore((s) => s.users);
	const addUser = useRupayStore((s) => s.addUser);
	const toggleUserStatus = useRupayStore((s) => s.toggleUserStatus);
	const adminManualRecharge = useRupayStore((s) => s.adminManualRecharge);

	const [search, setSearch] = useState("");
	const [roleFilter, setRoleFilter] = useState<RoleFilter>("Todos");
	const [dialogOpen, setDialogOpen] = useState(false);

	const [name, setName] = useState("");
	const [ra, setRa] = useState("");
	const [course, setCourse] = useState("");
	const [role, setRole] = useState<UserRole>("Estudante");
	const [initialBalance, setInitialBalance] = useState("25");
	const [formError, setFormError] = useState<string | null>(null);

	const normalizedSearch = search.trim().toLowerCase();
	const filteredUsers = users.filter((user) => {
		if (roleFilter !== "Todos" && user.role !== roleFilter) {
			return false;
		}
		if (!normalizedSearch) {
			return true;
		}
		return (
			user.name.toLowerCase().includes(normalizedSearch) ||
			user.ra.toLowerCase().includes(normalizedSearch) ||
			user.course.toLowerCase().includes(normalizedSearch)
		);
	});

	function openCreateDialog() {
		setName("");
		setRa("");
		setCourse("");
		setRole("Estudante");
		setInitialBalance("25");
		setFormError(null);
		setDialogOpen(true);
	}

	function handleQuickRecharge(user: RuUser) {
		const res = adminManualRecharge(user.id, 20);
		if (res.ok) {
			toast.success(`+ R$ 20,00 creditados para ${user.name}!`);
		} else {
			toast.error(res.error);
		}
	}

	function handleToggleStatus(user: RuUser) {
		toggleUserStatus(user.id);
		toast.success(
			user.status === "Ativo"
				? `Acesso de ${user.name} bloqueado.`
				: `Acesso de ${user.name} reativado.`,
		);
	}

	function handleCreateUser(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setFormError(null);

		const parsedBalance = Number(initialBalance.replace(",", "."));
		const result = addUser({
			name: name.trim(),
			ra: ra.trim(),
			course: course.trim(),
			role,
			initialBalance: Number.isFinite(parsedBalance) ? parsedBalance : -1,
		});

		if (!result.ok) {
			setFormError(result.error);
			return;
		}

		toast.success(`Usuário ${name.trim()} cadastrado com sucesso!`);
		setDialogOpen(false);
	}

	const activeCount = users.filter((u) => u.status === "Ativo").length;

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">
						Gestão de Usuários
					</h1>
					<p className="mt-1 text-sm text-muted-foreground">
						Consulte saldos, vínculos acadêmicos, bloqueios e novos cadastros no
						RU.
					</p>
				</div>

				<Button onClick={openCreateDialog} className="w-fit">
					<HugeiconsIcon icon={Add01Icon} size={16} strokeWidth={2} />
					Novo Usuário
				</Button>
			</div>

			<Card className="gap-4 py-5 shadow-xs">
				<CardHeader className="flex flex-col gap-3 px-5 lg:flex-row lg:items-center lg:justify-between">
					<div className="flex items-center gap-2.5">
						<CardTitle className="flex items-center gap-2 text-base font-bold">
							<HugeiconsIcon
								icon={UserGroupIcon}
								size={18}
								strokeWidth={2}
								className="text-primary"
							/>
							Base do Campus
						</CardTitle>
						<Badge variant="outline">
							{formatInt(activeCount)}/{formatInt(users.length)} ativos
						</Badge>
					</div>

					<div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
						<div className="flex flex-wrap items-center gap-1.5">
							{ROLE_FILTERS.map((option) => (
								<Button
									key={option}
									type="button"
									size="xs"
									variant={roleFilter === option ? "default" : "outline"}
									onClick={() => setRoleFilter(option)}
								>
									{option}
								</Button>
							))}
						</div>

						<div className="relative w-full sm:w-64">
							<HugeiconsIcon
								icon={Search01Icon}
								size={16}
								strokeWidth={1.8}
								className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
							/>
							<Input
								value={search}
								onChange={(event) => setSearch(event.target.value)}
								placeholder="Buscar por nome ou RA..."
								className="pl-9"
							/>
						</div>
					</div>
				</CardHeader>

				<CardContent className="px-5">
					{filteredUsers.length === 0 ? (
						<div className="rounded-xl border border-dashed border-border py-10 text-center text-sm text-muted-foreground">
							Nenhum usuário encontrado para os critérios selecionados.
						</div>
					) : (
						<div className="overflow-x-auto">
							<table className="w-full min-w-[760px] border-collapse text-left text-sm">
								<thead>
									<tr className="border-b border-border text-xs font-semibold uppercase tracking-wide text-muted-foreground">
										<th className="py-3 pr-4">Nome / RA</th>
										<th className="py-3 pr-4">Curso / Setor</th>
										<th className="py-3 pr-4">Vínculo</th>
										<th className="py-3 pr-4 text-right">Saldo</th>
										<th className="py-3 pr-4">Status</th>
										<th className="py-3 pr-4">Última atividade</th>
										<th className="py-3 text-right">Ações</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-border/60">
									{filteredUsers.map((user) => (
										<tr
											key={user.id}
											className="transition-colors hover:bg-muted/35"
										>
											<td className="py-3 pr-4">
												<div className="font-semibold text-foreground">
													{user.name}
												</div>
												<div className="font-mono text-xs text-muted-foreground">
													RA {user.ra}
												</div>
											</td>
											<td className="py-3 pr-4 text-xs text-muted-foreground">
												{user.course}
											</td>
											<td className="py-3 pr-4">
												<Badge variant={getRoleBadgeVariant(user.role)}>
													{user.role}
												</Badge>
											</td>
											<td className="py-3 pr-4 text-right font-semibold text-foreground tabular-nums">
												{formatBRL(user.balance)}
											</td>
											<td className="py-3 pr-4">
												<Badge
													variant={
														user.status === "Ativo" ? "success" : "destructive"
													}
												>
													{user.status}
												</Badge>
											</td>
											<td className="py-3 pr-4 text-xs text-muted-foreground">
												{user.lastActivity}
											</td>
											<td className="py-3 text-right">
												<div className="inline-flex items-center gap-2">
													<Button
														type="button"
														size="xs"
														variant="secondary"
														onClick={() => handleQuickRecharge(user)}
													>
														+ R$ 20
													</Button>
													<Button
														type="button"
														size="xs"
														variant={
															user.status === "Ativo"
																? "destructive"
																: "outline"
														}
														onClick={() => handleToggleStatus(user)}
													>
														<HugeiconsIcon
															icon={Shield01Icon}
															size={13}
															strokeWidth={1.9}
														/>
														{user.status === "Ativo" ? "Bloquear" : "Reativar"}
													</Button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</CardContent>
			</Card>

			<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>Cadastrar Novo Usuário</DialogTitle>
						<DialogDescription>
							Adicione um estudante, bolsista ou servidor ao sistema do
							Restaurante Universitário.
						</DialogDescription>
					</DialogHeader>

					<form onSubmit={handleCreateUser} className="flex flex-col gap-4">
						<div className="flex flex-col gap-1.5">
							<label
								htmlFor="user-name"
								className="text-xs font-semibold text-foreground"
							>
								Nome completo
							</label>
							<Input
								id="user-name"
								value={name}
								onChange={(event) => setName(event.target.value)}
								placeholder="Ex.: Ana Paula Ferreira"
							/>
						</div>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="user-ra"
									className="text-xs font-semibold text-foreground"
								>
									RA / Matrícula
								</label>
								<Input
									id="user-ra"
									value={ra}
									onChange={(event) => setRa(event.target.value)}
									placeholder="Ex.: 18940"
								/>
							</div>

							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="user-role"
									className="text-xs font-semibold text-foreground"
								>
									Vínculo
								</label>
								<select
									id="user-role"
									value={role}
									onChange={(event) => setRole(event.target.value as UserRole)}
									className="h-9 w-full rounded-xl border border-input bg-card px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
								>
									<option value="Estudante">Estudante</option>
									<option value="Bolsista">Bolsista</option>
									<option value="Servidor">Servidor</option>
								</select>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="user-course"
									className="text-xs font-semibold text-foreground"
								>
									Curso / Departamento
								</label>
								<Input
									id="user-course"
									value={course}
									onChange={(event) => setCourse(event.target.value)}
									placeholder="Ex.: Sistemas de Informação"
								/>
							</div>

							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="user-balance"
									className="text-xs font-semibold text-foreground"
								>
									Saldo inicial (R$)
								</label>
								<Input
									id="user-balance"
									type="number"
									min={0}
									max={500}
									step="0.5"
									value={initialBalance}
									onChange={(event) => setInitialBalance(event.target.value)}
								/>
							</div>
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
								Cadastrar Usuário
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
}
