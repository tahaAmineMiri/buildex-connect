import { motion } from "framer-motion";
import { Building, Truck, CreditCard, Users } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const BusinessModelSection = () => (
	<motion.section
		className="mb-20"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, margin: "-100px" }}
		variants={{
			hidden: { opacity: 0, y: 20 },
			visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
		}}>
		<h2 className="text-3xl font-bold mb-8 text-construction-black text-center">
			How Incom Works
		</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<Card>
				<CardHeader className="pb-4">
					<div className="w-12 h-12 rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
						<Building className="h-6 w-6 text-construction-blue" />
					</div>
					<CardTitle>Suppliers List Products</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription className="text-construction-slate">
						Verified suppliers list their construction materials on our
						platform, providing detailed specifications, pricing, and
						availability.
					</CardDescription>
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="pb-4">
					<div className="w-12 h-12 rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
						<Users className="h-6 w-6 text-construction-blue" />
					</div>
					<CardTitle>Buyers Find Materials</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription className="text-construction-slate">
						Construction companies browse our extensive catalog, compare prices,
						and select the materials they need for their projects.
					</CardDescription>
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="pb-4">
					<div className="w-12 h-12 rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
						<CreditCard className="h-6 w-6 text-construction-blue" />
					</div>
					<CardTitle>Secure Transactions</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription className="text-construction-slate">
						Incom facilitates secure payments between buyers and sellers,
						providing protection and peace of mind for all parties.
					</CardDescription>
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="pb-4">
					<div className="w-12 h-12 rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
						<Truck className="h-6 w-6 text-construction-blue" />
					</div>
					<CardTitle>Reliable Shipping</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription className="text-construction-slate">
						We coordinate efficient shipping from suppliers to buyers, ensuring
						materials arrive on time and in perfect condition.
					</CardDescription>
				</CardContent>
			</Card>
		</div>
	</motion.section>
);

export default BusinessModelSection;
