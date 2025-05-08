// Export the ProductProps type from your existing ProductCard component
import type { ProductProps } from "./ProductCard";

// Mock data for products
export const mockProducts: ProductProps[] = [
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
		rating: Math.floor(Math.random() * 10) / 2 + 2.5, // Generates a number between 2.5 and 5
		availability: ["In Stock", "Low Stock", "Out of Stock"][
			Math.floor(Math.random() * 3)
		] as "In Stock" | "Low Stock" | "Out of Stock",
	}));
};

// Simulate fetching initial products
export const fetchInitialProducts = (): Promise<ProductProps[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockProducts);
		}, 500);
	});
};

// Simulate fetching more products
export const fetchMoreProducts = (
	startId: number,
	count: number
): Promise<ProductProps[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(generateMoreProducts(startId, count));
		}, 800);
	});
};
