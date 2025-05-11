// ProductTabNavigation Component
// This component displays the tab buttons for the product detail modal
// It allows users to switch between different information sections

import { TabsList, TabsTrigger } from "@/components/common/ui/tabs";

// Props for the tab navigation component
interface ProductTabNavigationProps {
	activeTab: string;                // Which tab is currently selected
	setActiveTab: (tab: string) => void; // Function to change the active tab
}

const ProductTabNavigation = ({
	activeTab,
	setActiveTab,
}: ProductTabNavigationProps) => {
	return (
		<div className="px-6 pt-4">
			{/* Grid of tab buttons */}
			<TabsList className="grid w-full grid-cols-3">
				{/* Details tab button */}
				<TabsTrigger
					value="details"
					onClick={() => setActiveTab("details")}
					data-state={activeTab === "details" ? "active" : "inactive"}>
					Details
				</TabsTrigger>
				
				{/* Shipping tab button */}
				<TabsTrigger
					value="shipping"
					onClick={() => setActiveTab("shipping")}
					data-state={activeTab === "shipping" ? "active" : "inactive"}>
					Shipping
				</TabsTrigger>
				
				{/* Reviews tab button */}
				<TabsTrigger
					value="reviews"
					onClick={() => setActiveTab("reviews")}
					data-state={activeTab === "reviews" ? "active" : "inactive"}>
					Reviews
				</TabsTrigger>
			</TabsList>
		</div>
	);
};

export default ProductTabNavigation;