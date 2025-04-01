import { motion } from "framer-motion";
import fadeInUp from "@/lib/animations";

const ShippingProcessSection = () => {
	return (
		<motion.section
			className="mb-20"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={fadeInUp}>
			<div className="bg-construction-gray/30 rounded-2xl p-8">
				<h2 className="text-3xl font-bold mb-8 text-construction-black">
					Shipping Process
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					<div className="bg-white rounded-xl p-6 shadow-sm">
						<div className="w-12 h-12 rounded-full bg-construction-orange/10 flex items-center justify-center mb-4">
							<span className="text-xl font-bold text-construction-orange">
								1
							</span>
						</div>
						<h3 className="text-xl font-bold mb-3">From Seller to Incom</h3>
						<p className="text-construction-slate">
							After a purchase is made, sellers prepare the materials and
							coordinate with our logistics team for pickup. All products
							undergo quality inspection before being accepted into our
							distribution centers.
						</p>
						<p className="text-sm text-construction-slate mt-4">
							Average processing time: 1-2 business days
						</p>
					</div>

					<div className="bg-white rounded-xl p-6 shadow-sm">
						<div className="w-12 h-12 rounded-full bg-construction-orange/10 flex items-center justify-center mb-4">
							<span className="text-xl font-bold text-construction-orange">
								2
							</span>
						</div>
						<h3 className="text-xl font-bold mb-3">Incom Quality Control</h3>
						<p className="text-construction-slate">
							All materials are thoroughly inspected at our facilities to ensure
							they meet quality standards and match the product descriptions.
							Materials are then prepared for shipping to the buyer.
						</p>
						<p className="text-sm text-construction-slate mt-4">
							Average processing time: 1 business day
						</p>
					</div>

					<div className="bg-white rounded-xl p-6 shadow-sm">
						<div className="w-12 h-12 rounded-full bg-construction-orange/10 flex items-center justify-center mb-4">
							<span className="text-xl font-bold text-construction-orange">
								3
							</span>
						</div>
						<h3 className="text-xl font-bold mb-3">From Incom to Buyer</h3>
						<p className="text-construction-slate">
							Materials are shipped directly to the buyer's specified location
							using our network of trusted transportation partners. Buyers
							receive tracking information and estimated delivery dates.
						</p>
						<p className="text-sm text-construction-slate mt-4">
							Delivery times: 3-10 business days depending on location
						</p>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default ShippingProcessSection;
