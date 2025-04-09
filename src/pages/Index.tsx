import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/layout/Hero";
import ProductList from "@/components/sections/product/ProductList";
import RoleSelection from "@/components/forms/RoleSelection";
import Footer from "@/components/layout/Footer";

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

// import PaginationExample from "@/tests/PaginationTest";

// const Index = () => {
// 	return (
// 		<div className="min-h-screen bg-white">
// 			<PaginationExample />
// 		</div>
// 	);
// };

// export default Index;
