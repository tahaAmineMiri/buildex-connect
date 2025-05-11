// ProductPaginationLoader Component
// This component displays a loading spinner when more products are being loaded
// It appears at the bottom of the product grid during infinite scrolling

const ProductPaginationLoader = () => {
	return (
		<div className="flex justify-center mt-8">
			{/* Animated spinner */}
			<div className="inline-block p-3 rounded-full bg-construction-blue/10">
				<svg
					className="w-6 h-6 text-construction-blue animate-spin"
					fill="none"
					viewBox="0 0 24 24">
					{/* Outer circle with reduced opacity */}
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"></circle>
					{/* Partial arc that creates the spinning effect */}
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</svg>
			</div>
		</div>
	);
};

export default ProductPaginationLoader;