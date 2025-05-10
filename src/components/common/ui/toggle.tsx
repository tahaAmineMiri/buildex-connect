import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// ==============================
// Styles
// ==============================

/**
 * Style variants for the Toggle component
 */
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

// ==============================
// Type Aliases
// ==============================

type ToggleRef = React.ElementRef<typeof TogglePrimitive.Root>

// ==============================
// Interfaces
// ==============================

interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {
  className?: string
}

// ==============================
// Toggle Component
// ==============================

/**
 * A two-state button that can be either on or off
 */
const Toggle = React.forwardRef<ToggleRef, ToggleProps>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

// ==============================
// Exports
// ==============================

export { Toggle, toggleVariants }
