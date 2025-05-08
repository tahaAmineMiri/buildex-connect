import { useState, useEffect } from "react";
import NavBar from "../components/common/layout/NavBar";
import ProductList from "../components/features/products/ProductList";
import Footer from "../components/common/layout/Footer";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/common/ui/pagination";
import { motion } from "framer-motion";

const Products = () => {
	// State for current page in pagination
	const [currentPage, setCurrentPage] = useState(1);

	// State to toggle between infinite scroll and pagination
	const [isInfiniteScroll, setIsInfiniteScroll] = useState(false);

	// Total number of pages (this would be dynamic in a real application)
	const totalPages = 5;

	// Function to toggle between infinite scroll and pagination
	const toggleScrollMode = () => {
		setIsInfiniteScroll(!isInfiniteScroll);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Navigation Bar */}
			<NavBar />

			<div className="pt-24 pb-16">
				{/* Animated container for the main content */}
				<motion.div
					className="container mx-auto px-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
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

						{/* Toggle Button for Infinite Scroll / Pagination */}
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

					{/* Product List Section */}
					<ProductList infiniteScroll={isInfiniteScroll} />

					{/* Pagination Section (only visible when infinite scroll is disabled) */}
					{!isInfiniteScroll && (
						<div className="mt-12">
							<Pagination>
								<PaginationContent>
									{/* Previous Page Button */}
									<PaginationItem>
										<PaginationPrevious
											href="#"
											onClick={(e) => {
												e.preventDefault();
												if (currentPage > 1) setCurrentPage(currentPage - 1);
											}}
										/>
									</PaginationItem>

									{/* Page Numbers */}
									{[...Array(totalPages)].map((_, i) => (
										<PaginationItem key={i}>
											<PaginationLink
												href="#"
												isActive={currentPage === i + 1}
												onClick={(e) => {
													e.preventDefault();
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
												e.preventDefault();
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

export default Products;
