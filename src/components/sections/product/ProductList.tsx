import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import ProductCard, { ProductProps } from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Mock data for products
const mockProducts: ProductProps[] = [
	{
		id: 1,
		name: "Premium Cement Mix",
		price: 12.99,
		description:
			"High-quality cement mix suitable for all types of construction projects. Fast-setting and durable.",
		image:
			"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
		category: "Concrete",
		rating: 4.8,
		availability: "In Stock",
	},
	{
		id: 2,
		name: 'Steel I-Beam 6"x4"',
		price: 249.99,
		description:
			"Structural steel I-beam for heavy construction and building frames. High load capacity.",
		image:
			"https://images.unsplash.com/photo-1518709911915-712d5fd04677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80",
		category: "Structural",
		rating: 4.9,
		availability: "In Stock",
	},
	{
		id: 3,
		name: "Insulation Roll 50ft",
		price: 89.5,
		description:
			"Thermal and sound insulation for walls and ceilings. Energy-efficient and easy to install.",
		image:
			"https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
		category: "Insulation",
		rating: 4.5,
		availability: "Low Stock",
	},
	{
		id: 4,
		name: "Hardwood Flooring Oak",
		price: 5.99,
		description:
			"Premium oak hardwood flooring planks. Natural finish and durable construction.",
		image:
			"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
		category: "Flooring",
		rating: 4.7,
		availability: "In Stock",
	},
	{
		id: 5,
		name: "PVC Pipes 10ft",
		price: 18.75,
		description:
			"High-pressure PVC pipes for plumbing and drainage systems. Corrosion-resistant.",
		image:
			"https://images.unsplash.com/photo-1518709911915-712d5fd04677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80",
		category: "Plumbing",
		rating: 4.6,
		availability: "In Stock",
	},
	{
		id: 6,
		name: "Safety Helmets (Pack of 5)",
		price: 129.99,
		description:
			"OSHA-approved construction safety helmets. Impact-resistant and comfortable fit.",
		image:
			"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
		category: "Safety",
		rating: 4.9,
		availability: "Out of Stock",
	},
	{
		id: 7,
		name: "Electrical Wire 14AWG",
		price: 79.5,
		description:
			"UL-certified copper electrical wire for residential and commercial applications.",
		image:
			"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
		category: "Electrical",
		rating: 4.8,
		availability: "In Stock",
	},
	{
		id: 8,
		name: "Exterior Paint 5 Gallon",
		price: 159.99,
		description:
			"Weather-resistant exterior paint. Low VOC and excellent coverage.",
		image:
			"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
		category: "Paint",
		rating: 4.5,
		availability: "Low Stock",
	},
];

// Function to generate more mock products
const generateMoreProducts = (
	startId: number,
	count: number
): ProductProps[] => {
	return Array.from({ length: count }, (_, index) => ({
		id: startId + index,
		name: `Product ${startId + index}`,
		price: Math.floor(Math.random() * 1000) + 10,
		description: `This is a dynamically generated product description for product ${
			startId + index
		}. It's designed to simulate infinite scrolling.`,
		image: `https://images.unsplash.com/photo-${Math.floor(
			Math.random() * 100000
		)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80`,
		category: [
			"Concrete",
			"Structural",
			"Insulation",
			"Flooring",
			"Plumbing",
			"Paint",
			"Electrical",
		][Math.floor(Math.random() * 7)],
		rating: Math.floor(Math.random() * 10) / 2 + 2.5, // Generates a number between 2.5 and 5
		availability: ["In Stock", "Low Stock", "Out of Stock"][
			Math.floor(Math.random() * 3)
		] as "In Stock" | "Low Stock" | "Out of Stock",
	}));
};

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
	const observer = useRef<IntersectionObserver | null>(null);

	// Load initial data
	useEffect(() => {
		// Simulate API loading
		setIsLoading(true);
		const timeoutId = setTimeout(() => {
			setProducts(mockProducts);
			setIsLoading(false);
		}, 500);

		return () => clearTimeout(timeoutId);
	}, []);

	// Function to load more products
	const loadMoreProducts = useCallback(() => {
		if (isLoading) return;

		setIsLoading(true);

		setTimeout(() => {
			const newProducts = generateMoreProducts(products.length + 1, 8);
			setProducts((prev) => [...prev, ...newProducts]);
			setPage((prevPage) => prevPage + 1);

			// Stop infinite loading after 5 pages (just for demo)
			if (page >= 5) {
				setHasMore(false);
			}

			setIsLoading(false);
		}, 800);
	}, [products.length, page, isLoading]);

	// Setup intersection observer for infinite scrolling
	const lastProductRef = useCallback(
		(node: HTMLDivElement) => {
			if (isLoading || !infiniteScroll) return;

			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					loadMoreProducts();
				}
			});

			if (node) observer.current.observe(node);
		},
		[isLoading, hasMore, loadMoreProducts, infiniteScroll]
	);

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

				<div className="flex flex-col md:flex-row gap-4 mb-8">
					<div className="relative flex-grow">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-construction-slate h-5 w-5" />
						<Input
							type="text"
							placeholder="Search products, materials, or categories..."
							className="pl-10 py-6 rounded-xl border-construction-gray/50 focus:border-construction-blue"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div className="flex gap-2">
						<Button
							variant="outline"
							className="flex-shrink-0 gap-2 rounded-xl border-construction-gray/50">
							<Filter className="h-5 w-5" />
							<span>Filter</span>
						</Button>
						<Button
							variant="outline"
							className="flex-shrink-0 gap-2 rounded-xl border-construction-gray/50">
							<ArrowUpDown className="h-5 w-5" />
							<span>Sort</span>
						</Button>
					</div>
				</div>

				{products.length === 0 ? (
					<div className="grid place-items-center h-64">
						<div className="text-center">
							<div className="inline-block p-3 rounded-full bg-construction-blue/10 mb-4">
								<svg
									className="w-6 h-6 text-construction-blue animate-spin"
									fill="none"
									viewBox="0 0 24 24">
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
							</div>
							<p className="text-construction-slate font-medium">
								Loading products...
							</p>
						</div>
					</div>
				) : filteredProducts.length === 0 ? (
					<div className="text-center py-12">
						<p className="text-construction-slate">
							No products found matching "{searchTerm}"
						</p>
						<Button
							variant="link"
							className="text-construction-blue mt-2"
							onClick={() => setSearchTerm("")}>
							Clear search
						</Button>
					</div>
				) : (
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}>
						{filteredProducts.map((product, index) => {
							if (infiniteScroll && filteredProducts.length === index + 1) {
								return (
									<div ref={lastProductRef} key={product.id}>
										<ProductCard
											product={product}
											index={index}
											onQuickView={() => handleQuickView(product)}
										/>
									</div>
								);
							} else {
								return (
									<ProductCard
										key={product.id}
										product={product}
										index={index}
										onQuickView={() => handleQuickView(product)}
									/>
								);
							}
						})}
					</motion.div>
				)}

				{infiniteScroll && isLoading && (
					<div className="flex justify-center mt-8">
						<div className="inline-block p-3 rounded-full bg-construction-blue/10">
							<svg
								className="w-6 h-6 text-construction-blue animate-spin"
								fill="none"
								viewBox="0 0 24 24">
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
						</div>
					</div>
				)}

				{infiniteScroll && !hasMore && filteredProducts.length > 0 && (
					<div className="text-center mt-8 text-construction-slate">
						<p>You've reached the end of the catalog</p>
					</div>
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
