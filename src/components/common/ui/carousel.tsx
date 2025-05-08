// ==============================
// Imports
// ==============================

/**
 * React and embla-carousel-react are used to create a customizable carousel component.
 * - `useEmblaCarousel`: Hook for initializing the carousel.
 * - `ArrowLeft` and `ArrowRight`: Icons for navigation buttons.
 * - `cn`: Utility function for conditional class names.
 * - `Button`: Reusable button component for navigation controls.
 */
import * as React from "react";
import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/common/ui/button";

// ==============================
// Type Definitions
// ==============================

/**
 * `CarouselApi`: Type for the carousel API returned by `useEmblaCarousel`.
 * `UseCarouselParameters`: Parameters for the `useEmblaCarousel` hook.
 * `CarouselOptions`: Options for configuring the carousel.
 * `CarouselPlugin`: Plugins for extending carousel functionality.
 * `CarouselRef`: Reference to the carousel container.
 * `CarouselContextApi`: API for interacting with the carousel.
 */
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselRef = ReturnType<typeof useEmblaCarousel>[0];
type CarouselContextApi = ReturnType<typeof useEmblaCarousel>[1];

/**
 * Props for the main `Carousel` component.
 * - `opts`: Carousel configuration options.
 * - `plugins`: Plugins for extending carousel functionality.
 * - `orientation`: Orientation of the carousel (horizontal or vertical).
 * - `setApi`: Callback to expose the carousel API to the parent component.
 */
interface CarouselProps {
	opts?: CarouselOptions;
	plugins?: CarouselPlugin;
	orientation?: "horizontal" | "vertical";
	setApi?: (api: CarouselApi) => void;
}

/**
 * Context props shared across carousel components.
 * - Includes the carousel reference, API, navigation methods, and scroll state.
 */
interface CarouselContextProps extends CarouselProps {
	carouselRef: CarouselRef;
	api: CarouselContextApi;
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
}

/**
 * Props for `CarouselContent` component.
 */
interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Props for `CarouselItem` component.
 */
interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Props for `CarouselPrevious` and `CarouselNext` components.
 */
interface CarouselPreviousProps extends React.ComponentProps<typeof Button> {}

/**
 * `CarouselNextProps`: Props for the `CarouselNext` component.
 */
interface CarouselNextProps extends React.ComponentProps<typeof Button> {}

// ==============================
// Context Setup
// ==============================

/**
 * `CarouselContext`: React context for sharing carousel state and methods.
 * - Provides access to the carousel reference, API, and navigation methods.
 */
const CarouselContext = React.createContext<CarouselContextProps | null>(null);

/**
 * `useCarousel`: Hook for accessing the `CarouselContext`.
 * - Throws an error if used outside of a `Carousel` component.
 */
const useCarousel = () => {
	const context = React.useContext(CarouselContext);

	if (!context) {
		throw new Error("useCarousel must be used within a <Carousel />");
	}

	return context;
};

// ==============================
// Main Carousel Component
// ==============================

/**
 * `Carousel`: Main container component for the carousel.
 * - Initializes the carousel using `useEmblaCarousel`.
 * - Provides context to child components.
 * - Handles navigation, keyboard events, and API exposure.
 */
const Carousel = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
	(
		{
			orientation = "horizontal",
			opts,
			setApi,
			plugins,
			className,
			children,
			...props
		},
		ref
	) => {
		// Initialize embla carousel
		const [carouselRef, api] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === "horizontal" ? "x" : "y",
			},
			plugins
		);

		// Track scroll state
		const [canScrollPrev, setCanScrollPrev] = React.useState(false);
		const [canScrollNext, setCanScrollNext] = React.useState(false);

		/**
		 * `onSelect`: Updates the scroll state when the carousel selection changes.
		 */
		const onSelect = React.useCallback((api: CarouselApi) => {
			if (!api) {
				return;
			}

			setCanScrollPrev(api.canScrollPrev());
			setCanScrollNext(api.canScrollNext());
		}, []);

		// Navigation methods
		/**
		 * `scrollPrev`: Scrolls to the previous slide.
		 */
		const scrollPrev = React.useCallback(() => {
			api?.scrollPrev();
		}, [api]);

		/**
		 * `scrollNext`: Scrolls to the next slide.
		 */
		const scrollNext = React.useCallback(() => {
			api?.scrollNext();
		}, [api]);

		/**
		 * `handleKeyDown`: Handles keyboard navigation for the carousel.
		 * - ArrowLeft: Scrolls to the previous slide.
		 * - ArrowRight: Scrolls to the next slide.
		 */
		const handleKeyDown = React.useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>) => {
				if (event.key === "ArrowLeft") {
					event.preventDefault();
					scrollPrev();
				} else if (event.key === "ArrowRight") {
					event.preventDefault();
					scrollNext();
				}
			},
			[scrollPrev, scrollNext]
		);

		// Expose API to parent if requested
		React.useEffect(() => {
			if (!api || !setApi) {
				return;
			}
			setApi(api);
		}, [api, setApi]);

		// Set up event listeners
		React.useEffect(() => {
			if (!api) {
				return;
			}

			onSelect(api);
			api.on("reInit", onSelect);
			api.on("select", onSelect);

			return () => {
				api?.off("select", onSelect);
			};
		}, [api, onSelect]);

		// Render the carousel container and provide context
		return (
			<CarouselContext.Provider
				value={{
					carouselRef,
					api: api,
					opts,
					orientation:
						orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
					scrollPrev,
					scrollNext,
					canScrollPrev,
					canScrollNext,
				}}>
				<div
					ref={ref}
					onKeyDownCapture={handleKeyDown}
					className={cn("relative", className)}
					role="region"
					aria-roledescription="carousel"
					{...props}>
					{children}
				</div>
			</CarouselContext.Provider>
		);
	}
);
Carousel.displayName = "Carousel";

// ==============================
// Carousel Content Components
// ==============================

/**
 * `CarouselContent`: Container for carousel slides.
 * - Provides the scrollable viewport.
 */
const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
	({ className, ...props }, ref) => {
		const { carouselRef, orientation } = useCarousel();

		return (
			<div ref={carouselRef} className="overflow-hidden">
				<div
					ref={ref}
					className={cn(
						"flex",
						orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
						className
					)}
					{...props}
				/>
			</div>
		);
	}
);
CarouselContent.displayName = "CarouselContent";

/**
 * `CarouselItem`: Individual carousel slide/item.
 */
const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
	({ className, ...props }, ref) => {
		const { orientation } = useCarousel();

		return (
			<div
				ref={ref}
				role="group"
				aria-roledescription="slide"
				className={cn(
					"min-w-0 shrink-0 grow-0 basis-full",
					orientation === "horizontal" ? "pl-4" : "pt-4",
					className
				)}
				{...props}
			/>
		);
	}
);
CarouselItem.displayName = "CarouselItem";

// ==============================
// Carousel Navigation Components
// ==============================

/**
 * `CarouselPrevious`: Button for navigating to the previous slide.
 * - Positioned based on the carousel orientation.
 */
const CarouselPrevious = React.forwardRef<
	HTMLButtonElement,
	CarouselPreviousProps
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();

	return (
		<Button
			ref={ref}
			variant={variant}
			size={size}
			className={cn(
				"absolute  h-8 w-8 rounded-full",
				orientation === "horizontal"
					? "-left-12 top-1/2 -translate-y-1/2"
					: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
				className
			)}
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			{...props}>
			<ArrowLeft className="h-4 w-4" />
			<span className="sr-only">Previous slide</span>
		</Button>
	);
});
CarouselPrevious.displayName = "CarouselPrevious";

/**
 * `CarouselNext`: Button for navigating to the next slide.
 * - Positioned based on the carousel orientation.
 */
const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
	({ className, variant = "outline", size = "icon", ...props }, ref) => {
		const { orientation, scrollNext, canScrollNext } = useCarousel();

		return (
			<Button
				ref={ref}
				variant={variant}
				size={size}
				className={cn(
					"absolute h-8 w-8 rounded-full",
					orientation === "horizontal"
						? "-right-12 top-1/2 -translate-y-1/2"
						: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
					className
				)}
				disabled={!canScrollNext}
				onClick={scrollNext}
				{...props}>
				<ArrowRight className="h-4 w-4" />
				<span className="sr-only">Next slide</span>
			</Button>
		);
	}
);
CarouselNext.displayName = "CarouselNext";

// ==============================
// Exports
// ==============================

/**
 * Exports:
 * - `Carousel`: Main carousel container.
 * - `CarouselContent`: Container for carousel slides.
 * - `CarouselItem`: Individual carousel slide.
 * - `CarouselPrevious`: Button for navigating to the previous slide.
 * - `CarouselNext`: Button for navigating to the next slide.
 */
export {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
};
