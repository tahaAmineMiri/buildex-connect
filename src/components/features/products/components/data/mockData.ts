import { ProductProps } from "@/components/features/products/components/listing/ProductCard";
export const mockProducts: ProductProps[] = [
	// ...mock data here...
];

export const generateMoreProducts = (
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
		rating: Math.floor(Math.random() * 10) / 2 + 2.5,
		availability: ["In Stock", "Low Stock", "Out of Stock"][
			Math.floor(Math.random() * 3)
		] as "In Stock" | "Low Stock" | "Out of Stock",
	}));
};
