// Import necessary libraries and components
import { useState } from "react";
import { Send } from "lucide-react"; // Icon for the send button
import { Button } from "@/components/common/ui/button";
import { Input } from "@/components/common/ui/input";
import { Textarea } from "@/components/common/ui/textarea";
import { useToast } from "@/components/common/ui/use-toast"; // For showing success messages
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/common/ui/form"; // Form components for structure
import { useForm } from "react-hook-form"; // Form handling library
import { z } from "zod"; // Form validation library
import { zodResolver } from "@hookform/resolvers/zod"; // Connects Zod with React Hook Form

// Define the form validation rules
// This ensures users provide proper information before submitting
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

// Create a type from the schema for TypeScript
type FormValues = z.infer<typeof formSchema>;

// The main contact form component
const ContactForm = () => {
	// Track whether the form is currently being submitted
	const [isSubmitting, setIsSubmitting] = useState(false);
	// Get the toast function to show success messages
	const { toast } = useToast();

	// Initialize the form with validation and default empty values
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

	// Handle form submission
	const onSubmit = async (data: FormValues) => {
		// Show submitting state
		setIsSubmitting(true);

		// This would be replaced with a real API call in production
		// For now, it just waits 1.5 seconds to simulate a server request
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// Log the submitted data (for development purposes)
		console.log("Form submitted:", data);
		
		// Show a success message to the user
		toast({
			title: "Message Sent",
			description: "Thank you for your message. We'll get back to you soon!",
		});

		// Reset the form to empty values
		form.reset();
		// Turn off the submitting state
		setIsSubmitting(false);
	};

	return (
		<div>
			<h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
			{/* The main form component */}
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					{/* Two-column layout for name and email on larger screens */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Name field */}
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

						{/* Email field */}
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

					{/* Company field - full width */}
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

					{/* Subject field - full width */}
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

					{/* Message text area - full width */}
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

					{/* Submit button - shows different text when submitting */}
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