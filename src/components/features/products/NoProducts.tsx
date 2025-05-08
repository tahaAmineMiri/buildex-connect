import { Button } from "@/components/common/ui/button";

interface NoProductsProps {
	searchTerm: string;
	onClearSearch: () => void;
}

const NoProducts = ({ searchTerm, onClearSearch }: NoProductsProps) => {
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

export default NoProducts;
