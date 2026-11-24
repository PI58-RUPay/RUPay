import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/admin-shell";

export const metadata: Metadata = {
	title: "RU Gestão — Painel Administrativo | RUPay",
	description:
		"Painel administrativo do Restaurante Universitário — Universidade Nova Paulista",
};

export default function AdminPage() {
	return <AdminShell />;
}
