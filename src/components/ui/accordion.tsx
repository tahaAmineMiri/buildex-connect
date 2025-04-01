import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

// ==============================
// Type Aliases
// ==============================

type AccordionItemRef = React.ElementRef<typeof AccordionPrimitive.Item>;
type AccordionTriggerRef = React.ElementRef<typeof AccordionPrimitive.Trigger>;
type AccordionContentRef = React.ElementRef<typeof AccordionPrimitive.Content>;

// ==============================
// Interfaces
// ==============================
interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  className?: string;
}

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  className?: string;
  children: React.ReactNode;
}

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  className?: string;
  children: React.ReactNode;
}

// ==============================
// Root Accordion Component
// ==============================
/**
 * The main Accordion container component
 */
const Accordion = AccordionPrimitive.Root;

// ==============================
// Accordion Item Component
// ==============================
/**
 * Individual accordion item that can be expanded/collapsed
 */
const AccordionItem = React.forwardRef<AccordionItemRef, AccordionItemProps>(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn("border-b", className)}
      {...props}
    />
  )
);
AccordionItem.displayName = "AccordionItem";

// ==============================
// Accordion Trigger Component
// ==============================
/**
 * The clickable header that toggles the accordion item
 */
const AccordionTrigger = React.forwardRef<
  AccordionTriggerRef,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        [
          "flex flex-1 items-center justify-between py-4 font-medium",
          "transition-all hover:underline",
          "[&[data-state=open]>svg]:rotate-180", // Rotate chevron when open
        ].join(" "),
        className
      )}
      {...props}>
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

// ==============================
// Accordion Content Component
// ==============================
/**
 * The content area that shows/hides when the trigger is clicked
 */
const AccordionContent = React.forwardRef<
  AccordionContentRef,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      [
        "overflow-hidden text-sm transition-all",
        "data-[state=closed]:animate-accordion-up",
        "data-[state=open]:animate-accordion-down",
      ].join(" ")
    )}
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

// ==============================
// Exports
// ==============================
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
