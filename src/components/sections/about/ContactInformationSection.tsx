import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import fadeInUp from "@/lib/animations";

const ContactInformationSection = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={fadeInUp}
			className="mb-10">
			<h2 className="text-3xl font-bold mb-8 text-construction-black">
				Contact Information
			</h2>
			<div className="grid md:grid-cols-3 gap-6">
				<Card>
					<CardHeader>
						<CardTitle>Main Office</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-construction-slate mb-2">
							123 Construction Avenue
						</p>
						<p className="text-construction-slate mb-2">
							Building Heights, 9th Floor
						</p>
						<p className="text-construction-slate mb-2">New York, NY 10001</p>
						<p className="text-construction-slate mb-2">United States</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Contact Details</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-construction-slate mb-2">
							Email: info@incom-marketplace.com
						</p>
						<p className="text-construction-slate mb-2">
							Phone: +1 (555) 123-4567
						</p>
						<p className="text-construction-slate mb-2">
							Fax: +1 (555) 123-4568
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Business Hours</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-construction-slate mb-2">
							Monday - Friday: 9:00 AM - 6:00 PM EST
						</p>
						<p className="text-construction-slate mb-2">
							Saturday: 10:00 AM - 2:00 PM EST
						</p>
						<p className="text-construction-slate mb-2">Sunday: Closed</p>
					</CardContent>
				</Card>
			</div>
		</motion.section>
	);
};

export default ContactInformationSection;
