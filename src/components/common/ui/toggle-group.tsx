"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import type { VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components//common/ui/toggle"

// ==============================
// Type Aliases
// ==============================

type ToggleGroupRef = React.ElementRef<typeof ToggleGroupPrimitive.Root>
type ToggleGroupItemRef = React.ElementRef<typeof ToggleGroupPrimitive.Item>

// ==============================
// Types
// ==============================

/**
 * Props for the ToggleGroup component
 */
type ToggleGroupProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    className?: string
  }

/**
 * Props for the ToggleGroupItem component
 */
type ToggleGroupItemProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants> & {
    className?: string
  }

// ==============================
// Context
// ==============================

/**
 * Context for sharing toggle variants between the group and its items
 */
const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
})

// ==============================
// Toggle Group Component
// ==============================

/**
 * A set of two-state buttons that can be toggled on or off
 *
 * ToggleGroup allows users to select one or multiple options from a group
 * of mutually exclusive or inclusive options.
 */
const ToggleGroup = React.forwardRef<ToggleGroupRef, ToggleGroupProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>
      <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  ),
)
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

// ==============================
// Toggle Group Item Component
// ==============================

/**
 * An individual toggle item within a toggle group
 *
 * Inherits variant and size from the parent ToggleGroup unless overridden.
 */
const ToggleGroupItem = React.forwardRef<ToggleGroupItemRef, ToggleGroupItemProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext)

    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={cn(
          toggleVariants({
            variant: context.variant || variant,
            size: context.size || size,
          }),
          className,
        )}
        {...props}
      >
        {children}
      </ToggleGroupPrimitive.Item>
    )
  },
)
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

// ==============================
// Exports
// ==============================

export { ToggleGroup, ToggleGroupItem }
