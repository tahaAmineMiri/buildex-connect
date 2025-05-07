import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const AlertTest = () => {
	return (
		<div className="p-4 space-y-4">
			{/* Default Alert */}
			<Alert>
				<AlertTitle>Default Alert</AlertTitle>
				<AlertDescription>
					This is a default alert message. Everything is working as expected.
				</AlertDescription>
			</Alert>

			{/* Destructive Alert */}
			<Alert variant="destructive">
				<AlertTitle>Error Alert</AlertTitle>
				<AlertDescription>
					There was an error processing your request. Please try again later.
				</AlertDescription>
			</Alert>
		</div>
	);
};

export default AlertTest;
