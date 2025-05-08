import React from "react";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/types/admin";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/common/ui/table";
import { Button } from "@/components/common/ui/button";
import { toast } from "sonner";
import { Check, X } from "lucide-react";

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

const UserVerification: React.FC = () => {
  const { data: users, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const handleVerify = async (userId: number) => {
    try {
      await verifyUser(userId);
      toast.success("User verified successfully");
      refetch();
    } catch (error) {
      toast.error("Failed to verify user");
    }
  };

  const handleUnverify = async (userId: number) => {
    try {
      await unverifyUser(userId);
      toast.success("User verification revoked");
      refetch();
    } catch (error) {
      toast.error("Failed to revoke user verification");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">User Verification</h2>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
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
