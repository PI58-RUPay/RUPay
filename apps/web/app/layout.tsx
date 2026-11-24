import "@workspace/ui/globals.css";

import { cn } from "@workspace/ui/lib/utils";
import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import type * as React from "react";
import { Toaster } from "sonner";
import { StoreHydration } from "@/components/store-hydration";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-sans",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: "RUPay — Restaurante Universitário",
	description: "Seu RU na palma da mão — Universidade Nova Paulista",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			suppressHydrationWarning
			className={cn(
				"antialiased",
				montserrat.variable,
				geistMono.variable,
				"font-sans",
			)}
		>
			<body>
				<ThemeProvider defaultTheme="light" enableSystem={false}>
					<StoreHydration />
					{children}
					<Toaster position="top-center" richColors />
				</ThemeProvider>
			</body>
		</html>
	);
}
