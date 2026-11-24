"use client";

import {
	ArrowLeft01Icon,
	Leaf01Icon,
	Recycle01Icon,
	Tree01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@workspace/ui/components/button";
import { toast } from "sonner";
import { EcoGlobeIllustration } from "@/components/brand/rupay-logo";
import { formatInt } from "@/lib/format";
import { useRupayStore } from "@/store/use-rupay-store";

interface SustainableViewProps {
	onBack: () => void;
}

const PILLARS = [
	{
		id: "paper",
		icon: Leaf01Icon,
		text: "Reduza o uso de papel",
	},
	{
		id: "waste",
		icon: Recycle01Icon,
		text: "Apoie a gestão consciente de resíduos",
	},
	{
		id: "green-ru",
		icon: Tree01Icon,
		text: "Faça parte de um RU mais verde!",
	},
] as const;

export function SustainableView({ onBack }: SustainableViewProps) {
	const student = useRupayStore((state) => state.student);

	function handleTogether() {
		toast.success("Obrigado por contribuir para um RU mais sustentável!");
		onBack();
	}

	return (
		<div className="flex flex-col px-4 py-5">
			{/* Header with back arrow */}
			<header className="relative flex items-center justify-center pb-3">
				<button
					type="button"
					onClick={onBack}
					aria-label="Voltar para Início"
					className="absolute left-0 inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
				>
					<HugeiconsIcon icon={ArrowLeft01Icon} size={20} strokeWidth={2} />
				</button>
				<h1 className="text-lg font-bold tracking-tight text-foreground">
					RU Sustentável
				</h1>
			</header>

			{/* Globe illustration + Hero copy */}
			<div className="flex flex-col items-center text-center">
				<EcoGlobeIllustration className="mx-auto w-40" />
				<h2 className="mt-2 text-xl font-bold leading-snug tracking-tight text-primary">
					Pequenas atitudes, grande impacto!
				</h2>
				<p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
					Com o RUPay, você contribui para um Restaurante Universitário mais
					sustentável.
				</p>
			</div>

			{/* 3 Green Circular Icon Pillars */}
			<div className="mt-5 flex flex-col gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-xs">
				{PILLARS.map((pillar) => (
					<div key={pillar.id} className="flex items-center gap-3.5">
						<span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#5FA927] text-white shadow-xs">
							<HugeiconsIcon icon={pillar.icon} size={20} strokeWidth={1.8} />
						</span>
						<span className="text-sm font-medium text-foreground">
							{pillar.text}
						</span>
					</div>
				))}
			</div>

			{/* Personal Metrics Grid */}
			<section
				aria-label="Seu impacto ambiental"
				className="mt-4 grid grid-cols-3 gap-2.5"
			>
				<div className="rounded-2xl border border-border/80 bg-secondary/70 p-3 text-center">
					<p className="text-lg font-bold text-primary tabular-nums">
						{formatInt(student.cupsAvoided)}
					</p>
					<p className="mt-0.5 text-[11px] font-medium leading-tight text-muted-foreground">
						Copos evitados
					</p>
				</div>
				<div className="rounded-2xl border border-border/80 bg-secondary/70 p-3 text-center">
					<p className="text-lg font-bold text-primary tabular-nums">
						{formatInt(student.paperSheetsSaved)}
					</p>
					<p className="mt-0.5 text-[11px] font-medium leading-tight text-muted-foreground">
						Folhas poupadas
					</p>
				</div>
				<div className="rounded-2xl border border-border/80 bg-secondary/70 p-3 text-center">
					<p className="text-lg font-bold text-primary tabular-nums">
						{formatInt(student.co2SavedGrams)} g
					</p>
					<p className="mt-0.5 text-[11px] font-medium leading-tight text-muted-foreground">
						CO₂ evitado
					</p>
				</div>
			</section>

			<Button
				type="button"
				size="lg"
				onClick={handleTogether}
				className="mt-5 h-11 w-full rounded-full font-semibold shadow-sm"
			>
				Vamos juntos!
			</Button>
		</div>
	);
}
