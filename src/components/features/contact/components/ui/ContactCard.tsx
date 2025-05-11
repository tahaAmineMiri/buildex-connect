// Import React types
import { ReactNode } from "react"; // Allows using React elements as props

// Define the properties that must be passed to this component
interface ContactCardProps {
	icon: ReactNode;     // An icon component to display
	title: string;       // The card title
	description: string; // Short description text
	link: string;        // URL to link to (email, phone, etc.)
	linkText: string;    // Text to display for the link
}

// ContactCard component - a reusable card for different contact methods
// This can be used for email, phone, support chat, etc.
const ContactCard = ({
	icon,
	title,
	description,
	link,
	linkText,
}: ContactCardProps) => (
	// Main card container with styling
	<div className="bg-white rounded-xl p-8 shadow-sm border border-construction-gray/30 text-center">
		{/* Circular icon container */}
		<div className="w-12 h-12 mx-auto rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
			{icon}
		</div>
		{/* Card title */}
		<h3 className="text-xl font-bold mb-2">{title}</h3>
		{/* Description text */}
		<p className="text-construction-slate mb-4">{description}</p>
		{/* Clickable link (email, phone, etc.) */}
		<a
			href={link}
			className="text-construction-blue hover:underline font-medium">
			{linkText}
		</a>
	</div>
);

export default ContactCard;