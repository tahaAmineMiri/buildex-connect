import React, { useState } from "react";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationExample = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 10; // Example total pages

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
			<h1 className="text-2xl font-bold mb-4">Pagination Example</h1>
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
								if (currentPage < totalPages) setCurrentPage(currentPage + 1);
							}}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>

			<p className="mt-4 text-gray-600">
				Current Page: <span className="font-bold">{currentPage}</span>
			</p>
		</div>
	);
};

export default PaginationExample;
