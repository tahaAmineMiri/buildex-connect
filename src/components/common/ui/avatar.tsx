import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

// ==============================
// Type Aliases
// ==============================
type AvatarRootRef = React.ElementRef<typeof AvatarPrimitive.Root>;
type AvatarImageRef = React.ElementRef<typeof AvatarPrimitive.Image>;
type AvatarFallbackRef = React.ElementRef<typeof AvatarPrimitive.Fallback>;

// ==============================
// Interfaces for Props
// ==============================
interface AvatarRootProps
	extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
	className?: string;
}

interface AvatarImageProps
	extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
	className?: string;
}

interface AvatarFallbackProps
	extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
	className?: string;
}

// ==============================
// Root Avatar Component
// ==============================
/**
 * The main container for the Avatar component
 *
 * Provides the circular container that holds either an image
 * or a fallback element when the image fails to load.
 */
const Avatar = React.forwardRef<AvatarRootRef, AvatarRootProps>(
	({ className, ...props }, ref) => (
		<AvatarPrimitive.Root
			ref={ref}
			className={cn(
				[
					"relative flex",
					"h-10 w-10", // Default size
					"shrink-0", // Prevent shrinking
					"overflow-hidden", // Hide overflow
					"rounded-full", // Circular shape
				].join(" "),
				className
			)}
			{...props}
		/>
	)
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

// ==============================
// Avatar Image Component
// ==============================
/**
 * The image element of the Avatar
 *
 * Displays the user's profile picture or icon.
 * If the image fails to load, the AvatarFallback will be shown.
 */
const AvatarImage = React.forwardRef<AvatarImageRef, AvatarImageProps>(
	({ className, ...props }, ref) => (
		<AvatarPrimitive.Image
			ref={ref}
			className={cn(
				"aspect-square h-full w-full", // Fill the container with a square aspect ratio
				className
			)}
			{...props}
		/>
	)
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// ==============================
// Avatar Fallback Component
// ==============================
/**
 * The fallback element shown when the image fails to load
 *
 * Typically contains initials, an icon, or a placeholder.
 * Automatically displayed when the AvatarImage fails to load.
 */
const AvatarFallback = React.forwardRef<AvatarFallbackRef, AvatarFallbackProps>(
	({ className, ...props }, ref) => (
		<AvatarPrimitive.Fallback
			ref={ref}
			className={cn(
				[
					"flex h-full w-full", // Fill the container
					"items-center justify-center", // Center the content
					"rounded-full", // Maintain circular shape
					"bg-muted", // Background color
				].join(" "),
				className
			)}
			{...props}
		/>
	)
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// ==============================
// Exports
// ==============================
export { Avatar, AvatarImage, AvatarFallback };
