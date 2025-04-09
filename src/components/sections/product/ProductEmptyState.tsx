"use client";

import { Button } from "@/components/ui/button";

interface ProductEmptyStateProps {
	searchTerm: string;
	onClearSearch: () => void;
}

const ProductEmptyState = ({
	searchTerm,
	onClearSearch,
}: ProductEmptyStateProps) => {
	return (
		<div className="text-center py-12">
			<p className="text-construction-slate">
				No products found matching "{searchTerm}"
			</p>
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
