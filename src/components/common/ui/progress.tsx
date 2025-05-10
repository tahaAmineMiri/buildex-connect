import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type ProgressRef = React.ElementRef<typeof ProgressPrimitive.Root>

// ==============================
// Interfaces
// ==============================

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  className?: string
  value?: number
}

// ==============================
// Progress Component
// ==============================

/**
 * Visual indicator showing completion progress of a task
 */
const Progress = React.forwardRef<ProgressRef, ProgressProps>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

// ==============================
// Exports
// ==============================

export { Progress }
