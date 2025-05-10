import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { type ButtonProps, buttonVariants } from "@/components/common/ui/button"

// ==============================
// Type Aliases
// ==============================

type PaginationContentRef = HTMLUListElement
type PaginationItemRef = HTMLLIElement

// ==============================
// Interfaces
// ==============================

interface PaginationProps extends React.ComponentProps<"nav"> {
  className?: string
}

interface PaginationContentProps extends React.ComponentProps<"ul"> {
  className?: string
}

interface PaginationItemProps extends React.ComponentProps<"li"> {
  className?: string
}

interface PaginationLinkProps extends React.ComponentProps<"a"> {
  className?: string
  isActive?: boolean
  size?: Pick<ButtonProps, "size">["size"]
}

interface PaginationNavigationProps extends React.ComponentProps<typeof PaginationLink> {
  className?: string
}

interface PaginationEllipsisProps extends React.ComponentProps<"span"> {
  className?: string
}

// ==============================
// Pagination Root Component
// ==============================
/**
 * The main navigation container for pagination
 */
const Pagination = ({ className, ...props }: PaginationProps) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

// ==============================
// Pagination Content Component
// ==============================
/**
 * Container for pagination items (unordered list)
 */
const PaginationContent = React.forwardRef<PaginationContentRef, PaginationContentProps>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
)
PaginationContent.displayName = "PaginationContent"

// ==============================
// Pagination Item Component
// ==============================
/**
 * Individual pagination item (list item)
 */
const PaginationItem = React.forwardRef<PaginationItemRef, PaginationItemProps>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

// ==============================
// Pagination Link Component
// ==============================
/**
 * Clickable pagination link styled as a button
 */
const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

// ==============================
// Pagination Previous Component
// ==============================
/**
 * Link to navigate to the previous page
 */
const PaginationPrevious = ({ className, ...props }: PaginationNavigationProps) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

// ==============================
// Pagination Next Component
// ==============================
/**
 * Link to navigate to the next page
 */
const PaginationNext = ({ className, ...props }: PaginationNavigationProps) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

// ==============================
// Pagination Ellipsis Component
// ==============================
/**
 * Visual indicator for skipped page numbers
 */
const PaginationEllipsis = ({ className, ...props }: PaginationEllipsisProps) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

// ==============================
// Exports
// ==============================
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
