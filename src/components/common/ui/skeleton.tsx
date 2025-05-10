import type * as React from "react"
import { cn } from "@/lib/utils"

// ==============================
// Interfaces
// ==============================

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

// ==============================
// Skeleton Component
// ==============================

/**
 * A placeholder loading state that mimics the shape of content
 *
 * Used to indicate that content is loading, providing visual feedback
 * to users while data is being fetched or processed.
 */
function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />
}

// ==============================
// Exports
// ==============================

export { Skeleton }
