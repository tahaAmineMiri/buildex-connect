import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type DialogOverlayRef = React.ElementRef<typeof DialogPrimitive.Overlay>
type DialogContentRef = React.ElementRef<typeof DialogPrimitive.Content>
type DialogTitleRef = React.ElementRef<typeof DialogPrimitive.Title>
type DialogDescriptionRef = React.ElementRef<typeof DialogPrimitive.Description>

// ==============================
// Interfaces
// ==============================

interface DialogOverlayProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {
  className?: string
}

interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  className?: string
  children: React.ReactNode
}

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

interface DialogTitleProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {
  className?: string
}

interface DialogDescriptionProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {
  className?: string
}

// ==============================
// Root Dialog Components
// ==============================

/**
 * The main Dialog container component
 */
const Dialog = DialogPrimitive.Root

/**
 * The element that triggers the dialog to open
 */
const DialogTrigger = DialogPrimitive.Trigger

/**
 * Portal for rendering the dialog outside the DOM hierarchy
 */
const DialogPortal = DialogPrimitive.Portal

/**
 * Element to close the dialog
 */
const DialogClose = DialogPrimitive.Close

// ==============================
// Dialog Overlay Component
// ==============================

/**
 * Background overlay that covers the page when dialog is open
 */
const DialogOverlay = React.forwardRef<DialogOverlayRef, DialogOverlayProps>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      [
        "fixed inset-0 z-50 bg-black/80",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      ].join(" "),
      className,
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

// ==============================
// Dialog Content Component
// ==============================

/**
 * The main content container of the dialog
 */
const DialogContent = React.forwardRef<DialogContentRef, DialogContentProps>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          [
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg",
            "translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
            "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
            "sm:rounded-lg",
          ].join(" "),
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  ),
)
DialogContent.displayName = DialogPrimitive.Content.displayName

// ==============================
// Dialog Layout Components
// ==============================

/**
 * Container for dialog header content
 */
const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
)
DialogHeader.displayName = "DialogHeader"

/**
 * Container for dialog footer content
 */
const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)
DialogFooter.displayName = "DialogFooter"

// ==============================
// Dialog Text Components
// ==============================

/**
 * The title of the dialog
 */
const DialogTitle = React.forwardRef<DialogTitleRef, DialogTitleProps>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

/**
 * The description text of the dialog
 */
const DialogDescription = React.forwardRef<DialogDescriptionRef, DialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
)
DialogDescription.displayName = DialogPrimitive.Description.displayName

// ==============================
// Exports
// ==============================

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
