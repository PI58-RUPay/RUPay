"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "cn";

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			className={
				typeof className === "function"
					? (state) =>
							cn("flex flex-col gap-3 data-vertical:flex-row", className(state))
					: cn("flex flex-col gap-3 data-vertical:flex-row", className)
			}
			{...props}
		/>
	);
}

function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={
				typeof className === "function"
					? (state) =>
							cn(
								"relative inline-flex w-fit items-center gap-1 rounded-xl bg-muted p-1 text-muted-foreground data-vertical:flex-col data-vertical:items-stretch",
								className(state),
							)
					: cn(
							"relative inline-flex w-fit items-center gap-1 rounded-xl bg-muted p-1 text-muted-foreground data-vertical:flex-col data-vertical:items-stretch",
							className,
						)
			}
			{...props}
		/>
	);
}

const tabsTriggerClasses =
	"relative z-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap text-muted-foreground transition-all outline-none select-none hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-active:bg-card data-active:text-foreground data-active:shadow-xs dark:data-active:bg-background/80 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
	return (
		<TabsPrimitive.Tab
			data-slot="tabs-trigger"
			className={
				typeof className === "function"
					? (state) => cn(tabsTriggerClasses, className(state))
					: cn(tabsTriggerClasses, className)
			}
			{...props}
		/>
	);
}

function TabsIndicator({ className, ...props }: TabsPrimitive.Indicator.Props) {
	return (
		<TabsPrimitive.Indicator
			data-slot="tabs-indicator"
			className={
				typeof className === "function"
					? (state) =>
							cn(
								"pointer-events-none absolute top-0 left-0 z-0 h-[var(--active-tab-height)] w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] translate-y-[var(--active-tab-top)] rounded-lg bg-card shadow-xs transition-[transform,width,height] duration-200 ease-out",
								className(state),
							)
					: cn(
							"pointer-events-none absolute top-0 left-0 z-0 h-[var(--active-tab-height)] w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] translate-y-[var(--active-tab-top)] rounded-lg bg-card shadow-xs transition-[transform,width,height] duration-200 ease-out",
							className,
						)
			}
			{...props}
		/>
	);
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
	return (
		<TabsPrimitive.Panel
			data-slot="tabs-content"
			className={
				typeof className === "function"
					? (state) => cn("flex-1 outline-none", className(state))
					: cn("flex-1 outline-none", className)
			}
			{...props}
		/>
	);
}

export { Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger };
