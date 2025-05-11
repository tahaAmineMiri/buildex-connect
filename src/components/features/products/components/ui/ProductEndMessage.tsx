// ProductEndMessage Component
// This component displays a message when the user has reached the end of the product catalog
// It's shown after all products have been loaded in infinite scroll mode

interface ProductEndMessageProps {
	message?: string;  // Optional custom message text
}

const ProductEndMessage = ({
	message = "You've reached the end of the catalog",  // Default message if none provided
}: ProductEndMessageProps) => {
	return (
		<div className="text-center mt-8 text-construction-slate">
			<p>{message}</p>
		</div>
	);
};

export default ProductEndMessage;