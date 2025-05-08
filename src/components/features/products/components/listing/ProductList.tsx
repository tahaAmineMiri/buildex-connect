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
	infiniteScroll?: boolean;
}

const ProductList = ({ infiniteScroll = false }: ProductListProps) => {
	const [products, setProducts] = useState<ProductProps[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
		null
	);

	// Load initial data
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

	// Function to load more products
	const loadMoreProducts = useCallback(async () => {
		if (isLoading) return;

		setIsLoading(true);
		try {
			const newProducts = await fetchMoreProducts(products.length + 1, 8);
			setProducts((prev) => [...prev, ...newProducts]);
			setPage((prevPage) => prevPage + 1);

			// Stop infinite loading after 5 pages (just for demo)
			if (page >= 5) {
				setHasMore(false);
			}
		} catch (error) {
			console.error("Error loading more products:", error);
		} finally {
			setIsLoading(false);
		}
	}, [products.length, page, isLoading]);

	const filteredProducts = products.filter(
		(product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.category.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleQuickView = (product: ProductProps) => {
		setSelectedProduct(product);
	};

	const closeQuickView = () => {
		setSelectedProduct(null);
	};

	const handleSearchChange = (value: string) => {
		setSearchTerm(value);
	};

	const handleFilter = () => {
		// Implement filter functionality
		console.log("Filter clicked");
	};

	const handleSort = () => {
		// Implement sort functionality
		console.log("Sort clicked");
	};

	const clearSearch = () => {
		setSearchTerm("");
	};

	return (
		<section className="py-16 bg-construction-gray/30">
			<div className="container mx-auto px-6">
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

				<ProductSearch
					searchTerm={searchTerm}
					onSearchChange={handleSearchChange}
					onFilter={handleFilter}
					onSort={handleSort}
				/>

				{/* Initial loading state */}
				{isLoading && products.length === 0 ? (
					<ProductLoadingState />
				) : filteredProducts.length === 0 ? (
					<ProductEmptyState
						searchTerm={searchTerm}
						onClearSearch={clearSearch}
					/>
				) : (
					<>
						<ProductGrid
							products={filteredProducts}
							infiniteScroll={infiniteScroll}
							isLoading={isLoading}
							hasMore={hasMore}
							onLoadMore={loadMoreProducts}
							onQuickView={handleQuickView}
						/>

						{/* Pagination loading indicator */}
						{infiniteScroll && isLoading && <ProductPaginationLoader />}

						{/* End of catalog message */}
						{infiniteScroll && !hasMore && filteredProducts.length > 0 && (
							<ProductEndMessage />
						)}
					</>
				)}
			</div>

			<ProductDetailModal
				product={selectedProduct}
				isOpen={!!selectedProduct}
				onClose={closeQuickView}
			/>
		</section>
	);
};

export default ProductList;
