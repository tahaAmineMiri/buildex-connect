import React from "react";
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

const CardTest = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<Card className="w-96">
				<CardHeader>
					<CardTitle>Welcome to Buildex</CardTitle>
					<CardDescription>
						This is a simple card component demonstration.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>
						Cards are a great way to group related content and actions together.
						You can use them to display information in a structured and visually
						appealing way.
					</p>
				</CardContent>
				<CardFooter>
					<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
						Get Started
					</button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default CardTest;
