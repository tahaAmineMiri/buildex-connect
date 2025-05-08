import NavBar from "@/components/common/layout/NavBar";
import Footer from "@/components/common/layout/Footer";

import BankDetailsSection from "@/components/features/about/components/sections/BankDetailsSection";
import BusinessModelSection from "@/components/features/about/components/sections/BusinessModelSection";
import HeroSection from "@/components/features/about/components/sections/HeroSection";
import MissionVisionSection from "@/components/features/about/components/sections/MissionVisionSection";
import ShippingProcessSection from "@/components/features/about/components/sections/ShippingProcessSection";
import ContactInformationSection from "@/components/features/about/components/sections/ContactInformationSection";

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
