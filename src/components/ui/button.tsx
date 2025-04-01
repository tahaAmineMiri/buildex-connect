import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ==============================
// Button Variants Definition
// ==============================
/**
 * Defines the styling variants and sizes for the Button component
 */
const buttonVariants = cva(
  [
    // Base layout
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-md",

    // Typography
    "text-sm font-medium",

    // Interactive states
    "ring-offset-background transition-colors",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",

    // SVG/icon styling
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary button - used for primary actions
        default: [
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90",
        ].join(" "),

        // Destructive button - used for destructive actions like delete
        destructive: [
          "bg-destructive text-destructive-foreground",
          "hover:bg-destructive/90",
        ].join(" "),

        // Outline button - used for secondary actions
        outline: [
          "border border-input bg-background",
          "hover:bg-accent hover:text-accent-foreground",
        ].join(" "),

        // Secondary button - used for secondary actions
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/80",
        ].join(" "),

        // Ghost button - minimal visual presence
        ghost: "hover:bg-accent hover:text-accent-foreground",

        // Link button - appears as a text link
        link: "text-primary underline-offset-4 hover:underline",
      },

      size: {
        // Default size
        default: "h-10 px-4 py-2",

        // Small size
        sm: "h-9 rounded-md px-3",

        // Large size
        lg: "h-11 rounded-md px-8",

        // Icon button (square)
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// ==============================
// Button Props Interface
// ==============================
/**
 * Props for the Button component
 *
 * Extends standard button attributes with:
 * - variant: Visual style variant
 * - size: Size variant
 * - asChild: Whether to render as a child component
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// ==============================
// Button Component
// ==============================
/**
 * Button component with multiple variants and sizes
 *
 * Can be rendered as a custom component using asChild prop.
 * Supports all standard button attributes plus custom variants.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Use Slot if asChild is true, otherwise use a regular button
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// ==============================
// Exports
// ==============================
export { Button, buttonVariants };
