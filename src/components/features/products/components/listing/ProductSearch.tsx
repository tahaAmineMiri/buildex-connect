// ProductSearch Component
// This component provides a search bar and filter/sort buttons
// It allows users to search for products by name, description, or category

"use client"; // Indicates this is a client-side component

import { Search, Filter, ArrowUpDown } from "lucide-react"; // Icons
import { Input } from "@/components/common/ui/input";
import { Button } from "@/components/common/ui/button";

// Props for the search component
interface ProductSearchProps {
	searchTerm: string;                      // Current search text
	onSearchChange: (value: string) => void; // Function to call when search input changes
	onFilter: () => void;                    // Function to call when filter button is clicked
	onSort: () => void;                      // Function to call when sort button is clicked
}

const ProductSearch = ({
	searchTerm,
	onSearchChange,
	onFilter,
	onSort,
}: ProductSearchProps) => {
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
					className="flex-shrink-0 gap-2 rounded-xl border-construction-gray/50"
					onClick={onFilter}>
					<Filter className="h-5 w-5" />
					<span>Filter</span>
				</Button>
				
				{/* Sort button */}
				<Button
					variant="outline"
					className="flex-shrink-0 gap-2 rounded-xl border-construction-gray/50"
					onClick={onSort}>
					<ArrowUpDown className="h-5 w-5" />
					<span>Sort</span>
				</Button>
			</div>
		</div>
	);
};

export default ProductSearch;