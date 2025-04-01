import React from "react";
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogAction,
	AlertDialogCancel,
} from "@/components/ui/alert-dialog";

const AlertDialogExample = () => {
	return (
		<AlertDialog>
			{/* Trigger Button */}
			<AlertDialogTrigger className="btn btn-warning">
				Leave Page
			</AlertDialogTrigger>

			{/* Dialog Content */}
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
					<AlertDialogDescription>
						You have unsaved changes. If you leave this page, your changes will
						be lost.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					{/* Cancel Button */}
					<AlertDialogCancel>Stay</AlertDialogCancel>
					{/* Confirm Button */}
					<AlertDialogAction>Leave</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default AlertDialogExample;
