import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ==============================
// Badge Variants Definition
// ==============================
/**
 * Defines the styling variants for the Badge component
 * Includes default, secondary, destructive, and outline variants
 */
const badgeVariants = cva(
	[
		// Base styles
		"inline-flex items-center",
		"rounded-full border",
		"px-2.5 py-0.5",
		"text-xs font-semibold",
		"transition-colors",

		// Focus styles
		"focus:outline-none focus:ring-2",
		"focus:ring-ring focus:ring-offset-2",
	].join(" "),
	{
		variants: {
			variant: {
				// Primary variant - used for highlighting primary actions or status
				default: [
					"border-transparent",
					"bg-primary text-primary-foreground",
					"hover:bg-primary/80",
				].join(" "),

				// Secondary variant - used for less prominent information
				secondary: [
					"border-transparent",
					"bg-secondary text-secondary-foreground",
					"hover:bg-secondary/80",
				].join(" "),

				// Destructive variant - used for errors or destructive actions
				destructive: [
					"border-transparent",
					"bg-destructive text-destructive-foreground",
					"hover:bg-destructive/80",
				].join(" "),

				// Outline variant - subtle style with just a border
				outline: "text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

// ==============================
// Badge Props Interface
// ==============================
/**
 * Props for the Badge component
 * Extends HTMLDivElement props and includes variant options
 */
export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

// ==============================
// Badge Component
// ==============================
/**
 * Badge component for displaying short status descriptors
 *
 * Used to highlight status, categories, or counts in the UI.
 * Available in multiple variants for different visual emphasis.
 */
const Badge = ({ className, variant, ...props }: BadgeProps) => (
	<div className={cn(badgeVariants({ variant }), className)} {...props} />
);

// ==============================
// Exports
// ==============================
export { Badge, badgeVariants };
