"use client";

import { Search, Filter, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProductSearchProps {
	searchTerm: string;
	onSearchChange: (value: string) => void;
	onFilter: () => void;
	onSort: () => void;
}

const ProductSearch = ({
	searchTerm,
	onSearchChange,
	onFilter,
	onSort,
}: ProductSearchProps) => {
	return (
		<div className="flex flex-col md:flex-row gap-4 mb-8">
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
			<div className="flex gap-2">
				<Button
					variant="outline"
					className="flex-shrink-0 gap-2 rounded-xl border-construction-gray/50"
					onClick={onFilter}>
					<Filter className="h-5 w-5" />
					<span>Filter</span>
				</Button>
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
