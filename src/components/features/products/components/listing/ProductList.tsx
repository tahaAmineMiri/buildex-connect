// ProductList Component
// This is the main component for displaying products on the product listing page
// It manages product loading, searching, and displaying the product grid
// It also handles infinite scrolling and product detail modal functionality

import { useState, useEffect, useCallback } from "react";
import { fetchInitialProducts, fetchMoreProducts } from "@/components/features/products/components/data/product-data";
import type { ProductProps } from "@/components/features/products/components/listing/ProductCard";
import ProductDetailModal from "@/components/features/products/components/details/ProductDetailModal";
import ProductSearch from "@/components/features/products/components/listing/ProductSearch";
import ProductGrid from "@/components/features/products/components/listing/ProductGrid";
import ProductLoadingState from "@/components/features/products/components/ui/ProductLoadingState";
import ProductPaginationLoader from "@/components/features/products/components/ui/ProductPaginationLoader";
import ProductEmptyState from "@/components/features/products/components/ui/ProductEmptyState";
import ProductEndMessage from "@/components/features/products/components/ui/ProductEndMessage";

interface ProductListProps {
	infiniteScroll?: boolean; // Whether to use infinite scrolling or pagination
}

const ProductList = ({ infiniteScroll = false }: ProductListProps) => {
	// State for product data and UI
	const [products, setProducts] = useState<ProductProps[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
		null
	);

	// Load initial products when component mounts
	useEffect(() => {
		const loadInitialProducts = async () => {
			setIsLoading(true);
			try {
				const initialProducts = await fetchInitialProducts();
				setProducts(initialProducts);
			} catch (error) {
				console.error("Error loading products:", error);
			} finally {
				setIsLoading(false);
			}
		};

		loadInitialProducts();
	}, []);

	// Function to load more products for infinite scrolling
	const loadMoreProducts = useCallback(async () => {
		if (isLoading) return;

		setIsLoading(true);
		try {
			// Fetch next batch of products
			const newProducts = await fetchMoreProducts(products.length + 1, 8);
			setProducts((prev) => [...prev, ...newProducts]);
			setPage((prevPage) => prevPage + 1);

			// Stop infinite loading after 5 pages (just for demo purposes)
			if (page >= 5) {
				setHasMore(false);
			}
		} catch (error) {
			console.error("Error loading more products:", error);
		} finally {
			setIsLoading(false);
		}
	}, [products.length, page, isLoading]);

	// Filter products based on search term
	const filteredProducts = products.filter(
		(product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.category.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Handler for opening product quick view modal
	const handleQuickView = (product: ProductProps) => {
		setSelectedProduct(product);
	};

	// Handler for closing product quick view modal
	const closeQuickView = () => {
		setSelectedProduct(null);
	};

	// Handler for search input changes
	const handleSearchChange = (value: string) => {
		setSearchTerm(value);
	};

	// Placeholder for filter functionality
	const handleFilter = () => {
		// Implement filter functionality (not implemented in this version)
		console.log("Filter clicked");
	};

	// Placeholder for sort functionality
	const handleSort = () => {
		// Implement sort functionality (not implemented in this version)
		console.log("Sort clicked");
	};

	// Handler to clear search input
	const clearSearch = () => {
		setSearchTerm("");
	};

	return (
		<section className="py-16 bg-construction-gray/30">
			<div className="container mx-auto px-6">
				{/* Section header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-construction-black">
						Featured Construction Materials
					</h2>
					<p className="text-construction-slate max-w-3xl mx-auto">
						Browse our selection of high-quality construction materials from
						verified suppliers worldwide. Request quotes, compare prices, and
						find exactly what your project needs.
					</p>
				</div>

				{/* Search and filter bar */}
				<ProductSearch
					searchTerm={searchTerm}
					onSearchChange={handleSearchChange}
					onFilter={handleFilter}
					onSort={handleSort}
				/>

				{/* Different states of the product listing */}
				{/* 1. Initial loading state */}
				{isLoading && products.length === 0 ? (
					<ProductLoadingState />
				) : filteredProducts.length === 0 ? (
					// 2. No results found state
					<ProductEmptyState
						searchTerm={searchTerm}
						onClearSearch={clearSearch}
					/>
				) : (
					// 3. Normal display state with products
					<>
						<ProductGrid
							products={filteredProducts}
							infiniteScroll={infiniteScroll}
							isLoading={isLoading}
							hasMore={hasMore}
							onLoadMore={loadMoreProducts}
							onQuickView={handleQuickView}
						/>

						{/* Loading indicator when fetching more products */}
						{infiniteScroll && isLoading && <ProductPaginationLoader />}

						{/* End of catalog message when all products are loaded */}
						{infiniteScroll && !hasMore && filteredProducts.length > 0 && (
							<ProductEndMessage />
						)}
					</>
				)}
			</div>

			{/* Product quick view modal */}
			<ProductDetailModal
				product={selectedProduct}
				isOpen={!!selectedProduct}
				onClose={closeQuickView}
			/>
		</section>
	);
};

export default ProductList;