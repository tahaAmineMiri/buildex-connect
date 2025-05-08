import { motion } from "framer-motion";

const HeroSection = () => (
	<motion.div
		className="mb-16 text-center"
		initial="hidden"
		animate="visible"
		variants={{
			hidden: { opacity: 0, y: 20 },
			visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
		}}>
		<h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-construction-black">
			About Incom
		</h1>
		<p className="text-xl text-construction-slate max-w-3xl mx-auto">
			The leading B2B marketplace connecting construction material suppliers
			with contractors worldwide.
		</p>
	</motion.div>
);

export default HeroSection;
