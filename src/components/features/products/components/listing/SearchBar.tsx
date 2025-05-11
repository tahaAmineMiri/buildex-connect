// SearchBar Component
// This component provides a search bar with filter and sort buttons
// It allows users to search for products by name, description, or category

import { Search, Filter, ArrowUpDown } from "lucide-react"; // Icons
import { Input } from "@/components/common/ui/input"; // Input component
import { Button } from "@/components/common/ui/button"; // Button component

// Props for the SearchBar component
interface SearchBarProps {
	searchTerm: string;                      // Current search text
	onSearchChange: (value: string) => void; // Function to call when search input changes
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
	return (
		<div className="flex flex-col md:flex-row gap-4 mb-8">
			{/* Search input with icon */}
			<div className="relative flex-grow">
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-construction-slate h-5 w-5" />
				<Input
					type="text"
					placeholder="Search products, materials, or categories..."
					className="pl-10 py-6 rounded-xl border-construction-gray/50 focus:border-construction-blue"
					value={searchTerm}
					onChange={(e) => onSearchChange(e.target.value)}
				/>
			</div>
			
			{/* Filter and Sort buttons */}
			<div className="flex gap-2">
				{/* Filter button */}
				<Button
					variant="outline"
					className="flex-shrink-0 gap-2 rounded-xl border-construction-gray/50">
					<Filter className="h-5 w-5" />
					<span>Filter</span>
				</Button>
				
				{/* Sort button */}
				<Button
					variant="outline"
					className="flex-shrink-0 gap-2 rounded-xl border-construction-gray/50">
					<ArrowUpDown className="h-5 w-5" />
					<span>Sort</span>
				</Button>
			</div>
		</div>
	);
};

export default SearchBar;
