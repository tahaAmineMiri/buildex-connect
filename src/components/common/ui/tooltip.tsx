import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type TooltipContentRef = React.ElementRef<typeof TooltipPrimitive.Content>

// ==============================
// Interfaces
// ==============================

interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  className?: string
}

// ==============================
// Provider Component
// ==============================
/**
 * Provider component that must wrap all tooltip instances
 */
const TooltipProvider = TooltipPrimitive.Provider

// ==============================
// Root Tooltip Component
// ==============================
/**
 * The main tooltip container component
 */
const Tooltip = TooltipPrimitive.Root

// ==============================
// Tooltip Trigger Component
// ==============================
/**
 * The element that triggers the tooltip when hovered
 */
const TooltipTrigger = TooltipPrimitive.Trigger

// ==============================
// Tooltip Content Component
// ==============================
/**
 * The content displayed when the tooltip is active
 */
const TooltipContent = React.forwardRef<TooltipContentRef, TooltipContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        [
          "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
          "animate-in fade-in-0 zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        ].join(" "),
        className,
      )}
      {...props}
    />
  ),
)
TooltipContent.displayName = TooltipPrimitive.Content.displayName

// ==============================
// Exports
// ==============================
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
