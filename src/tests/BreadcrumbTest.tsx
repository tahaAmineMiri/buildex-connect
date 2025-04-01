import React from "react";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbTest = () => {
	return (
		<div className="p-4">
			<Breadcrumb>
				<BreadcrumbList>
					{/* Home link */}
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>

					{/* Separator */}
					<BreadcrumbSeparator />

					{/* Category link */}
					<BreadcrumbItem>
						<BreadcrumbLink href="/category">Category</BreadcrumbLink>
					</BreadcrumbItem>

					{/* Separator */}
					<BreadcrumbSeparator />

					{/* Current page */}
					<BreadcrumbItem>
						<BreadcrumbPage>Product Details</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	);
};

export default BreadcrumbTest;
