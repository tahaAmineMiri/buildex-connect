// Import animation library
import { motion } from "framer-motion"; // For animations (though not used in this component)

// Map section component that displays the office location
const MapSection = () => {
	return (
		<div className="h-full flex items-center">
			<div className="w-full">
				{/* Section heading */}
				<h2 className="text-2xl font-bold mb-6">Our Location</h2>
				
				{/* Map container with styling */}
				<div className="h-[500px] bg-construction-gray/30 rounded-xl overflow-hidden relative">
					{/* Google Maps iframe - embedded map of the location */}
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.603676326457!2d-74.00712587694788!3d40.75369406875161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1647041388350!5m2!1sen!2sus"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy" // Loads the map only when it's visible on screen
						title="Incom Office Location"></iframe>

					{/* Information card that appears on top of the map */}
					<div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-xs">
						{/* Company name */}
						<h3 className="font-bold text-construction-black mb-2">
							Incom Headquarters
						</h3>
						{/* Address information */}
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
			</div>
		</div>
	);
};

export default MapSection;