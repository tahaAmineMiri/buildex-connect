// NoProducts Component
// This component displays a message when no products match the search criteria
// It also provides a button to clear the search term

import { Button } from "@/components/common/ui/button";

interface NoProductsProps {
	searchTerm: string;           // The current search term that yielded no results
	onClearSearch: () => void;    // Function to clear the search term
}

const NoProducts = ({ searchTerm, onClearSearch }: NoProductsProps) => {
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

export default NoProducts;