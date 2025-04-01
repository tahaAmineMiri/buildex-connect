import { useState } from "react";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z.string().email({ message: "Please enter a valid email address." }),
	company: z
		.string()
		.min(2, { message: "Company name must be at least 2 characters." }),
	subject: z
		.string()
		.min(5, { message: "Subject must be at least 5 characters." }),
	message: z
		.string()
		.min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			company: "",
			subject: "",
			message: "",
		},
	});

	const onSubmit = async (data: FormValues) => {
		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		console.log("Form submitted:", data);
		toast({
			title: "Message Sent",
			description: "Thank you for your message. We'll get back to you soon!",
		});

		form.reset();
		setIsSubmitting(false);
	};

	return (
		<div className="min-h-screen bg-white">
			<NavBar />
			<div className="pt-24 pb-16">
				<div className="container mx-auto px-6">
					{/* Hero Section */}
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

					{/* Contact Cards */}
					<motion.div
						className="grid md:grid-cols-3 gap-6 mb-16"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<div className="bg-white rounded-xl p-8 shadow-sm border border-construction-gray/30 text-center">
							<div className="w-12 h-12 mx-auto rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
								<Mail className="h-6 w-6 text-construction-blue" />
							</div>
							<h3 className="text-xl font-bold mb-2">Email Us</h3>
							<p className="text-construction-slate mb-4">
								For general inquiries and support
							</p>
							<a
								href="mailto:info@incom-marketplace.com"
								className="text-construction-blue hover:underline font-medium">
								info@incom-marketplace.com
							</a>
						</div>

						<div className="bg-white rounded-xl p-8 shadow-sm border border-construction-gray/30 text-center">
							<div className="w-12 h-12 mx-auto rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
								<Phone className="h-6 w-6 text-construction-blue" />
							</div>
							<h3 className="text-xl font-bold mb-2">Call Us</h3>
							<p className="text-construction-slate mb-4">
								Mon-Fri from 9am to 6pm (EST)
							</p>
							<a
								href="tel:+15551234567"
								className="text-construction-blue hover:underline font-medium">
								+1 (555) 123-4567
							</a>
						</div>

						<div className="bg-white rounded-xl p-8 shadow-sm border border-construction-gray/30 text-center">
							<div className="w-12 h-12 mx-auto rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
								<MapPin className="h-6 w-6 text-construction-blue" />
							</div>
							<h3 className="text-xl font-bold mb-2">Visit Us</h3>
							<p className="text-construction-slate mb-4">
								Our headquarters location
							</p>
							<p className="text-construction-blue font-medium">
								123 Construction Avenue
								<br />
								New York, NY 10001
							</p>
						</div>
					</motion.div>

					{/* Contact Form and Map */}
					<div className="grid md:grid-cols-2 gap-12">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}>
							<h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<FormField
											control={form.control}
											name="name"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Your Name</FormLabel>
													<FormControl>
														<Input placeholder="John Doe" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<FormField
											control={form.control}
											name="email"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Email Address</FormLabel>
													<FormControl>
														<Input
															type="email"
															placeholder="your@email.com"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<FormField
										control={form.control}
										name="company"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Company Name</FormLabel>
												<FormControl>
													<Input placeholder="Your Company Ltd." {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="subject"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Subject</FormLabel>
												<FormControl>
													<Input
														placeholder="What is this regarding?"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="message"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Your Message</FormLabel>
												<FormControl>
													<Textarea
														placeholder="Please provide details about your inquiry..."
														className="min-h-[120px]"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<Button
										type="submit"
										className="w-full bg-construction-blue hover:bg-construction-blue/90"
										disabled={isSubmitting}>
										{isSubmitting ? (
											<>Processing...</>
										) : (
											<>
												Send Message
												<Send className="ml-2 h-4 w-4" />
											</>
										)}
									</Button>
								</form>
							</Form>
						</motion.div>

						{/* Map */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="h-full">
							<h2 className="text-2xl font-bold mb-6">Our Location</h2>
							<div className="h-[500px] bg-construction-gray/30 rounded-xl overflow-hidden relative">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.603676326457!2d-74.00712587694788!3d40.75369406875161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1647041388350!5m2!1sen!2sus"
									width="100%"
									height="100%"
									style={{ border: 0 }}
									allowFullScreen
									loading="lazy"
									title="Incom Office Location"></iframe>

								{/* Map Overlay with Office Info */}
								<div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-xs">
									<h3 className="font-bold text-construction-black mb-2">
										Incom Headquarters
									</h3>
									<p className="text-sm text-construction-slate">
										123 Construction Avenue
										<br />
										Building Heights, 9th Floor
										<br />
										New York, NY 10001
										<br />
										United States
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
