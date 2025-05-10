"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import type * as React from "react"

// ==============================
// Type Aliases
// ==============================

/**
 * Props for the Toaster component, extending Sonner's props
 */
type ToasterProps = React.ComponentProps<typeof Sonner>

// ==============================
// Toaster Component
// ==============================

/**
 * A wrapper around the Sonner toast library
 *
 * Provides a toast notification system that integrates with the application's theme
 * and styling. Uses the next-themes library to match the current theme setting.
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

// ==============================
// Exports
// ==============================

export { Toaster }
