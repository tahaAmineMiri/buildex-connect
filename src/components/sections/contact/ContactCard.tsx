import { ReactNode } from "react";

interface ContactCardProps {
	icon: ReactNode;
	title: string;
	description: string;
	link: string;
	linkText: string;
}

const ContactCard = ({
	icon,
	title,
	description,
	link,
	linkText,
}: ContactCardProps) => (
	<div className="bg-white rounded-xl p-8 shadow-sm border border-construction-gray/30 text-center">
		<div className="w-12 h-12 mx-auto rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
			{icon}
		</div>
		<h3 className="text-xl font-bold mb-2">{title}</h3>
		<p className="text-construction-slate mb-4">{description}</p>
		<a
			href={link}
			className="text-construction-blue hover:underline font-medium">
			{linkText}
		</a>
	</div>
);

export default ContactCard;
