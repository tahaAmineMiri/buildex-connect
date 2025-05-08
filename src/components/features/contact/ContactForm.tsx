import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/common/ui/button";
import { Input } from "@/components/common/ui/input";
import { Textarea } from "@/components/common/ui/textarea";
import { useToast } from "@/components/common/ui/use-toast";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/common/ui/form";
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

const ContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { toast } = useToast();

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
		<div>
			<h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
									<Input placeholder="What is this regarding?" {...field} />
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
							"Processing..."
						) : (
							<>
								Send Message <Send className="ml-2 h-4 w-4" />
							</>
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default ContactForm;
