import NavBar from "@/components/common/layout/NavBar";
import Hero from "@/components/common/layout/Hero";
import ProductList from "@/components/features/products/components/listing/ProductList";
import RoleSelection from "@/components/features/auth/components/ui/RoleSelection";
import Footer from "@/components/common/layout/Footer";

const Index = () => {
	return (
		<div className="min-h-screen bg-white">
			<NavBar />
			<Hero />
			<ProductList />
			<RoleSelection />
			<Footer />
		</div>
	);
};

export default Index;
