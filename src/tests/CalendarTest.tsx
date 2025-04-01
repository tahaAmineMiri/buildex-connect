import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

const CalendarTest = () => {
	const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();

	const disabledDates = [
		new Date(2025, 2, 30), // Example: March 30, 2025
		new Date(2025, 3, 1), // Example: April 1, 2025
	];

	return (
		<div className="flex flex-col items-center gap-6 p-6">
			<h1 className="text-xl font-bold">Calendar with Disabled Dates</h1>

			{/* Calendar Component */}
			<Calendar
				mode="single"
				selected={selectedDate}
				onSelect={setSelectedDate}
				disabled={(date) =>
					disabledDates.some(
						(disabledDate) =>
							date.toDateString() === disabledDate.toDateString()
					)
				}
			/>

			{/* Display Selected Date */}
			{selectedDate ? (
				<p className="text-lg">
					Selected Date: {selectedDate.toLocaleDateString()}
				</p>
			) : (
				<p className="text-lg">No date selected</p>
			)}
		</div>
	);
};

export default CalendarTest;
