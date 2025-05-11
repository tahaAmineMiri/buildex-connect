// UserVerification.tsx
// This component manages the verification of user accounts.
// It allows administrators to view all users and verify or unverify their accounts.

import React from "react";
// React Query for data fetching and state management
import { useQuery } from "@tanstack/react-query";
// Type definition for user data
import { User } from "@/types/admin";
// UI components from the common component library
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/common/ui/table";
import { Button } from "@/components/common/ui/button";
// Toast notifications
import { toast } from "sonner";
// Icon components
import { Check, X } from "lucide-react";

// Mocked API function to fetch users list
// In a real application, this would call an actual API endpoint
const fetchUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          userId: 101,
          userName: "John Construction",
          userEmail: "john@construction.com",
          userRole: "BUYER",
          isVerified: false,
          companyName: "Construction Ltd",
          registrationDate: "2024-04-05T08:15:00",
        },
        {
          userId: 102,
          userName: "Sarah Builder",
          userEmail: "sarah@buildmaster.com",
          userRole: "SELLER",
          isVerified: true,
          companyName: "Build Master Inc",
          registrationDate: "2024-04-03T14:30:00",
        },
        {
          userId: 103,
          userName: "Michael Developer",
          userEmail: "michael@citybuilders.com",
          userRole: "BUYER",
          isVerified: false,
          companyName: "City Builders",
          registrationDate: "2024-04-01T11:45:00",
        },
        {
          userId: 104,
          userName: "Lisa Premier",
          userEmail: "lisa@premier.com",
          userRole: "SELLER",
          isVerified: false,
          companyName: "Premier Construction",
          registrationDate: "2024-03-28T09:20:00",
        },
      ]);
    }, 500);
  });
};

// Mocked API function to verify a user
const verifyUser = async (userId: number): Promise<{ success: boolean, message: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "User verified successfully"
      });
    }, 500);
  });
};

// Mocked API function to unverify a user
const unverifyUser = async (userId: number): Promise<{ success: boolean, message: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "User verification revoked"
      });
    }, 500);
  });
};

// The main UserVerification component
const UserVerification: React.FC = () => {
  // Fetch the list of users using React Query
  const { data: users, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // Handler for verifying a user
  const handleVerify = async (userId: number) => {
    try {
      await verifyUser(userId);
      toast.success("User verified successfully");
      refetch(); // Refresh the list after verification
    } catch (error) {
      toast.error("Failed to verify user");
    }
  };

  // Handler for unverifying a user
  const handleUnverify = async (userId: number) => {
    try {
      await unverifyUser(userId);
      toast.success("User verification revoked");
      refetch(); // Refresh the list after unverification
    } catch (error) {
      toast.error("Failed to revoke user verification");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">User Verification</h2>
      </div>

      {/* Loading indicator */}
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        // Users table
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Registration Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.map((user) => (
                <TableRow key={user.userId}>
                  <TableCell>{user.userId}</TableCell>
                  <TableCell>{user.userName}</TableCell>
                  <TableCell>{user.userEmail}</TableCell>
                  <TableCell>
                    {/* Role badge with color coding */}
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        user.userRole === "BUYER"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {user.userRole}
                    </span>
                  </TableCell>
                  <TableCell>{user.companyName}</TableCell>
                  <TableCell>
                    {new Date(user.registrationDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {/* Verification status badge */}
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        user.isVerified
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {user.isVerified ? "Verified" : "Unverified"}
                    </span>
                  </TableCell>
                  <TableCell>
                    {/* Conditional button based on verification status */}
                    {user.isVerified ? (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-red-50 text-red-700 hover:bg-red-100"
                        onClick={() => handleUnverify(user.userId)}
                      >
                        <X className="h-4 w-4 mr-1" />
                        Unverify
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-green-50 text-green-700 hover:bg-green-100"
                        onClick={() => handleVerify(user.userId)}
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Verify
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default UserVerification;