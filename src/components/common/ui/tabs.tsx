import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type TabsListRef = React.ElementRef<typeof TabsPrimitive.List>
type TabsTriggerRef = React.ElementRef<typeof TabsPrimitive.Trigger>
type TabsContentRef = React.ElementRef<typeof TabsPrimitive.Content>

// ==============================
// Interfaces
// ==============================

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  className?: string
}

interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  className?: string
}

interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  className?: string
}

// ==============================
// Root Tabs Component
// ==============================

/**
 * The root container for the tabs component
 */
const Tabs = TabsPrimitive.Root

// ==============================
// Tabs List Component
// ==============================

/**
 * Container for tab triggers that provides navigation between tab contents
 */
const TabsList = React.forwardRef<TabsListRef, TabsListProps>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      ["inline-flex h-10 items-center justify-center", "rounded-md bg-muted p-1", "text-muted-foreground"].join(" "),
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

// ==============================
// Tabs Trigger Component
// ==============================

/**
 * The clickable tab button that activates its associated content
 */
const TabsTrigger = React.forwardRef<TabsTriggerRef, TabsTriggerProps>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      [
        "inline-flex items-center justify-center whitespace-nowrap",
        "rounded-sm px-3 py-1.5 text-sm font-medium",
        "ring-offset-background transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      ].join(" "),
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

// ==============================
// Tabs Content Component
// ==============================

/**
 * The content area that displays when its associated trigger is active
 */
const TabsContent = React.forwardRef<TabsContentRef, TabsContentProps>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      [
        "mt-2",
        "ring-offset-background",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      ].join(" "),
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// ==============================
// Exports
// ==============================

export { Tabs, TabsList, TabsTrigger, TabsContent }
