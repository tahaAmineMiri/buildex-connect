// ==============================
// Imports
// ==============================
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

// ==============================
// Type Aliases
// ==============================
type DrawerOverlayRef = React.ElementRef<typeof DrawerPrimitive.Overlay>;
type DrawerContentRef = React.ElementRef<typeof DrawerPrimitive.Content>;
type DrawerTitleRef = React.ElementRef<typeof DrawerPrimitive.Title>;
type DrawerDescriptionRef = React.ElementRef<typeof DrawerPrimitive.Description>;

// ==============================
// Interfaces
// ==============================
// Using type instead of interface for DrawerProps to avoid TypeScript error
type DrawerProps = React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Root> & {
  shouldScaleBackground?: boolean;
};

interface DrawerOverlayProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> {
  className?: string;
}

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  className?: string;
  children: React.ReactNode;
}

interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface DrawerTitleProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> {
  className?: string;
}

interface DrawerDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> {
  className?: string;
}

// ==============================
// Root Drawer Component
// ==============================
/**
 * The main Drawer container component
 */
const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: DrawerProps) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = "Drawer";

// ==============================
// Drawer Trigger Component
// ==============================
/**
 * The element that triggers the drawer to open
 */
const DrawerTrigger = DrawerPrimitive.Trigger;

// ==============================
// Drawer Portal Component
// ==============================
/**
 * Portal for rendering drawer content outside the DOM hierarchy
 */
const DrawerPortal = DrawerPrimitive.Portal;

// ==============================
// Drawer Close Component
// ==============================
/**
 * Element that closes the drawer when clicked
 */
const DrawerClose = DrawerPrimitive.Close;

// ==============================
// Drawer Overlay Component
// ==============================
/**
 * Background overlay that appears when drawer is open
 */
const DrawerOverlay = React.forwardRef<DrawerOverlayRef, DrawerOverlayProps>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn("fixed inset-0 z-50 bg-black/80", className)}
      {...props}
    />
  )
);
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

// ==============================
// Drawer Content Component
// ==============================
/**
 * The main content container of the drawer
 */
const DrawerContent = React.forwardRef<DrawerContentRef, DrawerContentProps>(
  ({ className, children, ...props }, ref) => (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          [
            "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col",
            "rounded-t-[10px] border bg-background",
          ].join(" "),
          className
        )}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
);
DrawerContent.displayName = "DrawerContent";

// ==============================
// Drawer Header Component
// ==============================
/**
 * Container for the drawer header content
 */
const DrawerHeader = ({ className, ...props }: DrawerHeaderProps) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

// ==============================
// Drawer Footer Component
// ==============================
/**
 * Container for the drawer footer content
 */
const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

// ==============================
// Drawer Title Component
// ==============================
/**
 * Title element for the drawer
 */
const DrawerTitle = React.forwardRef<DrawerTitleRef, DrawerTitleProps>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
);
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

// ==============================
// Drawer Description Component
// ==============================
/**
 * Description element for the drawer
 */
const DrawerDescription = React.forwardRef<
  DrawerDescriptionRef,
  DrawerDescriptionProps
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

// ==============================
// Exports
// ==============================
export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};