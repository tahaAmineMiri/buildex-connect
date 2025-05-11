import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/common/ui/button";

/**
 * Props for the SellerCard component
 * @property roleCardVariants - Animation variants for the card
 * @property iconVariants - Animation variants for the icon
 * @property hoveredRole - Currently hovered role (buyer, seller, or null)
 * @property setHoveredRole - Function to update the hovered role
 */
interface SellerCardProps {
	roleCardVariants: Variants; // Type from framer-motion for animation variants
	iconVariants: Variants;
	hoveredRole: "buyer" | "seller" | null;
	setHoveredRole: (role: "buyer" | "seller" | null) => void;
}

/**
 * SellerCard Component
 * 
 * Interactive card that represents the Seller registration option
 * - Includes animations for hover effects
 * - Contains information about seller benefits
 * - Links to the registration page with the seller role pre-selected
 */
const SellerCard: React.FC<SellerCardProps> = ({
	roleCardVariants,
	iconVariants,
	hoveredRole,
	setHoveredRole,
}) => {
	return (
		<Link to="/registration?role=seller">
			<motion.div
				className="bg-white rounded-2xl p-8 border border-construction-gray/30 cursor-pointer h-full flex flex-col"
				variants={roleCardVariants}
				initial="initial"
				animate="animate"
				whileHover="hover"
				onMouseEnter={() => setHoveredRole("seller")}
				onMouseLeave={() => setHoveredRole(null)}>
				{/* Card Header with Icon and Label */}
				<div className="mb-6 flex justify-between items-start">
					{/* Animated Icon Container */}
					<motion.div
						className="w-16 h-16 rounded-2xl bg-construction-orange/10 text-construction-orange flex items-center justify-center"
						variants={iconVariants}
						animate={hoveredRole === "seller" ? "hover" : "initial"}>
						<Store size={32} />
					</motion.div>
					{/* Glass Label */}
					<div className="glass px-3 py-1 rounded-full text-xs font-medium">
						For Suppliers & Manufacturers
					</div>
				</div>

				{/* Card Title */}
				<h3 className="text-2xl font-bold mb-3 text-construction-black">
					I Want to Sell
				</h3>

				{/* Card Description */}
				<p className="text-construction-slate mb-8">
					Expand your market reach and connect with verified construction
					companies. List products, receive inquiries, and grow your business.
				</p>

				{/* Benefits List */}
				<ul className="space-y-3 mb-8">
					{/* Benefit Item 1 */}
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
						Showcase products to verified buyers
					</li>
					{/* Benefit Item 2 */}
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
						Receive and respond to buyer inquiries
					</li>
					{/* Benefit Item 3 */}
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
						Manage inventory and process orders
					</li>
				</ul>

				{/* Call to Action Button */}
				<div className="mt-auto">
					<Button className="w-full justify-between bg-construction-orange hover:bg-construction-orange/90 group">
						<span>Register as Seller</span>
						<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
					</Button>
				</div>
			</motion.div>
		</Link>
	);
}
export default SellerCard;