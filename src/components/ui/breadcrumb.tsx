import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

// ==============================
// Type Aliases
// ==============================

type NavRef = HTMLElement;
type OListRef = HTMLOListElement;
type ListItemRef = HTMLLIElement;
type AnchorRef = HTMLAnchorElement;
type SpanRef = HTMLSpanElement;

// ==============================
// Interfaces
// ==============================

/**
 * `BreadcrumbProps` defines the props for the `Breadcrumb` component.
 * - `separator`: Optional custom separator between breadcrumb items.
 */
interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
	separator?: React.ReactNode;
}

/**
 * `BreadcrumbListProps` defines the props for the `BreadcrumbList` component.
 * - `className`: Optional additional class names for styling.
 */
interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<"ol"> {
	className?: string;
}

/**
 * `BreadcrumbItemProps` defines the props for the `BreadcrumbItem` component.
 * - `className`: Optional additional class names for styling.
 */
interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<"li"> {
	className?: string;
}

/**
 * `BreadcrumbLinkProps` defines the props for the `BreadcrumbLink` component.
 * - `asChild`: If true, allows the use of a custom component instead of an `<a>` tag.
 * - `className`: Optional additional class names for styling.
 */
interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
	asChild?: boolean;
	className?: string;
}

/**
 * `BreadcrumbPageProps` defines the props for the `BreadcrumbPage` component.
 * - `className`: Optional additional class names for styling.
 */
interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<"span"> {
	className?: string;
}

/**
 * `BreadcrumbSeparatorProps` defines the props for the `BreadcrumbSeparator` component.
 * - `className`: Optional additional class names for styling.
 * - `children`: Optional custom separator content.
 */
interface BreadcrumbSeparatorProps extends React.ComponentProps<"li"> {
	className?: string;
	children?: React.ReactNode;
}

/**
 * `BreadcrumbEllipsisProps` defines the props for the `BreadcrumbEllipsis` component.
 * - `className`: Optional additional class names for styling.
 */
interface BreadcrumbEllipsisProps extends React.ComponentProps<"span"> {
	className?: string;
}

// ==============================
// Container Components
// ==============================

/**
 * `Breadcrumb` is the main container for the breadcrumb navigation.
 * - Provides an accessible `<nav>` element with an optional `separator`.
 */
const Breadcrumb = React.forwardRef<NavRef, BreadcrumbProps>(
	({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />
);
Breadcrumb.displayName = "Breadcrumb";

/**
 * `BreadcrumbList` is a container for breadcrumb items.
 * - Renders an ordered list (`<ol>`) with responsive spacing and text styling.
 */
const BreadcrumbList = React.forwardRef<OListRef, BreadcrumbListProps>(
	({ className, ...props }, ref) => (
		<ol
			ref={ref}
			className={cn(
				[
					"flex flex-wrap items-center",
					"gap-1.5 sm:gap-2.5", // Responsive gap spacing
					"break-words", // Allow text to break
					"text-sm text-muted-foreground", // Text styling
				].join(" "),
				className
			)}
			{...props}
		/>
	)
);
BreadcrumbList.displayName = "BreadcrumbList";

/**
 * `BreadcrumbItem` represents a single item in the breadcrumb.
 * - Renders a list item (`<li>`) with inline-flex styling for alignment.
 */
const BreadcrumbItem = React.forwardRef<ListItemRef, BreadcrumbItemProps>(
	({ className, ...props }, ref) => (
		<li
			ref={ref}
			className={cn("inline-flex items-center gap-1.5", className)}
			{...props}
		/>
	)
);
BreadcrumbItem.displayName = "BreadcrumbItem";

// ==============================
// Interactive Components
// ==============================

/**
 * `BreadcrumbLink` is a clickable link within the breadcrumb.
 * - Supports custom components via the `asChild` prop.
 * - Includes hover styling for better user interaction.
 */
const BreadcrumbLink = React.forwardRef<AnchorRef, BreadcrumbLinkProps>(
	({ asChild, className, ...props }, ref) => {
		const Comp = asChild ? Slot : "a";

		return (
			<Comp
				ref={ref}
				className={cn("transition-colors hover:text-foreground", className)}
				{...props}
			/>
		);
	}
);
BreadcrumbLink.displayName = "BreadcrumbLink";

/**
 * `BreadcrumbPage` represents the current page in the breadcrumb.
 * - Renders a non-clickable `<span>` with `aria-current="page"`.
 */
const BreadcrumbPage = React.forwardRef<SpanRef, BreadcrumbPageProps>(
	({ className, ...props }, ref) => (
		<span
			ref={ref}
			role="link"
			aria-disabled="true"
			aria-current="page"
			className={cn("font-normal text-foreground", className)}
			{...props}
		/>
	)
);
BreadcrumbPage.displayName = "BreadcrumbPage";

// ==============================
// Visual Components
// ==============================

/**
 * `BreadcrumbSeparator` is a visual separator between breadcrumb items.
 * - Defaults to a right-chevron icon but can accept custom content via `children`.
 */
const BreadcrumbSeparator = ({
	children,
	className,
	...props
}: BreadcrumbSeparatorProps) => (
	<li
		role="presentation"
		aria-hidden="true"
		className={cn("[&>svg]:size-3.5", className)}
		{...props}>
		{children ?? <ChevronRight />}
	</li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

/**
 * `BreadcrumbEllipsis` represents an ellipsis for truncated breadcrumb items.
 * - Includes a visually hidden label for accessibility.
 */
const BreadcrumbEllipsis = ({
	className,
	...props
}: BreadcrumbEllipsisProps) => (
	<span
		role="presentation"
		aria-hidden="true"
		className={cn("flex h-9 w-9 items-center justify-center", className)}
		{...props}>
		<MoreHorizontal className="h-4 w-4" />
		<span className="sr-only">More</span>
	</span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

// ==============================
// Exports
// ==============================

/**
 * Exports:
 * - `Breadcrumb`: Main container for breadcrumb navigation.
 * - `BreadcrumbList`: Container for breadcrumb items.
 * - `BreadcrumbItem`: Represents a single breadcrumb item.
 * - `BreadcrumbLink`: Clickable link within the breadcrumb.
 * - `BreadcrumbPage`: Represents the current page in the breadcrumb.
 * - `BreadcrumbSeparator`: Visual separator between breadcrumb items.
 * - `BreadcrumbEllipsis`: Ellipsis for truncated breadcrumb items.
 */
export {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
};
