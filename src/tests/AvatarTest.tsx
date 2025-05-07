import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const UserProfile = () => {
	return (
		<div className="p-4 space-y-4">
			<h1 className="text-lg font-bold">User Profiles</h1>

			{/* User with Profile Picture */}
			<div className="flex items-center space-x-4">
				<Avatar>
					<AvatarImage src="https://via.placeholder.com/150" alt="User 1" />
					<AvatarFallback>U1</AvatarFallback>
				</Avatar>
				<span>User 1</span>
			</div>

			{/* User without Profile Picture */}
			<div className="flex items-center space-x-4">
				<Avatar>
					<AvatarImage src="" alt="User 2" />
					<AvatarFallback>U2</AvatarFallback>
				</Avatar>
				<span>User 2</span>
			</div>
		</div>
	);
};

export default UserProfile;
