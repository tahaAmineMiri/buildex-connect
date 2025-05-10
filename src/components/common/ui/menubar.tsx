import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type MenubarRef = React.ElementRef<typeof MenubarPrimitive.Root>
type MenubarTriggerRef = React.ElementRef<typeof MenubarPrimitive.Trigger>
type MenubarSubTriggerRef = React.ElementRef<typeof MenubarPrimitive.SubTrigger>
type MenubarSubContentRef = React.ElementRef<typeof MenubarPrimitive.SubContent>
type MenubarContentRef = React.ElementRef<typeof MenubarPrimitive.Content>
type MenubarItemRef = React.ElementRef<typeof MenubarPrimitive.Item>
type MenubarCheckboxItemRef = React.ElementRef<typeof MenubarPrimitive.CheckboxItem>
type MenubarRadioItemRef = React.ElementRef<typeof MenubarPrimitive.RadioItem>
type MenubarLabelRef = React.ElementRef<typeof MenubarPrimitive.Label>
type MenubarSeparatorRef = React.ElementRef<typeof MenubarPrimitive.Separator>

// ==============================
// Interfaces
// ==============================

interface MenubarProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> {
  className?: string
}

interface MenubarTriggerProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> {
  className?: string
}

interface MenubarSubTriggerProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> {
  className?: string
  inset?: boolean
  children: React.ReactNode
}

interface MenubarSubContentProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> {
  className?: string
}

interface MenubarContentProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> {
  className?: string
  align?: "start" | "center" | "end"
  alignOffset?: number
  sideOffset?: number
}

interface MenubarItemProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> {
  className?: string
  inset?: boolean
}

interface MenubarCheckboxItemProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> {
  className?: string
  children: React.ReactNode
  checked?: boolean
}

interface MenubarRadioItemProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> {
  className?: string
  children: React.ReactNode
}

interface MenubarLabelProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> {
  className?: string
  inset?: boolean
}

interface MenubarSeparatorProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> {
  className?: string
}

interface MenubarShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string
}

// ==============================
// Primitive Components
// ==============================

/**
 * Grouping component for menu items
 */
const MenubarMenu = MenubarPrimitive.Menu

/**
 * Groups related menu items
 */
const MenubarGroup = MenubarPrimitive.Group

/**
 * Creates a portal for the menu content
 */
const MenubarPortal = MenubarPrimitive.Portal

/**
 * Creates a submenu
 */
const MenubarSub = MenubarPrimitive.Sub

/**
 * Groups radio items
 */
const MenubarRadioGroup = MenubarPrimitive.RadioGroup

// ==============================
// Root Menubar Component
// ==============================

/**
 * The main Menubar container component
 */
const Menubar = React.forwardRef<MenubarRef, MenubarProps>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

// ==============================
// Menubar Trigger Component
// ==============================

/**
 * The clickable trigger that opens a menu
 */
const MenubarTrigger = React.forwardRef<MenubarTriggerRef, MenubarTriggerProps>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className,
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

// ==============================
// Menubar SubTrigger Component
// ==============================

/**
 * Trigger for submenu items
 */
const MenubarSubTrigger = React.forwardRef<MenubarSubTriggerRef, MenubarSubTriggerProps>(
  ({ className, inset, children, ...props }, ref) => (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        inset && "pl-8",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  ),
)
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

// ==============================
// Menubar SubContent Component
// ==============================

/**
 * Content container for submenu items
 */
const MenubarSubContent = React.forwardRef<MenubarSubContentRef, MenubarSubContentProps>(
  ({ className, ...props }, ref) => (
    <MenubarPrimitive.SubContent
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  ),
)
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

// ==============================
// Menubar Content Component
// ==============================

/**
 * Main content container for menu items
 */
const MenubarContent = React.forwardRef<MenubarContentRef, MenubarContentProps>(
  ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  ),
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

// ==============================
// Menubar Item Component
// ==============================

/**
 * Individual menu item
 */
const MenubarItem = React.forwardRef<MenubarItemRef, MenubarItemProps>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

// ==============================
// Menubar Checkbox Item Component
// ==============================

/**
 * Checkbox menu item with toggle functionality
 */
const MenubarCheckboxItem = React.forwardRef<MenubarCheckboxItemRef, MenubarCheckboxItemProps>(
  ({ className, children, checked, ...props }, ref) => (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  ),
)
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

// ==============================
// Menubar Radio Item Component
// ==============================

/**
 * Radio menu item for selecting one option from a group
 */
const MenubarRadioItem = React.forwardRef<MenubarRadioItemRef, MenubarRadioItemProps>(
  ({ className, children, ...props }, ref) => (
    <MenubarPrimitive.RadioItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  ),
)
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

// ==============================
// Menubar Label Component
// ==============================

/**
 * Label for menu sections
 */
const MenubarLabel = React.forwardRef<MenubarLabelRef, MenubarLabelProps>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

// ==============================
// Menubar Separator Component
// ==============================

/**
 * Visual separator between menu items
 */
const MenubarSeparator = React.forwardRef<MenubarSeparatorRef, MenubarSeparatorProps>(
  ({ className, ...props }, ref) => (
    <MenubarPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
  ),
)
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

// ==============================
// Menubar Shortcut Component
// ==============================

/**
 * Displays keyboard shortcuts for menu items
 */
const MenubarShortcut = ({ className, ...props }: MenubarShortcutProps) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />
}
MenubarShortcut.displayName = "MenubarShortcut"

// ==============================
// Exports
// ==============================
export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
