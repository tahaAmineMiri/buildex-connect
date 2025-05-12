// Import necessary hooks and components
import { useState, useEffect } from "react";
import NavBar from "../components/common/layout/NavBar";
import ProductList from "../components/features/products/components/listing/ProductList";
import Footer from "../components/common/layout/Footer";

// Import UI components for pagination
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/common/ui/pagination";

// Import animation components
import { motion } from "framer-motion";

// Main Products page component
const Products = () => {
	// State for tracking current page in pagination
	const [currentPage, setCurrentPage] = useState(1);

	// State to toggle between infinite scroll and pagination modes
	const [isInfiniteScroll, setIsInfiniteScroll] = useState(false);

	// Total number of pages (would typically be fetched from an API in a real app)
	const totalPages = 5;

	// Function to toggle between infinite scroll and pagination modes
	const toggleScrollMode = () => {
		setIsInfiniteScroll(!isInfiniteScroll);
	};

	return (
		// Main container with full height and white background
		<div className="min-h-screen bg-white">
			{/* Navigation Bar */}
			<NavBar />

			<div className="pt-24 pb-16">
				{/* Animated container for main content - fades in from top */}
				<motion.div
					className="container mx-auto px-6"
					initial={{ opacity: 0, y: 20 }}  // Starting position (invisible, 20px below)
					animate={{ opacity: 1, y: 0 }}   // End position (fully visible, normal position)
					transition={{ duration: 0.5 }}>  // Animation timing
					
					{/* Header Section */}
					<div className="mb-12">
						{/* Page Title */}
						<h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-construction-black">
							Construction Materials
						</h1>

						{/* Description */}
						<p className="text-lg text-construction-slate max-w-3xl">
							Browse our extensive catalog of high-quality construction
							materials from verified suppliers. Find exactly what your project
							needs at competitive prices.
						</p>

						{/* Toggle Button for switching between infinite scroll and pagination */}
						<div className="mt-4">
							<button
								onClick={toggleScrollMode}
								className="text-sm inline-flex items-center gap-2 text-construction-blue hover:underline">
								{isInfiniteScroll
									? "Switch to pagination"
									: "Switch to infinite scroll"}
							</button>
						</div>
					</div>

					{/* Product List Section - passing the infinite scroll mode as a prop */}
					<ProductList infiniteScroll={isInfiniteScroll} />

					{/* Pagination Section - only visible when infinite scroll is disabled */}
					{!isInfiniteScroll && (
						<div className="mt-12">
							<Pagination>
								<PaginationContent>
									{/* Previous Page Button */}
									<PaginationItem>
										<PaginationPrevious
											href="#"
											onClick={(e) => {
												e.preventDefault(); // Prevent default link behavior
												if (currentPage > 1) setCurrentPage(currentPage - 1);
											}}
										/>
									</PaginationItem>

									{/* Page Number Buttons */}
									{[...Array(totalPages)].map((_, i) => (
										<PaginationItem key={i}>
											<PaginationLink
												href="#"
												isActive={currentPage === i + 1} // Highlight current page
												onClick={(e) => {
													e.preventDefault(); // Prevent default link behavior
													setCurrentPage(i + 1);
												}}>
												{i + 1}
											</PaginationLink>
										</PaginationItem>
									))}

									{/* Next Page Button */}
									<PaginationItem>
										<PaginationNext
											href="#"
											onClick={(e) => {
												e.preventDefault(); // Prevent default link behavior
												if (currentPage < totalPages)
													setCurrentPage(currentPage + 1);
											}}
										/>
									</PaginationItem>
								</PaginationContent>
							</Pagination>
						</div>
					)}
				</motion.div>
			</div>

			{/* Footer Section */}
			<Footer />
		</div>
	);
};

// Export the component for use in other files
export default Products;