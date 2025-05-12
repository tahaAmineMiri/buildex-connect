// Import common layout components used across multiple pages
import NavBar from "@/components/common/layout/NavBar";
import Footer from "@/components/common/layout/Footer";

// Import all sections that make up the About page
// Each section is a separate component for better organization
import BankDetailsSection from "@/components/features/about/components/sections/BankDetailsSection";
import BusinessModelSection from "@/components/features/about/components/sections/BusinessModelSection";
import HeroSection from "@/components/features/about/components/sections/HeroSection";
import MissionVisionSection from "@/components/features/about/components/sections/MissionVisionSection";
import ShippingProcessSection from "@/components/features/about/components/sections/ShippingProcessSection";
import ContactInformationSection from "@/components/features/about/components/sections/ContactInformationSection";

// Main About page component
const About = () => {
	return (
		// Main container with full height and white background
		<div className="min-h-screen bg-white">
			{/* Navigation bar at the top of the page */}
			<NavBar />

			{/* Main content area with padding on top and bottom */}
			<div className="pt-24 pb-16">
				{/* Center content and add horizontal padding */}
				<div className="container mx-auto px-6">
					{/* Hero Section - Main banner/intro of the About page */}
					<HeroSection />

					{/* Mission & Vision Section - Company's purpose and goals */}
					<MissionVisionSection />

					{/* Business Model - How the company operates */}
					<BusinessModelSection />

					{/* Shipping Process - How products are delivered */}
					<ShippingProcessSection />

					{/* Bank Details - Payment information */}
					<BankDetailsSection />

					{/* Contact Information - How to reach the company */}
					<ContactInformationSection />
				</div>
			</div>

			{/* Footer appears at the bottom of the page */}
			<Footer />
		</div>
	);
};

// Make this component available for import in other files
export default About;