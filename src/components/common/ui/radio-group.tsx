import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type RadioGroupRef = React.ElementRef<typeof RadioGroupPrimitive.Root>
type RadioGroupItemRef = React.ElementRef<typeof RadioGroupPrimitive.Item>

// ==============================
// Interfaces
// ==============================

interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  className?: string
}

interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  className?: string
}

// ==============================
// Radio Group Component
// ==============================

/**
 * Container for a group of radio buttons
 */
const RadioGroup = React.forwardRef<RadioGroupRef, RadioGroupProps>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

// ==============================
// Radio Group Item Component
// ==============================

/**
 * Individual radio button within a radio group
 */
const RadioGroupItem = React.forwardRef<RadioGroupItemRef, RadioGroupItemProps>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

// ==============================
// Exports
// ==============================

export { RadioGroup, RadioGroupItem }
