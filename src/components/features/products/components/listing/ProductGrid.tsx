// ProductGrid Component
// This component displays products in a responsive grid layout
// It handles infinite scrolling functionality and quick view actions

"use client"; // Indicates this is a client-side component

import { useCallback, useRef } from "react";
import { motion } from "framer-motion"; // For animations
import ProductCard from "./ProductCard";
import type { ProductProps } from "./ProductCard"; // Import the product type definition

// Props for the grid component
interface ProductGridProps {
	products: ProductProps[];                     // Array of products to display
	infiniteScroll: boolean;                      // Whether to enable infinite scrolling
	isLoading: boolean;                           // Whether products are currently loading
	hasMore: boolean;                             // Whether there are more products to load
	onLoadMore: () => void;                       // Function to call when loading more products
	onQuickView: (product: ProductProps) => void; // Function to call when quick view is clicked
}

const ProductGrid = ({
	products,
	infiniteScroll,
	isLoading,
	hasMore,
	onLoadMore,
	onQuickView,
}: ProductGridProps) => {
	// Reference to the intersection observer for infinite scrolling
	const observer = useRef<IntersectionObserver | null>(null);

	// Set up the intersection observer to detect when user scrolls to the bottom
	// When that happens, load more products
	const lastProductRef = useCallback(
		(node: HTMLDivElement) => {
			// Don't observe if already loading or infinite scroll is disabled
			if (isLoading || !infiniteScroll) return;

			// Disconnect previous observer if it exists
			if (observer.current) observer.current.disconnect();

			// Create new intersection observer
			observer.current = new IntersectionObserver((entries) => {
				// If the last product is visible and more products are available
				if (entries[0].isIntersecting && hasMore) {
					onLoadMore();
				}
			});

			// Start observing the node if it exists
			if (node) observer.current.observe(node);
		},
		[isLoading, hasMore, onLoadMore, infiniteScroll]
	);

	return (
		<motion.div
			className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			{products.map((product, index) => {
				// For the last product in the list, add the ref for infinite scrolling
				if (infiniteScroll && products.length === index + 1) {
					return (
						<div ref={lastProductRef} key={product.id}>
							<ProductCard
								product={product}
								index={index}
								onQuickView={() => onQuickView(product)}
							/>
						</div>
					);
				} else {
					// For all other products, render normally
					return (
						<ProductCard
							key={product.id}
							product={product}
							index={index}
							onQuickView={() => onQuickView(product)}
						/>
					);
				}
			})}
		</motion.div>
	);
};

export default ProductGrid;