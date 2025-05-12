// Import common layout components
import NavBar from "@/components/common/layout/NavBar";
import Hero from "@/components/common/layout/Hero";
import Footer from "@/components/common/layout/Footer";

// Import page-specific components
import ProductList from "@/components/features/products/components/listing/ProductList";
import RoleSelection from "@/components/features/auth/components/ui/RoleSelection";

// Main Homepage/Index component
const Index = () => {
	return (
		// Main container with full height and white background
		<div className="min-h-screen bg-white">
			{/* Navigation bar at the top */}
			<NavBar />
			
			{/* Hero/Banner section - Main promotional area */}
			<Hero />
			
			{/* Product listing section - Shows featured products */}
			<ProductList />
			
			{/* User Role Selection section - For new user registration (Buyer/Seller) */}
			<RoleSelection />
			
			{/* Footer section at the bottom */}
			<Footer />
		</div>
	);
};

// Export the component for use in other files
export default Index;