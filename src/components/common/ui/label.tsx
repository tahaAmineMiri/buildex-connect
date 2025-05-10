"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// ==============================
// Variants
// ==============================

/**
 * Label component variants
 * Defines styling for different label states
 */
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")

// ==============================
// Type Aliases & Interfaces
// ==============================

/**
 * Props for the Label component
 * Extends Radix UI Label props with variant props
 */
type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>

// ==============================
// Label Component
// ==============================

/**
 * Label component for form inputs
 * Provides accessible labeling with consistent styling
 */
const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
  ),
)
Label.displayName = LabelPrimitive.Root.displayName

// ==============================
// Exports
// ==============================

export { Label, labelVariants }
