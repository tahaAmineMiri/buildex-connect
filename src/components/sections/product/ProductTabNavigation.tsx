import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductTabNavigationProps {
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

const ProductTabNavigation = ({
	activeTab,
	setActiveTab,
}: ProductTabNavigationProps) => {
	return (
		<div className="px-6 pt-4">
			<TabsList className="grid w-full grid-cols-3">
				<TabsTrigger
					value="details"
					onClick={() => setActiveTab("details")}
					data-state={activeTab === "details" ? "active" : "inactive"}>
					Details
				</TabsTrigger>
				<TabsTrigger
					value="shipping"
					onClick={() => setActiveTab("shipping")}
					data-state={activeTab === "shipping" ? "active" : "inactive"}>
					Shipping
				</TabsTrigger>
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
