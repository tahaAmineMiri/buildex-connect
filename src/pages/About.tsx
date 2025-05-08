import NavBar from "../components/common/layout/NavBar";
import Footer from "../components/common/layout/Footer";

import BankDetailsSection from "../components/features/about/BankDetailsSection";
import BusinessModelSection from "../components/features/about/BusinessModelSection";
import HeroSection from "../components/features/about/HeroSection";
import MissionVisionSection from "@/components/features/about/MissionVisionSection";
import ShippingProcessSection from "@/components/features/about/ShippingProcessSection";
import ContactInformationSection from "@/components/features/about/ContactInformationSection";

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
