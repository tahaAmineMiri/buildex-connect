import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type DropdownMenuSubTriggerRef = React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>
type DropdownMenuSubContentRef = React.ElementRef<typeof DropdownMenuPrimitive.SubContent>
type DropdownMenuContentRef = React.ElementRef<typeof DropdownMenuPrimitive.Content>
type DropdownMenuItemRef = React.ElementRef<typeof DropdownMenuPrimitive.Item>
type DropdownMenuCheckboxItemRef = React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>
type DropdownMenuRadioItemRef = React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>
type DropdownMenuLabelRef = React.ElementRef<typeof DropdownMenuPrimitive.Label>
type DropdownMenuSeparatorRef = React.ElementRef<typeof DropdownMenuPrimitive.Separator>

// ==============================
// Interfaces
// ==============================

interface DropdownMenuSubTriggerProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
  className?: string
  inset?: boolean
  children: React.ReactNode
}

interface DropdownMenuSubContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> {
  className?: string
}

interface DropdownMenuContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
  className?: string
  sideOffset?: number
}

interface DropdownMenuItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  className?: string
  inset?: boolean
}

interface DropdownMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {
  className?: string
  children: React.ReactNode
}

interface DropdownMenuRadioItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> {
  className?: string
  children: React.ReactNode
}

interface DropdownMenuLabelProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> {
  className?: string
  inset?: boolean
}

interface DropdownMenuSeparatorProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {
  className?: string
}

interface DropdownMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string
}

// ==============================
// Root Dropdown Components
// ==============================

/**
 * The root container for the dropdown menu
 */
const DropdownMenu = DropdownMenuPrimitive.Root

/**
 * The button that triggers the dropdown menu
 */
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

/**
 * Groups dropdown menu items together
 */
const DropdownMenuGroup = DropdownMenuPrimitive.Group

/**
 * Creates a portal for the dropdown menu content
 */
const DropdownMenuPortal = DropdownMenuPrimitive.Portal

/**
 * Container for radio items in the dropdown menu
 */
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

// ==============================
// Submenu Components
// ==============================

/**
 * Container for a submenu within the dropdown
 */
const DropdownMenuSub = DropdownMenuPrimitive.Sub

/**
 * Trigger button for opening a submenu
 */
const DropdownMenuSubTrigger = React.forwardRef<DropdownMenuSubTriggerRef, DropdownMenuSubTriggerProps>(
  ({ className, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        [
          "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
          "focus:bg-accent data-[state=open]:bg-accent",
          inset && "pl-8",
        ].join(" "),
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  ),
)
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

/**
 * Content container for a submenu
 */
const DropdownMenuSubContent = React.forwardRef<DropdownMenuSubContentRef, DropdownMenuSubContentProps>(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        [
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
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
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

// ==============================
// Main Content Components
// ==============================

/**
 * The main content container of the dropdown menu
 */
const DropdownMenuContent = React.forwardRef<DropdownMenuContentRef, DropdownMenuContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
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
    </DropdownMenuPrimitive.Portal>
  ),
)
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

// ==============================
// Menu Item Components
// ==============================

/**
 * Standard menu item in the dropdown
 */
const DropdownMenuItem = React.forwardRef<DropdownMenuItemRef, DropdownMenuItemProps>(
  ({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        [
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
          "transition-colors focus:bg-accent focus:text-accent-foreground",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          inset && "pl-8",
        ].join(" "),
        className,
      )}
      {...props}
    />
  ),
)
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

/**
 * Checkbox item for the dropdown menu
 */
const DropdownMenuCheckboxItem = React.forwardRef<DropdownMenuCheckboxItemRef, DropdownMenuCheckboxItemProps>(
  ({ className, children, checked, ...props }, ref) => (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        [
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
          "transition-colors focus:bg-accent focus:text-accent-foreground",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        ].join(" "),
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  ),
)
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

/**
 * Radio item for the dropdown menu
 */
const DropdownMenuRadioItem = React.forwardRef<DropdownMenuRadioItemRef, DropdownMenuRadioItemProps>(
  ({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        [
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
          "transition-colors focus:bg-accent focus:text-accent-foreground",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        ].join(" "),
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  ),
)
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

// ==============================
// Utility Components
// ==============================

/**
 * Label for sections in the dropdown menu
 */
const DropdownMenuLabel = React.forwardRef<DropdownMenuLabelRef, DropdownMenuLabelProps>(
  ({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn(["px-2 py-1.5 text-sm font-semibold", inset && "pl-8"].join(" "), className)}
      {...props}
    />
  ),
)
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

/**
 * Separator line for the dropdown menu
 */
const DropdownMenuSeparator = React.forwardRef<DropdownMenuSeparatorRef, DropdownMenuSeparatorProps>(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
  ),
)
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

/**
 * Displays keyboard shortcuts in the dropdown menu
 */
const DropdownMenuShortcut = ({ className, ...props }: DropdownMenuShortcutProps) => {
  return <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

// ==============================
// Exports
// ==============================

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
