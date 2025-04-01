import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

import BankDetailsSection from "../components/sections/about/BankDetailsSection";
import BusinessModelSection from "../components/sections/about/BusinessModelSection";
import HeroSection from "../components/sections/about/HeroSection";
import MissionVisionSection from "@/components/sections/about/MissionVisionSection";
import ShippingProcessSection from "@/components/sections/about/ShippingProcessSection";
import ContactInformationSection from "@/components/sections/about/ContactInformationSection";

const About = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Navbar Section */}
			<NavBar />

			<div className="pt-24 pb-16">
				<div className="container mx-auto px-6">
					{/* Hero Section */}
					<HeroSection />

					{/* Mission & Vision Section */}
					<MissionVisionSection />

					{/* Business Model */}
					<BusinessModelSection />

					{/* Shipping Process */}
					<ShippingProcessSection />

					{/* Bank information*/}
					<BankDetailsSection />

					{/* Contact Information */}
					<ContactInformationSection />
				</div>
			</div>

			{/* Footer Section */}
			<Footer />
		</div>
	);
};

export default About;
