import { motion } from "framer-motion";

const MissionVisionSection = () => (
	<motion.section
		className="mb-20"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, margin: "-100px" }}
		variants={{
			hidden: { opacity: 0, y: 20 },
			visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
		}}>
		<div className="grid md:grid-cols-2 gap-12 items-center">
			<div>
				<h2 className="text-3xl font-bold mb-6 text-construction-black">
					Our Mission & Vision
				</h2>
				<p className="text-construction-slate mb-4">
					At Incom, we're on a mission to revolutionize how construction
					materials are sourced and supplied globally. We believe in creating a
					transparent, efficient marketplace that benefits both buyers and
					sellers in the construction industry.
				</p>
				<p className="text-construction-slate mb-4">
					Our vision is to become the world's most trusted platform for
					construction material trading, setting new standards for quality,
					reliability, and service in the industry.
				</p>
				<div className="flex items-center mt-8">
					<div className="h-1 w-20 bg-construction-orange"></div>
					<p className="ml-4 text-construction-slate italic">
						Established 2023
					</p>
				</div>
			</div>
			<div className="rounded-2xl overflow-hidden shadow-lg">
				<img
					src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
					alt="Construction site with workers"
					className="w-full h-96 object-cover"
				/>
			</div>
		</div>
	</motion.section>
);

export default MissionVisionSection;
