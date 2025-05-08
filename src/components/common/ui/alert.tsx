import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Type aliases for references
type AlertRef = HTMLDivElement;
type AlertTitleRef = HTMLHeadingElement;
type AlertDescriptionRef = HTMLParagraphElement;

// Interfaces for props
interface AlertProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof alertVariants> {}

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

interface AlertDescriptionProps
	extends React.HTMLAttributes<HTMLParagraphElement> {}

// ==============================
// Alert Variants Definition
// ==============================
/**
 * Defines the styling variants for the Alert component
 * Uses complex CSS selectors to handle icon positioning and spacing
 */
const alertVariants = cva(
	[
		// Base styles
		"relative w-full rounded-lg border p-4",

		// Icon positioning and spacing selectors
		"[&>svg]:absolute", // Position icon absolutely
		"[&>svg]:left-4", // Position icon on the left
		"[&>svg]:top-4", // Position icon at the top
		"[&>svg]:text-foreground", // Default icon color

		// Adjust spacing when icon is present
		"[&>svg~*]:pl-7", // Add left padding to all elements after the icon
		"[&>svg+div]:translate-y-[-3px]", // Slight vertical adjustment for div after icon
	].join(" "),
	{
		variants: {
			variant: {
				// Default variant
				default: "bg-background text-foreground",

				// Destructive/error variant
				destructive: [
					"border-destructive/50",
					"text-destructive",
					"dark:border-destructive",
					"[&>svg]:text-destructive", // Override icon color for destructive variant
				].join(" "),
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

// ==============================
// Main Alert Component
// ==============================
/**
 * Alert component for displaying important messages
 * Can contain an icon, title, and description
 */
const Alert = React.forwardRef<AlertRef, AlertProps>(
	({ className, variant, ...props }, ref) => (
		<div
			ref={ref}
			role="alert" // Accessibility attribute
			className={cn(alertVariants({ variant }), className)}
			{...props}
		/>
	)
);
Alert.displayName = "Alert";

// ==============================
// Alert Title Component
// ==============================
/**
 * Title component for the Alert
 * Renders as an h5 heading element
 */
const AlertTitle = React.forwardRef<AlertTitleRef, AlertTitleProps>(
	({ className, ...props }, ref) => (
		<h5
			ref={ref}
			className={cn("mb-1 font-medium leading-none tracking-tight", className)}
			{...props}
		/>
	)
);
AlertTitle.displayName = "AlertTitle";

// ==============================
// Alert Description Component
// ==============================
/**
 * Description component for the Alert
 * Provides additional details about the alert message
 */
const AlertDescription = React.forwardRef<
	AlertDescriptionRef,
	AlertDescriptionProps
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("text-sm [&_p]:leading-relaxed", className)}
		{...props}
	/>
));
AlertDescription.displayName = "AlertDescription";

// ==============================
// Exports
// ==============================
export { Alert, AlertTitle, AlertDescription };
