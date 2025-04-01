import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/contact/HeroSection";
import ContactCard from "../components/sections/contact/ContactCard";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "../components/sections/contact/ContactForm";
import MapSection from "@/components/sections/contact/MapSection";

const Contact = () => {
	return (
		<div className="min-h-screen bg-white">
			<NavBar />
			<div className="pt-24 pb-16">
				<div className="container mx-auto px-6">
					{/* Hero Section */}
					<HeroSection />

					{/* Contact Cards */}
					<motion.div
						className="grid md:grid-cols-3 gap-6 mb-16"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<ContactCard
							icon={<Mail className="h-6 w-6 text-construction-blue" />}
							title="Email Us"
							description="For general inquiries and support"
							link="mailto:info@incom-marketplace.com"
							linkText="info@incom-marketplace.com"
						/>
						<ContactCard
							icon={<Phone className="h-6 w-6 text-construction-blue" />}
							title="Call Us"
							description="Mon-Fri from 9am to 6pm (EST)"
							link="tel:+15551234567"
							linkText="+1 (555) 123-4567"
						/>
						<ContactCard
							icon={<MapPin className="h-6 w-6 text-construction-blue" />}
							title="Visit Us"
							description="Our headquarters location"
							link="#"
							linkText="123 Construction Avenue, New York, NY 10001"
						/>
					</motion.div>

					{/* Contact Form and Map */}
					<div className="grid md:grid-cols-2 gap-12 min-h-[500px] items-center">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}>
							<ContactForm />
						</motion.div>

						{/* Map */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}>
							<MapSection />
						</motion.div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
