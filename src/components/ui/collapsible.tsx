import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

// ==============================
// Collapsible Components
// ==============================

/**
 * Root component for a collapsible section
 *
 * Controls the open/closed state of the collapsible content.
 * Can be controlled or uncontrolled.
 *
 * @example
 * <Collapsible>
 *   <CollapsibleTrigger>Toggle</CollapsibleTrigger>
 *   <CollapsibleContent>Content to show/hide</CollapsibleContent>
 * </Collapsible>
 */
const Collapsible = CollapsiblePrimitive.Root;

/**
 * Trigger button for the collapsible
 *
 * When clicked, toggles the expanded state of the collapsible content.
 * Should be used inside a Collapsible component.
 */
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

/**
 * Content that can be expanded/collapsed
 *
 * This content will be shown or hidden based on the state of the Collapsible.
 * Should be used inside a Collapsible component.
 */
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

// ==============================
// Exports
// ==============================
export { Collapsible, CollapsibleTrigger, CollapsibleContent };
