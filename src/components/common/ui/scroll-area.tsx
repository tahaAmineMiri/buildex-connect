import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type ScrollAreaRef = React.ElementRef<typeof ScrollAreaPrimitive.Root>
type ScrollBarRef = React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>

// ==============================
// Interfaces
// ==============================

interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  className?: string
  children: React.ReactNode
}

interface ScrollBarProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {
  className?: string
  orientation?: "vertical" | "horizontal"
}

// ==============================
// Main ScrollArea Component
// ==============================
/**
 * A scrollable area with custom scrollbars
 *
 * Provides a scrollable container with custom-styled scrollbars
 * that integrates well with the design system.
 */
const ScrollArea = React.forwardRef<ScrollAreaRef, ScrollAreaProps>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    {/* The viewport contains the scrollable content */}
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>

    {/* Default scrollbar (vertical) */}
    <ScrollBar />

    {/* Corner element where scrollbars meet */}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

// ==============================
// ScrollBar Component
// ==============================
/**
 * Custom scrollbar component that can be oriented vertically or horizontally
 *
 * @param orientation - "vertical" (default) or "horizontal"
 */
const ScrollBar = React.forwardRef<ScrollBarRef, ScrollBarProps>(
  ({ className, orientation = "vertical", ...props }, ref) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        // Base styles
        "flex touch-none select-none transition-colors",

        // Vertical orientation styles
        orientation === "vertical" && ["h-full w-2.5 border-l border-l-transparent p-[1px]"],

        // Horizontal orientation styles
        orientation === "horizontal" && ["h-2.5 flex-col border-t border-t-transparent p-[1px]"],

        className,
      )}
      {...props}
    >
      {/* The draggable thumb element of the scrollbar */}
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  ),
)
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

// ==============================
// Exports
// ==============================
export { ScrollArea, ScrollBar }
