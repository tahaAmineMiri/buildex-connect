/**
 * AspectRatio Component
 * 
 * A wrapper component that maintains a consistent aspect ratio for its content.
 * Built on top of Radix UI's AspectRatio primitive for accessibility and cross-browser consistency.
 * 
 * @component
 * @example
 * // Basic usage with 16:9 ratio
 * <AspectRatio ratio={16 / 9}>
 *   <img src="example.jpg" alt="Example" />
 * </AspectRatio>
 * 
 * @example
 * // Square ratio with custom content
 * <AspectRatio ratio={1}>
 *   <div className="flex items-center justify-center bg-gray-100">
 *     Square content
 *   </div>
 * </AspectRatio>
 * 
 */
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

/**
 * The AspectRatio component that maintains consistent dimensions for its children
 * based on the specified ratio.
 * 
*/

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }