import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: [0.04, 0.62, 0.23, 0.98],
			},
		},
	};

	const imageVariants = {
		hidden: { scale: 0.9, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 1.2,
				ease: [0.04, 0.62, 0.23, 0.98],
			},
		},
	};

	return (
		<section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
			{/* Background elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
				<div className="absolute -top-12 -right-12 w-64 h-64 bg-construction-orange/10 rounded-full blur-3xl"></div>
				<div className="absolute top-1/3 -left-24 w-80 h-80 bg-construction-blue/10 rounded-full blur-3xl"></div>
				<div className="absolute -bottom-32 right-1/4 w-72 h-72 bg-construction-blue/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<motion.div
					className="flex flex-col lg:flex-row items-center gap-16"
					initial="hidden"
					animate={isVisible ? "visible" : "hidden"}
					variants={containerVariants}>
					<div className="flex-1">
						<motion.div
							variants={itemVariants}
							className="inline-block mb-3 px-4 py-1 bg-construction-blue/10 text-construction-blue rounded-full text-sm font-medium">
							The B2B Construction Marketplace
						</motion.div>
						<motion.h1
							variants={itemVariants}
							className="text-4xl md:text-6xl font-display font-bold mb-6 text-construction-black leading-tight">
							Connecting{" "}
							<span className="text-construction-blue">
								Construction Businesses
							</span>{" "}
							Worldwide
						</motion.h1>
						<motion.p
							variants={itemVariants}
							className="text-lg text-construction-slate mb-8 max-w-2xl">
							Incom is a professional marketplace where construction companies
							can buy and sell materials with verified business partners.
							Streamline your procurement and expand your market reach.
						</motion.p>
						<motion.div
							variants={itemVariants}
							className="flex flex-wrap gap-4">
							<Button className="rounded-full px-8 py-6 bg-construction-blue hover:bg-construction-blue/90 text-white font-medium">
								Browse Products
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								variant="outline"
								className="rounded-full px-8 py-6 border-construction-blue text-construction-blue hover:bg-construction-blue/10">
								Learn More
							</Button>
						</motion.div>
						<motion.div
							variants={itemVariants}
							className="mt-10 flex items-center gap-6">
							<div className="flex -space-x-4">
								<div className="w-10 h-10 rounded-full bg-construction-blue flex items-center justify-center text-white text-xs font-medium">
									A
								</div>
								<div className="w-10 h-10 rounded-full bg-construction-orange flex items-center justify-center text-white text-xs font-medium">
									B
								</div>
								<div className="w-10 h-10 rounded-full bg-construction-slate flex items-center justify-center text-white text-xs font-medium">
									C
								</div>
								<div className="w-10 h-10 rounded-full bg-construction-gray flex items-center justify-center text-construction-black text-xs font-medium">
									+
								</div>
							</div>
							<p className="text-sm text-construction-slate">
								<span className="font-medium">500+ verified companies</span>{" "}
								trust Incom for their construction needs
							</p>
						</motion.div>
					</div>

					<motion.div
						className="flex-1 relative w-full max-w-lg"
						variants={imageVariants}>
						<div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
							<img
								src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
								alt="Construction Site"
								className="w-full h-auto"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
								<p className="text-white font-medium">
									Premium construction materials delivered to your site
								</p>
							</div>
						</div>

						{/* Floating element */}
						<motion.div
							className="absolute -right-10 -bottom-12 glass p-4 rounded-xl z-20"
							animate={{ y: [0, -10, 0] }}
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
							<div className="flex items-center gap-3">
								<div className="w-12 h-12 rounded-full bg-construction-orange/20 flex items-center justify-center">
									<span className="text-construction-orange text-xl font-bold">
										+
									</span>
								</div>
								<div>
									<p className="text-sm font-medium text-construction-black">
										Monthly Growth
									</p>
									<p className="text-2xl font-bold text-construction-blue">
										34%
									</p>
								</div>
							</div>
						</motion.div>

						{/* Another floating element */}
						<motion.div
							className="absolute -left-10 top-1/4 glass p-4 rounded-xl z-20"
							animate={{ y: [0, 10, 0] }}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 1,
							}}>
							<div className="flex items-center gap-3">
								<div className="w-12 h-12 rounded-full bg-construction-blue/20 flex items-center justify-center">
									<svg
										className="w-6 h-6 text-construction-blue"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm font-medium text-construction-black">
										Fast Delivery
									</p>
									<p className="text-construction-slate text-xs">
										48-hour shipping
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
