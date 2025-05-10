import type * as React from "react"
import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

// ==============================
// Type Aliases
// ==============================

type ResizablePanelGroupRef = React.ElementRef<typeof ResizablePrimitive.PanelGroup>
type ResizablePanelRef = React.ElementRef<typeof ResizablePrimitive.Panel>
type ResizableHandleRef = React.ElementRef<typeof ResizablePrimitive.PanelResizeHandle>

// ==============================
// Interfaces
// ==============================

interface ResizablePanelGroupProps extends React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelGroup> {
  className?: string
}

interface ResizableHandleProps extends React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelResizeHandle> {
  className?: string
  withHandle?: boolean
}

// ==============================
// Resizable Panel Group Component
// ==============================
/**
 * Container for resizable panels that manages their layout and resizing behavior
 */
const ResizablePanelGroup = ({ className, ...props }: ResizablePanelGroupProps) => (
  <ResizablePrimitive.PanelGroup
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
)
ResizablePanelGroup.displayName = "ResizablePanelGroup"

// ==============================
// Resizable Panel Component
// ==============================
/**
 * Individual panel that can be resized within a panel group
 */
const ResizablePanel = ResizablePrimitive.Panel
ResizablePanel.displayName = "ResizablePanel"

// ==============================
// Resizable Handle Component
// ==============================
/**
 * Handle element that allows users to resize panels
 */
const ResizableHandle = ({ withHandle, className, ...props }: ResizableHandleProps) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      [
        "relative flex w-px items-center justify-center bg-border",
        "after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
        "data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
        "data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1",
        "data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2",
        "data-[panel-group-direction=vertical]:after:translate-x-0",
        "[&[data-panel-group-direction=vertical]>div]:rotate-90",
      ].join(" "),
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)
ResizableHandle.displayName = "ResizableHandle"

// ==============================
// Exports
// ==============================
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
