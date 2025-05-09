import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type ContextMenuSubTriggerRef = React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>
type ContextMenuSubContentRef = React.ElementRef<typeof ContextMenuPrimitive.SubContent>
type ContextMenuContentRef = React.ElementRef<typeof ContextMenuPrimitive.Content>
type ContextMenuItemRef = React.ElementRef<typeof ContextMenuPrimitive.Item>
type ContextMenuCheckboxItemRef = React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>
type ContextMenuRadioItemRef = React.ElementRef<typeof ContextMenuPrimitive.RadioItem>
type ContextMenuLabelRef = React.ElementRef<typeof ContextMenuPrimitive.Label>
type ContextMenuSeparatorRef = React.ElementRef<typeof ContextMenuPrimitive.Separator>

// ==============================
// Interfaces
// ==============================

interface ContextMenuSubTriggerProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> {
  className?: string
  inset?: boolean
  children: React.ReactNode
}

interface ContextMenuSubContentProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> {
  className?: string
}

interface ContextMenuContentProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> {
  className?: string
}

interface ContextMenuItemProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> {
  className?: string
  inset?: boolean
}

interface ContextMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> {
  className?: string
  children: React.ReactNode
  checked?: boolean
}

interface ContextMenuRadioItemProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> {
  className?: string
  children: React.ReactNode
}

interface ContextMenuLabelProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> {
  className?: string
  inset?: boolean
}

interface ContextMenuSeparatorProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> {
  className?: string
}

interface ContextMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string
}

// ==============================
// Root Context Menu Components
// ==============================

/**
 * The root container for the context menu
 */
const ContextMenu = ContextMenuPrimitive.Root

/**
 * The element that triggers the context menu on right-click
 */
const ContextMenuTrigger = ContextMenuPrimitive.Trigger

/**
 * Groups context menu items together
 */
const ContextMenuGroup = ContextMenuPrimitive.Group

/**
 * Creates a portal for the context menu content
 */
const ContextMenuPortal = ContextMenuPrimitive.Portal

/**
 * Container for radio items in the context menu
 */
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

// ==============================
// Submenu Components
// ==============================

/**
 * Container for a submenu within the context menu
 */
const ContextMenuSub = ContextMenuPrimitive.Sub

/**
 * Trigger button for opening a submenu
 */
const ContextMenuSubTrigger = React.forwardRef<ContextMenuSubTriggerRef, ContextMenuSubTriggerProps>(
  ({ className, inset, children, ...props }, ref) => (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        [
          "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
          "focus:bg-accent focus:text-accent-foreground",
          "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
          inset && "pl-8",
        ].join(" "),
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </ContextMenuPrimitive.SubTrigger>
  ),
)
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

/**
 * Content container for a submenu
 */
const ContextMenuSubContent = React.forwardRef<ContextMenuSubContentRef, ContextMenuSubContentProps>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        [
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        ].join(" "),
        className,
      )}
      {...props}
    />
  ),
)
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

// ==============================
// Main Content Components
// ==============================

/**
 * The main content container of the context menu
 */
const ContextMenuContent = React.forwardRef<ContextMenuContentRef, ContextMenuContentProps>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        ref={ref}
        className={cn(
          [
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            "animate-in fade-in-80",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          ].join(" "),
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  ),
)
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

// ==============================
// Menu Item Components
// ==============================

/**
 * Standard menu item in the context menu
 */
const ContextMenuItem = React.forwardRef<ContextMenuItemRef, ContextMenuItemProps>(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={cn(
        [
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
          "focus:bg-accent focus:text-accent-foreground",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          inset && "pl-8",
        ].join(" "),
        className,
      )}
      {...props}
    />
  ),
)
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

/**
 * Checkbox item for the context menu
 */
const ContextMenuCheckboxItem = React.forwardRef<ContextMenuCheckboxItemRef, ContextMenuCheckboxItemProps>(
  ({ className, children, checked, ...props }, ref) => (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        [
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
          "focus:bg-accent focus:text-accent-foreground",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        ].join(" "),
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  ),
)
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName

/**
 * Radio item for the context menu
 */
const ContextMenuRadioItem = React.forwardRef<ContextMenuRadioItemRef, ContextMenuRadioItemProps>(
  ({ className, children, ...props }, ref) => (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        [
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
          "focus:bg-accent focus:text-accent-foreground",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        ].join(" "),
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  ),
)
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

// ==============================
// Utility Components
// ==============================

/**
 * Label for sections in the context menu
 */
const ContextMenuLabel = React.forwardRef<ContextMenuLabelRef, ContextMenuLabelProps>(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={cn(["px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8"].join(" "), className)}
      {...props}
    />
  ),
)
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

/**
 * Separator line for the context menu
 */
const ContextMenuSeparator = React.forwardRef<ContextMenuSeparatorRef, ContextMenuSeparatorProps>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
  ),
)
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

/**
 * Displays keyboard shortcuts in the context menu
 */
const ContextMenuShortcut = ({ className, ...props }: ContextMenuShortcutProps) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

// ==============================
// Exports
// ==============================

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
