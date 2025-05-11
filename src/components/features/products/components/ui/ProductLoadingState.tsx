// ProductLoadingState Component
// This component displays a loading spinner and message while products are loading
// It provides visual feedback to users during initial data loading

interface ProductLoadingStateProps {
	message?: string;  // Optional custom loading message
}

const ProductLoadingState = ({
	message = "Loading products...",  // Default message if none provided
}: ProductLoadingStateProps) => {
	return (
		<div className="grid place-items-center h-64">
			<div className="text-center">
				{/* Animated loading spinner */}
				<div className="inline-block p-3 rounded-full bg-construction-blue/10 mb-4">
					<svg
						className="w-6 h-6 text-construction-blue animate-spin"
						fill="none"
						viewBox="0 0 24 24">
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
				</div>
				{/* Loading message text */}
				<p className="text-construction-slate font-medium">{message}</p>
			</div>
		</div>
	);
};

export default ProductLoadingState;