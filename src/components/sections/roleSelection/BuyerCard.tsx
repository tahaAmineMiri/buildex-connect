import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBasket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BuyerCardProps {
	roleCardVariants: Variants; // Type from framer-motion for animation variants
	iconVariants: Variants;
	hoveredRole: "buyer" | "seller" | null;
	setHoveredRole: (role: "buyer" | "seller" | null) => void;
}

const BuyerCard: React.FC<BuyerCardProps> = ({
	roleCardVariants,
	iconVariants,
	hoveredRole,
	setHoveredRole,
}) => {
	return (
		<Link to="/registration?role=buyer">
			<motion.div
				className="bg-white rounded-2xl p-8 border border-construction-gray/30 cursor-pointer h-full flex flex-col"
				variants={roleCardVariants}
				initial="initial"
				animate="animate"
				whileHover="hover"
				onMouseEnter={() => setHoveredRole("buyer")}
				onMouseLeave={() => setHoveredRole(null)}>
				<div className="mb-6 flex justify-between items-start">
					<motion.div
						className="w-16 h-16 rounded-2xl bg-construction-blue/10 text-construction-blue flex items-center justify-center"
						variants={iconVariants}
						animate={hoveredRole === "buyer" ? "hover" : "initial"}>
						<ShoppingBasket size={32} />
					</motion.div>
					<div className="glass px-3 py-1 rounded-full text-xs font-medium">
						For Construction Companies
					</div>
				</div>

				<h3 className="text-2xl font-bold mb-3 text-construction-black">
					I Want to Buy
				</h3>

				<p className="text-construction-slate mb-8">
					Find high-quality materials from verified suppliers. Compare prices,
					request quotes, and track your orders all in one place.
				</p>

				<ul className="space-y-3 mb-8">
					<li className="flex items-center text-sm text-construction-slate">
						<div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
							<svg
								className="w-3 h-3"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						Access verified suppliers worldwide
					</li>
					<li className="flex items-center text-sm text-construction-slate">
						<div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
							<svg
								className="w-3 h-3"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						Request custom quotes for bulk orders
					</li>
					<li className="flex items-center text-sm text-construction-slate">
						<div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
							<svg
								className="w-3 h-3"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						Track deliveries and manage orders
					</li>
				</ul>

				<div className="mt-auto">
					<Button className="w-full justify-between bg-construction-blue hover:bg-construction-blue/90 group">
						<span>Register as Buyer</span>
						<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
					</Button>
				</div>
			</motion.div>
		</Link>
	);
};

export default BuyerCard;
