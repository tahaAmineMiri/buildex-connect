import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type PopoverContentRef = React.ElementRef<typeof PopoverPrimitive.Content>

// ==============================
// Interfaces
// ==============================

interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  className?: string
  align?: "start" | "center" | "end"
  sideOffset?: number
}

// ==============================
// Primitive Components
// ==============================

/**
 * Root popover component that manages state
 */
const Popover = PopoverPrimitive.Root

/**
 * Element that triggers the popover
 */
const PopoverTrigger = PopoverPrimitive.Trigger

// ==============================
// Popover Content Component
// ==============================

/**
 * Content displayed when the popover is open
 */
const PopoverContent = React.forwardRef<PopoverContentRef, PopoverContentProps>(
  ({ className, align = "center", sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  ),
)
PopoverContent.displayName = PopoverPrimitive.Content.displayName

// ==============================
// Exports
// ==============================

export { Popover, PopoverTrigger, PopoverContent }
