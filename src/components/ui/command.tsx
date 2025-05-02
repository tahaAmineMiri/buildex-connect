/**
 * Command Component
 * 
 * A command palette/menu component for quickly accessing actions and navigation.
 * Built on top of the cmdk library with custom styling.
 * 
 * @component
 * @example
 * <Command>
 *   <CommandInput placeholder="Type a command..." />
 *   <CommandList>
 *     <CommandEmpty>No results found.</CommandEmpty>
 *     <CommandGroup heading="Suggestions">
 *       <CommandItem>Calendar</CommandItem>
 *       <CommandItem>Search Emoji</CommandItem>
 *     </CommandGroup>
 *     <CommandSeparator />
 *     <CommandGroup heading="Settings">
 *       <CommandItem>Profile</CommandItem>
 *       <CommandItem>Settings</CommandItem>
 *     </CommandGroup>
 *   </CommandList>
 * </Command>
 */

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// ==============================
// Main Command Component
// ==============================
/**
 * Main container for the command component
 */
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

// ==============================
// Command Dialog Variant
// ==============================
interface CommandDialogProps extends DialogProps {}

/**
 * Command component wrapped in a dialog for modal presentation.
 *
 * @example
 * <CommandDialog open={open} onOpenChange={setOpen}>
 *   <CommandInput placeholder="Search..." />
 *   // Add additional command content here, such as CommandList or CommandGroup
 * </CommandDialog>
 */

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

// ==============================
// Command Input
// ==============================
/**
 * Search input for filtering command items
 * 
 * @example
 * <CommandInput 
 *   placeholder="Search commands..." 
 *   value={search}
 *   onValueChange={setSearch}
 * />
 */
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))
CommandInput.displayName = CommandPrimitive.Input.displayName

// ==============================
// Command List
// ==============================
/**
 * Scrollable container for command items
 * 
 * @example
 * <CommandList>
 *   <CommandGroup heading="Files">
 *     <CommandItem>Open file</CommandItem>
 *     <CommandItem>Save file</CommandItem>
 *   </CommandGroup>
 * </CommandList>
 */
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))
CommandList.displayName = CommandPrimitive.List.displayName

// ==============================
// Command Empty State
// ==============================
/**
 * Displayed when no commands match the current filter
 * 
 * @example
 * <CommandEmpty>
 *   No results found for "{query}"
 * </CommandEmpty>
 */
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

// ==============================
// Command Group
// ==============================
/**
 * Groups related command items under a heading
 * 
 * @example
 * <CommandGroup heading="Navigation">
 *   <CommandItem>Home</CommandItem>
 *   <CommandItem>Settings</CommandItem>
 * </CommandGroup>
 */
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))
CommandGroup.displayName = CommandPrimitive.Group.displayName

// ==============================
// Command Separator
// ==============================
/**
 * Visual separator between command groups
 */
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

// ==============================
// Command Item
// ==============================
/**
 * Individual selectable command item
 * 
 * @example
 * <CommandItem onSelect={handleSelect} value="open-file">
 *   <File className="mr-2 h-4 w-4" />
 *   <span>Open File</span>
 *   <CommandShortcut>⌘O</CommandShortcut>
 * </CommandItem>
 */
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))
CommandItem.displayName = CommandPrimitive.Item.displayName

// ==============================
// Command Shortcut
// ==============================
/**
 * Display keyboard shortcut for a command
 */
const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

// ==============================
// Exports
// ==============================
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}