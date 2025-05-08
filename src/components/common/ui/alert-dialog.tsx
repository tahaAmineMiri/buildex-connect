// ==============================
// Imports
// ==============================
// Importing React and Radix UI Alert Dialog primitives
// Importing utility functions and button variants for styling
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/common/ui/button";

// ==============================
// Type Aliases
// ==============================
// Type alias for the ref of the AlertDialogOverlay component
// Type alias for the ref of the AlertDialogContent component
// Type alias for the ref of the AlertDialogTitle component
// Type alias for the ref of the AlertDialogDescription component
// Type alias for the ref of the AlertDialogAction component
// Type alias for the ref of the AlertDialogCancel component
type AlertDialogOverlayRef = React.ElementRef<
	typeof AlertDialogPrimitive.Overlay
>;
type AlertDialogContentRef = React.ElementRef<
	typeof AlertDialogPrimitive.Content
>;
type AlertDialogTitleRef = React.ElementRef<typeof AlertDialogPrimitive.Title>;
type AlertDialogDescriptionRef = React.ElementRef<
	typeof AlertDialogPrimitive.Description
>;
type AlertDialogActionRef = React.ElementRef<
	typeof AlertDialogPrimitive.Action
>;
type AlertDialogCancelRef = React.ElementRef<
	typeof AlertDialogPrimitive.Cancel
>;

// ==============================
// Interfaces
// ==============================
// Interface for the props of the AlertDialogOverlay component
// Interface for the props of the AlertDialogContent component
// Interface for the props of the AlertDialogTitle component
// Interface for the props of the AlertDialogDescription component
// Interface for the props of the AlertDialogAction component
// Interface for the props of the AlertDialogCancel component

interface AlertDialogOverlayProps
	extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> {
	className?: string;
}

interface AlertDialogContentProps
	extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> {
	className?: string;
}

interface AlertDialogTitleProps
	extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> {
	className?: string;
}

interface AlertDialogDescriptionProps
	extends React.ComponentPropsWithoutRef<
		typeof AlertDialogPrimitive.Description
	> {
	className?: string;
}

interface AlertDialogActionProps
	extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> {
	className?: string;
}

interface AlertDialogCancelProps
	extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> {
	className?: string;
}

// ==============================
// Base Components
// ==============================
/**
 * Root container for the alert dialog
 */
const AlertDialog = AlertDialogPrimitive.Root;

/**
 * Element that triggers the alert dialog
 */
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

/**
 * Portal for rendering the dialog outside the DOM hierarchy
 */
const AlertDialogPortal = AlertDialogPrimitive.Portal;

// ==============================
// Overlay Component
// ==============================
/**
 * Background overlay that covers the page when dialog is open
 */
const AlertDialogOverlay = React.forwardRef<
	AlertDialogOverlayRef,
	AlertDialogOverlayProps
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Overlay
		ref={ref}
		className={cn(
			[
				"fixed inset-0 z-50 bg-black/80",
				// Animation classes
				"data-[state=open]:animate-in data-[state=closed]:animate-out",
				"data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			].join(" "),
			className
		)}
		{...props}
	/>
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

// ==============================
// Content Component
// ==============================
/**
 * Main content container for the alert dialog
 */
const AlertDialogContent = React.forwardRef<
	AlertDialogContentRef,
	AlertDialogContentProps
>(({ className, children, ...props }, ref) => (
	<AlertDialogPortal>
		<AlertDialogOverlay />
		<AlertDialogPrimitive.Content
			ref={ref}
			className={cn(
				[
					// Positioning
					"fixed left-[50%] top-[50%] z-50",
					"translate-x-[-50%] translate-y-[-50%]",

					// Dimensions and styling
					"grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg",
					"sm:rounded-lg",

					// Animation base
					"duration-200",

					// Fade animations
					"data-[state=open]:animate-in data-[state=closed]:animate-out",
					"data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",

					// Zoom animations
					"data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",

					// Slide animations
					"data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
					"data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
				].join(" "),
				className
			)}
			aria-describedby="alert-dialog-description"
			{...props}>
			{/* Add a description element */}
			<p
				id="alert-dialog-description"
				className="text-sm text-muted-foreground"></p>
			{children}
		</AlertDialogPrimitive.Content>
	</AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

// ==============================
// Layout Components
// ==============================
/**
 * Container for the dialog header content (title and description)
 */
const AlertDialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col space-y-2 text-center sm:text-left",
			className
		)}
		{...props}
	/>
);
AlertDialogHeader.displayName = "AlertDialogHeader";

/**
 * Container for the dialog footer content (action buttons)
 * Reverses button order on mobile for better UX
 */
const AlertDialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
			className
		)}
		{...props}
	/>
);
AlertDialogFooter.displayName = "AlertDialogFooter";

// ==============================
// Content Components
// ==============================
/**
 * Title component for the alert dialog
 */
const AlertDialogTitle = React.forwardRef<
	AlertDialogTitleRef,
	AlertDialogTitleProps
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Title
		ref={ref}
		className={cn("text-lg font-semibold", className)}
		{...props}
	/>
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

/**
 * Description component for the alert dialog
 */
const AlertDialogDescription = React.forwardRef<
	AlertDialogDescriptionRef,
	AlertDialogDescriptionProps
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Description
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));
AlertDialogDescription.displayName =
	AlertDialogPrimitive.Description.displayName;

// ==============================
// Action Components
// ==============================
/**
 * Primary action button for the alert dialog
 */
const AlertDialogAction = React.forwardRef<
	AlertDialogActionRef,
	AlertDialogActionProps
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Action
		ref={ref}
		className={cn(buttonVariants(), className)}
		{...props}
	/>
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

/**
 * Cancel button for the alert dialog
 * Uses outline variant and has special mobile styling
 */
const AlertDialogCancel = React.forwardRef<
	AlertDialogCancelRef,
	AlertDialogCancelProps
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Cancel
		ref={ref}
		className={cn(
			buttonVariants({ variant: "outline" }),
			"mt-2 sm:mt-0", // Add margin on mobile
			className
		)}
		{...props}
	/>
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// ==============================
// Exports
// ==============================
export {
	AlertDialog,
	AlertDialogPortal,
	AlertDialogOverlay,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogAction,
	AlertDialogCancel,
};
