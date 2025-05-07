import { Badge } from "@/components/ui/badge";

const UserStatusList = () => {
	return (
		<div className="p-4 space-y-4">
			<h1 className="text-lg font-bold">User Statuses</h1>

			{/* Active User */}
			<div className="flex items-center space-x-4">
				<span>User 1</span>
				<Badge variant="default">Active</Badge>
			</div>

			{/* Inactive User */}
			<div className="flex items-center space-x-4">
				<span>User 2</span>
				<Badge variant="secondary">Inactive</Badge>
			</div>

			{/* Admin User */}
			<div className="flex items-center space-x-4">
				<span>User 3</span>
				<Badge variant="destructive">Admin</Badge>
			</div>

			{/* Guest User */}
			<div className="flex items-center space-x-4">
				<span>User 4</span>
				<Badge variant="outline">Guest</Badge>
			</div>
		</div>
	);
};

export default UserStatusList;
