import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/common/ui/button";

// ==============================
// Types
// ==============================
export type CalendarProps = React.ComponentProps<typeof DayPicker>;

// ==============================
// Calendar Component
// ==============================
/**
 * Calendar component that wraps react-day-picker with custom styling
 *
 * Provides a styled date picker with support for date ranges, disabled dates,
 * and custom styling through classNames.
 */
function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: CalendarProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn("p-3", className)}
			classNames={{
				// ==============================
				// Layout Structure
				// ==============================
				// Container for months
				months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
				// Individual month container
				month: "space-y-4",

				// ==============================
				// Header & Navigation
				// ==============================
				// Caption container (month/year display and navigation)
				caption: "flex justify-center pt-1 relative items-center",
				// Month/year label text
				caption_label: "text-sm font-medium",
				// Navigation buttons container
				nav: "space-x-1 flex items-center",
				// Base navigation button styling
				nav_button: cn(
					buttonVariants({ variant: "outline" }),
					"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
				),
				// Previous month button positioning
				nav_button_previous: "absolute left-1",
				// Next month button positioning
				nav_button_next: "absolute right-1",

				// ==============================
				// Calendar Grid
				// ==============================
				// Calendar table
				table: "w-full border-collapse space-y-1",
				// Row containing weekday names
				head_row: "flex",
				// Weekday name cells
				head_cell:
					"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
				// Row of days
				row: "flex w-full mt-2",

				// ==============================
				// Day Cells
				// ==============================
				// Individual day cell with complex selectors for range styling
				cell: [
					"h-9 w-9 text-center text-sm p-0 relative",
					// Range end styling
					"[&:has([aria-selected].day-range-end)]:rounded-r-md",
					// Outside days in range
					"[&:has([aria-selected].day-outside)]:bg-accent/50",
					// Selected day background
					"[&:has([aria-selected])]:bg-accent",
					// Range start/end rounding
					"first:[&:has([aria-selected])]:rounded-l-md",
					"last:[&:has([aria-selected])]:rounded-r-md",
					// Focus styling
					"focus-within:relative focus-within:z-20",
				].join(" "),

				// ==============================
				// Day States
				// ==============================
				// Day button base styling
				day: cn(
					buttonVariants({ variant: "ghost" }),
					"h-9 w-9 p-0 font-normal aria-selected:opacity-100"
				),
				// Marker class for range end
				day_range_end: "day-range-end",
				// Selected day styling
				day_selected: [
					"bg-primary text-primary-foreground",
					"hover:bg-primary hover:text-primary-foreground",
					"focus:bg-primary focus:text-primary-foreground",
				].join(" "),
				// Today's date styling
				day_today: "bg-accent text-accent-foreground",
				// Days outside current month
				day_outside: [
					"day-outside text-muted-foreground opacity-50",
					"aria-selected:bg-accent/50",
					"aria-selected:text-muted-foreground aria-selected:opacity-30",
				].join(" "),
				// Disabled days
				day_disabled: "text-muted-foreground opacity-50",
				// Days in the middle of a range
				day_range_middle:
					"aria-selected:bg-accent aria-selected:text-accent-foreground",
				// Hidden days
				day_hidden: "invisible",

				// Allow custom classNames to override defaults
				...classNames,
			}}
			// ==============================
			// Custom Navigation Icons
			// ==============================
			components={{
				IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
				IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
			}}
			{...props}
		/>
	);
}
Calendar.displayName = "Calendar";

// ==============================
// Exports
// ==============================
export { Calendar };
