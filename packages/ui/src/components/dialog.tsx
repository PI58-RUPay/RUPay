"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "cn";
import type * as React from "react";

function Dialog(props: DialogPrimitive.Root.Props) {
	return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger<Payload = unknown>(
	props: DialogPrimitive.Trigger.Props<Payload>,
) {
	return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal(props: DialogPrimitive.Portal.Props) {
	return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogBackdrop({
	className,
	...props
}: DialogPrimitive.Backdrop.Props) {
	return (
		<DialogPrimitive.Backdrop
			data-slot="dialog-backdrop"
			className={
				typeof className === "function"
					? (state) =>
							cn(
								"fixed inset-0 z-50 bg-black/45 backdrop-blur-xs transition-opacity duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
								className(state),
							)
					: cn(
							"fixed inset-0 z-50 bg-black/45 backdrop-blur-xs transition-opacity duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
							className,
						)
			}
			{...props}
		/>
	);
}

const dialogPopupClasses =
	"fixed top-1/2 left-1/2 z-50 grid max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 grid-cols-1 gap-4 overflow-x-hidden overflow-y-auto rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-xl outline-none transition-all duration-150 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0";

function DialogContent({
	className,
	children,
	showCloseButton = true,
	...props
}: DialogPrimitive.Popup.Props & {
	showCloseButton?: boolean;
}) {
	return (
		<DialogPortal>
			<DialogBackdrop />
			<DialogPrimitive.Popup
				data-slot="dialog-content"
				className={
					typeof className === "function"
						? (state) => cn(dialogPopupClasses, className(state))
						: cn(dialogPopupClasses, className)
				}
				{...props}
			>
				{children}
				{showCloseButton ? (
					<DialogPrimitive.Close
						data-slot="dialog-close"
						aria-label="Fechar"
						className="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none"
					>
						<HugeiconsIcon icon={Cancel01Icon} className="size-4" />
					</DialogPrimitive.Close>
				) : null}
			</DialogPrimitive.Popup>
		</DialogPortal>
	);
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-header"
			className={cn("flex flex-col gap-1.5 text-left", className)}
			{...props}
		/>
	);
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-footer"
			className={cn(
				"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				className,
			)}
			{...props}
		/>
	);
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={
				typeof className === "function"
					? (state) =>
							cn(
								"text-lg font-semibold leading-none tracking-tight",
								className(state),
							)
					: cn("text-lg font-semibold leading-none tracking-tight", className)
			}
			{...props}
		/>
	);
}

function DialogDescription({
	className,
	...props
}: DialogPrimitive.Description.Props) {
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={
				typeof className === "function"
					? (state) => cn("text-sm text-muted-foreground", className(state))
					: cn("text-sm text-muted-foreground", className)
			}
			{...props}
		/>
	);
}

function DialogClose({ className, ...props }: DialogPrimitive.Close.Props) {
	return (
		<DialogPrimitive.Close
			data-slot="dialog-close"
			className={
				typeof className === "function"
					? (state) => cn(className(state))
					: cn(className)
			}
			{...props}
		/>
	);
}

export {
	Dialog,
	DialogBackdrop,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
};
