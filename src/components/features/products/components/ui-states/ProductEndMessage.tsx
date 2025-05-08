interface ProductEndMessageProps {
	message?: string;
}

const ProductEndMessage = ({
	message = "You've reached the end of the catalog",
}: ProductEndMessageProps) => {
	return (
		<div className="text-center mt-8 text-construction-slate">
			<p>{message}</p>
		</div>
	);
};

export default ProductEndMessage;
