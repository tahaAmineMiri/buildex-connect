import { motion } from "framer-motion";

const HeroSection = () => (
	<motion.div
		className="mb-16 text-center"
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}>
		<h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-construction-black">
			Contact Us
		</h1>
		<p className="text-xl text-construction-slate max-w-3xl mx-auto">
			Have questions about our platform? Get in touch with our team.
		</p>
	</motion.div>
);

export default HeroSection;
