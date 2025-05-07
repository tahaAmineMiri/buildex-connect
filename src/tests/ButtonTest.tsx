import * as React from "react";
import { Button } from "@/components/ui/button";

const ButtonTest = () => {
	return (
		<div className="flex flex-col items-start gap-4 p-6">
			<h1 className="text-xl font-bold">Button Component Test</h1>

			{/* Default Button */}
			<Button>Default Button</Button>

			{/* Variants */}
			<div className="flex flex-wrap gap-4">
				<Button variant="default">Default</Button>
				<Button variant="destructive">Destructive</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="link">Link</Button>
			</div>

			{/* Sizes */}
			<div className="flex flex-wrap gap-4">
				<Button size="sm">Small</Button>
				<Button size="default">Default</Button>
				<Button size="lg">Large</Button>
				<Button size="icon">
					<span role="img" aria-label="icon">
						⭐
					</span>
				</Button>
			</div>

			{/* Custom Class Example */}
			<Button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white">
				Custom Styled Button
			</Button>
		</div>
	);
};

export default ButtonTest;
