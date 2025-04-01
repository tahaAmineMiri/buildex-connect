import { useState } from "react";
import { motion } from "framer-motion";
import BuyerCard from "@/components/sections/roleSelection/BuyerCard";
import SellerCard from "@/components/sections/roleSelection/SellerCard";

const RoleSelection = () => {
	const [hoveredRole, setHoveredRole] = useState<"buyer" | "seller" | null>(
		null
	);

	const roleCardVariants = {
		initial: {
			y: 20,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: [0.16, 1, 0.3, 1],
			},
		},
		hover: {
			y: -10,
			boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	const iconVariants = {
		initial: { scale: 1 },
		hover: {
			scale: 1.1,
			transition: {
				duration: 0.3,
				repeat: Infinity,
				repeatType: "reverse" as const,
			},
		},
	};

	return (
		<section className="py-24 bg-gradient-to-b from-white to-construction-gray/20">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<div className="inline-block px-4 py-1 mb-3 rounded-full text-sm font-medium bg-construction-orange/10 text-construction-orange">
						Get Started
					</div>
					<h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-construction-black">
						Choose Your Role
					</h2>
					<p className="text-construction-slate max-w-2xl mx-auto">
						Whether you're looking to buy construction materials or sell your
						products, Incom provides you with the tools you need to succeed.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{/* Buyer Card */}
					<BuyerCard
						roleCardVariants={roleCardVariants}
						iconVariants={iconVariants}
						hoveredRole={hoveredRole}
						setHoveredRole={setHoveredRole}
					/>

					{/* Seller Card */}
					<SellerCard
						roleCardVariants={roleCardVariants}
						iconVariants={iconVariants}
						hoveredRole={hoveredRole}
						setHoveredRole={setHoveredRole}
					/>
				</div>
			</div>
		</section>
	);
};

export default RoleSelection;
