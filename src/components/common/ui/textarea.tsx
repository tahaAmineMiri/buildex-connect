import * as React from "react"
import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type TextareaRef = HTMLTextAreaElement

// ==============================
// Interfaces
// ==============================

/**
 * Props for the Textarea component
 * Extends the standard HTML textarea attributes
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

// ==============================
// Textarea Component
// ==============================

/**
 * A textarea component with custom styling
 *
 * Provides a multi-line text input field with consistent styling
 * that integrates with the application's design system.
 */
const Textarea = React.forwardRef<TextareaRef, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        [
          "flex min-h-[80px] w-full rounded-md border border-input bg-background",
          "px-3 py-2 text-sm ring-offset-background",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
        ].join(" "),
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

// ==============================
// Exports
// ==============================

export { Textarea }
