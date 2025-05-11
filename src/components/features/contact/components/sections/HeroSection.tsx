// Import animation library
import { motion } from "framer-motion"; // Used for smooth animations

// Hero section component for the contact page
// This displays the main title and description at the top of the page
const HeroSection = () => (
	<motion.div
		className="mb-16 text-center" // Add margin below and center text
		// Animation settings - starts invisible and slightly below final position
		initial={{ opacity: 0, y: 20 }}
		// Animate to full visibility at the proper position
		animate={{ opacity: 1, y: 0 }}
		// Take half a second to complete the animation
		transition={{ duration: 0.5 }}>
		{/* Main heading */}
		<h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-construction-black">
			Contact Us
		</h1>
		{/* Subtitle paragraph with max width to keep it centered nicely */}
		<p className="text-xl text-construction-slate max-w-3xl mx-auto">
			Have questions about our platform? Get in touch with our team.
		</p>
	</motion.div>
);

export default HeroSection;