// Import common layout components
import NavBar from "../components/common/layout/NavBar";
import Footer from "../components/common/layout/Footer";

// Import specific components for the Contact page
import HeroSection from "../components/features/contact/components/sections/HeroSection";
import ContactCard from "../components/features/contact/components/ui/ContactCard";
import { Mail, Phone, MapPin } from "lucide-react"; // Import icons for contact cards
import { motion } from "framer-motion"; // Import for animations
import ContactForm from "../components/features/contact/components/forms/ContactForm";
import MapSection from "@/components/features/contact/components/sections/MapSection";

// Main Contact page component
const Contact = () => {
	return (
		// Main container with full height and white background
		<div className="min-h-screen bg-white">
			{/* Navigation bar */}
			<NavBar />
			
			{/* Main content area with padding */}
			<div className="pt-24 pb-16">
				<div className="container mx-auto px-6">
					{/* Hero/Banner Section */}
					<HeroSection />

					{/* Contact Cards Section with animation */}
					<motion.div
						className="grid md:grid-cols-3 gap-6 mb-16" // 3-column grid on medium screens
						initial={{ opacity: 0, y: 20 }} // Animation start state
						animate={{ opacity: 1, y: 0 }} // Animation end state
						transition={{ duration: 0.5, delay: 0.2 }}> {/* Animation timing */}
						
						{/* Email Contact Card */}
						<ContactCard
							icon={<Mail className="h-6 w-6 text-construction-blue" />}
							title="Email Us"
							description="For general inquiries and support"
							link="mailto:info@incom-marketplace.com"
							linkText="info@incom-marketplace.com"
						/>
						
						{/* Phone Contact Card */}
						<ContactCard
							icon={<Phone className="h-6 w-6 text-construction-blue" />}
							title="Call Us"
							description="Mon-Fri from 9am to 6pm (EST)"
							link="tel:+15551234567"
							linkText="+1 (555) 123-4567"
						/>
						
						{/* Address Contact Card */}
						<ContactCard
							icon={<MapPin className="h-6 w-6 text-construction-blue" />}
							title="Visit Us"
							description="Our headquarters location"
							link="#"
							linkText="123 Construction Avenue, New York, NY 10001"
						/>
					</motion.div>

					{/* Contact Form and Map Section - 2-column grid on medium screens */}
					<div className="grid md:grid-cols-2 gap-12 min-h-[500px] items-center">
						{/* Contact Form with slide-in animation from left */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}>
							<ContactForm />
						</motion.div>

						{/* Map with slide-in animation from right */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}>
							<MapSection />
						</motion.div>
					</div>
				</div>
			</div>
			
			{/* Footer Section */}
			<Footer />
		</div>
	);
};

// Export the component for use in other files
export default Contact;