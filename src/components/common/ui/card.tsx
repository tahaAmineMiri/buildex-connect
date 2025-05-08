import * as React from "react";
import { cn } from "@/lib/utils";

// ==============================
// Interfaces
// ==============================

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string;
}

interface CardDescriptionProps
	extends React.HTMLAttributes<HTMLParagraphElement> {
	className?: string;
}

// ==============================
// Main Card Component
// ==============================

/**
 * Card container component
 *
 * Provides the outer container with border, background, and shadow styling.
 * All other card components should be placed inside this component.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"rounded-lg border bg-card text-card-foreground shadow-sm",
				className
			)}
			{...props}
		/>
	)
);
Card.displayName = "Card";

// ==============================
// Card Structure Components
// ==============================

/**
 * Card header component
 *
 * Container for the card title and description.
 * Provides appropriate spacing and layout.
 */
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("flex flex-col space-y-1.5 p-6", className)}
			{...props}
		/>
	)
);
CardHeader.displayName = "CardHeader";

/**
 * Card content component
 *
 * Container for the main content of the card.
 * Provides padding with no top padding to work well with CardHeader.
 */
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
	)
);
CardContent.displayName = "CardContent";

/**
 * Card footer component
 *
 * Container for actions or additional information at the bottom of the card.
 * Aligns items horizontally with appropriate spacing.
 */
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("flex items-center p-6 pt-0", className)}
			{...props}
		/>
	)
);
CardFooter.displayName = "CardFooter";

// ==============================
// Card Content Components
// ==============================

/**
 * Card title component
 *
 * Renders as an h3 heading with appropriate typography styling.
 * Typically placed inside CardHeader.
 */
const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
	({ className, ...props }, ref) => (
		<h3
			ref={ref}
			className={cn(
				"text-2xl font-semibold leading-none tracking-tight",
				className
			)}
			{...props}
		/>
	)
);
CardTitle.displayName = "CardTitle";

/**
 * Card description component
 *
 * Renders as a paragraph with muted styling for secondary text.
 * Typically placed inside CardHeader after CardTitle.
 */
const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	CardDescriptionProps
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));
CardDescription.displayName = "CardDescription";

// ==============================
// Exports
// ==============================
export {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	CardTitle,
	CardDescription,
};
