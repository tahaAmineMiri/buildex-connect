"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import type { ProductProps } from "./ProductCard"; // Import from your existing component

interface ProductGridProps {
	products: ProductProps[];
	infiniteScroll: boolean;
	isLoading: boolean;
	hasMore: boolean;
	onLoadMore: () => void;
	onQuickView: (product: ProductProps) => void;
}

const ProductGrid = ({
	products,
	infiniteScroll,
	isLoading,
	hasMore,
	onLoadMore,
	onQuickView,
}: ProductGridProps) => {
	const observer = useRef<IntersectionObserver | null>(null);

	// Setup intersection observer for infinite scrolling
	const lastProductRef = useCallback(
		(node: HTMLDivElement) => {
			if (isLoading || !infiniteScroll) return;

			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					onLoadMore();
				}
			});

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
