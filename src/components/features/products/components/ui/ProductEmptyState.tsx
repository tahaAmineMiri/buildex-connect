// ProductEmptyState Component
// This component displays a message when no products match the search criteria
// It provides a button to clear the search and show all products again

"use client"; // Indicates this is a client-side component

import { Button } from "@/components/common/ui/button";

interface ProductEmptyStateProps {
	searchTerm: string;           // The current search term that yielded no results
	onClearSearch: () => void;    // Function to clear the search term
}

const ProductEmptyState = ({
	searchTerm,
	onClearSearch,
}: ProductEmptyStateProps) => {
	return (
		<div className="text-center py-12">
			{/* Message showing the search term that returned no results */}
			<p className="text-construction-slate">
				No products found matching "{searchTerm}"
			</p>
			
			{/* Button to clear the search and show all products again */}
			<Button
				variant="link"
				className="text-construction-blue mt-2"
				onClick={onClearSearch}>
				Clear search
			</Button>
		</div>
	);
};

export default ProductEmptyState;