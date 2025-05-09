import * as React from "react"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type InputRef = HTMLInputElement

// ==============================
// Interfaces
// ==============================

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

// ==============================
// Input Component
// ==============================

/**
 * A styled input component that extends the native HTML input element
 * with consistent styling and accessibility features.
 */
const Input = React.forwardRef<InputRef, InputProps>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        [
          "flex h-10 w-full rounded-md border border-input bg-background",
          "px-3 py-2 text-base ring-offset-background",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "md:text-sm",
        ].join(" "),
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

// ==============================
// Exports
// ==============================

export { Input }
