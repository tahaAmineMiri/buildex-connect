import * as React from "react"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type TableRef = HTMLTableElement
type TableHeaderRef = HTMLTableSectionElement
type TableBodyRef = HTMLTableSectionElement
type TableFooterRef = HTMLTableSectionElement
type TableRowRef = HTMLTableRowElement
type TableHeadRef = HTMLTableCellElement
type TableCellRef = HTMLTableCellElement
type TableCaptionRef = HTMLTableCaptionElement

// ==============================
// Interfaces
// ==============================

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  className?: string
}

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string
}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string
}

interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string
}

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  className?: string
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  className?: string
}

interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
  className?: string
}

// ==============================
// Table Component
// ==============================

/**
 * Main table container component
 */
const Table = React.forwardRef<TableRef, TableProps>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
  </div>
))
Table.displayName = "Table"

// ==============================
// Table Header Component
// ==============================

/**
 * Table header section (thead)
 */
const TableHeader = React.forwardRef<TableHeaderRef, TableHeaderProps>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

// ==============================
// Table Body Component
// ==============================

/**
 * Table body section (tbody)
 */
const TableBody = React.forwardRef<TableBodyRef, TableBodyProps>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
))
TableBody.displayName = "TableBody"

// ==============================
// Table Footer Component
// ==============================

/**
 * Table footer section (tfoot)
 */
const TableFooter = React.forwardRef<TableFooterRef, TableFooterProps>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
))
TableFooter.displayName = "TableFooter"

// ==============================
// Table Row Component
// ==============================

/**
 * Table row (tr)
 */
const TableRow = React.forwardRef<TableRowRef, TableRowProps>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}
    {...props}
  />
))
TableRow.displayName = "TableRow"

// ==============================
// Table Head Component
// ==============================

/**
 * Table header cell (th)
 */
const TableHead = React.forwardRef<TableHeadRef, TableHeadProps>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

// ==============================
// Table Cell Component
// ==============================

/**
 * Table data cell (td)
 */
const TableCell = React.forwardRef<TableCellRef, TableCellProps>(({ className, ...props }, ref) => (
  <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
))
TableCell.displayName = "TableCell"

// ==============================
// Table Caption Component
// ==============================

/**
 * Table caption (caption)
 */
const TableCaption = React.forwardRef<TableCaptionRef, TableCaptionProps>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
))
TableCaption.displayName = "TableCaption"

// ==============================
// Exports
// ==============================

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
