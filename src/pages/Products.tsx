import { useState, useEffect } from "react";
import NavBar from "../components/layout/NavBar";
import ProductList from "../components/sections/product/ProductList";
import Footer from "../components/layout/Footer";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";

const Products = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isInfiniteScroll, setIsInfiniteScroll] = useState(false);
	const totalPages = 5; // This would be dynamic based on available products

	const toggleScrollMode = () => {
		setIsInfiniteScroll(!isInfiniteScroll);
	};

	return (
		<div className="min-h-screen bg-white">
			<NavBar />
			<div className="pt-24 pb-16">
				<motion.div
					className="container mx-auto px-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					<div className="mb-12">
						<h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-construction-black">
							Construction Materials
						</h1>
						<p className="text-lg text-construction-slate max-w-3xl">
							Browse our extensive catalog of high-quality construction
							materials from verified suppliers. Find exactly what your project
							needs at competitive prices.
						</p>
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

					<ProductList infiniteScroll={isInfiniteScroll} />

					{!isInfiniteScroll && (
						<div className="mt-12">
							{!isInfiniteScroll && (
								<Pagination>
									<PaginationContent>
										<PaginationItem>
											<PaginationPrevious
												href="#"
												onClick={(e) => {
													e.preventDefault();
													if (currentPage > 1) setCurrentPage(currentPage - 1);
												}}
											/>
										</PaginationItem>
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
							)}
						</div>
					)}
				</motion.div>
			</div>
			<Footer />
		</div>
	);
};

export default Products;
