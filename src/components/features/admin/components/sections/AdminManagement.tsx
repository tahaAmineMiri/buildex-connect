// AdminManagement.tsx
// This component manages the list of admin users in the system.
// It provides functionality to view, add, edit, and delete admins.

import React, { useState } from "react";
// React Query for data fetching and state management
import { useQuery } from "@tanstack/react-query";
// Type definitions for admin data
import { AdminResponse, AdminRequest } from "@/types/admin";
// UI components from the common component library
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/common/ui/table";
import { Button } from "@/components/common/ui/button";
import { Edit, Trash2, Eye } from "lucide-react";
// Custom components for the admin feature
import AdminForm from "@/components/features/admin/components/forms/AdminForm"
import AdminDetails from "@/components/features/admin/components/ui/AdminDetails";
// Toast notifications
import { toast } from "sonner";

// Mocked API function to fetch admins list
// In a real application, this would call an actual API endpoint
const fetchAdmins = async (): Promise<AdminResponse[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          adminId: 1,
          adminName: "John Doe",
          adminEmail: "john@incon.com",
          adminRole: "ADMIN",
          adminCreatedAt: "2024-04-01T10:30:00",
        },
        {
          adminId: 2,
          adminName: "Jane Smith",
          adminEmail: "jane@incon.com",
          adminRole: "ADMIN",
          adminCreatedAt: "2024-04-02T14:20:00",
        },
      ]);
    }, 500);
  });
};

// Mocked API function to create a new admin
const createAdmin = async (admin: AdminRequest): Promise<AdminResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        adminId: Math.floor(Math.random() * 1000),
        adminName: admin.adminName,
        adminEmail: admin.adminEmail,
        adminRole: "ADMIN",
        adminCreatedAt: new Date().toISOString(),
      });
    }, 500);
  });
};

// Mocked API function to update an existing admin
const updateAdmin = async (adminId: number, admin: AdminRequest): Promise<AdminResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        adminId: adminId,
        adminName: admin.adminName,
        adminEmail: admin.adminEmail,
        adminRole: "ADMIN",
        adminCreatedAt: "2024-04-01T10:30:00",
      });
    }, 500);
  });
};

// Mocked API function to delete an admin
const deleteAdmin = async (adminId: number): Promise<{ success: boolean, message: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Admin deleted successfully"
      });
    }, 500);
  });
};

// The main AdminManagement component
const AdminManagement: React.FC = () => {
  // State for tracking whether the admin form dialog is open
  const [isFormOpen, setIsFormOpen] = useState(false);
  // State for tracking whether the admin details dialog is open
  const [isViewOpen, setIsViewOpen] = useState(false);
  // State for storing the currently selected admin (for editing or viewing)
  const [selectedAdmin, setSelectedAdmin] = useState<AdminResponse | null>(null);

  // Fetch the list of admins using React Query
  const { data: admins, isLoading, refetch } = useQuery({
    queryKey: ["admins"],
    queryFn: fetchAdmins,
  });

  // Handler for adding a new admin
  const handleAddAdmin = async (admin: AdminRequest) => {
    try {
      await createAdmin(admin);
      toast.success("Admin added successfully");
      setIsFormOpen(false);
      refetch(); // Refresh the list to show the new admin
    } catch (error) {
      toast.error("Failed to add admin");
    }
  };

  // Handler for updating an existing admin
  const handleUpdateAdmin = async (admin: AdminRequest) => {
    if (!selectedAdmin) return;
    
    try {
      await updateAdmin(selectedAdmin.adminId, admin);
      toast.success("Admin updated successfully");
      setIsFormOpen(false);
      refetch(); // Refresh the list to show the updated admin
    } catch (error) {
      toast.error("Failed to update admin");
    }
  };

  // Handler for viewing an admin's details
  const handleViewAdmin = (admin: AdminResponse) => {
    setSelectedAdmin(admin);
    setIsViewOpen(true);
  };

  // Handler for editing an admin
  const handleEditAdmin = (admin: AdminResponse) => {
    setSelectedAdmin(admin);
    setIsFormOpen(true);
  };

  // Handler for deleting an admin
  const handleDeleteAdmin = async (adminId: number) => {
    try {
      await deleteAdmin(adminId);
      toast.success("Admin deleted successfully");
      refetch(); // Refresh the list to remove the deleted admin
    } catch (error) {
      toast.error("Failed to delete admin");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      {/* Header with Add New Admin button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Admin Management</h2>
        <Button onClick={() => {
          setSelectedAdmin(null); // Clear selected admin for creating new
          setIsFormOpen(true);
        }}>
          Add New Admin
        </Button>
      </div>

      {/* Loading indicator */}
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        // Admins table
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {admins?.map((admin) => (
                <TableRow key={admin.adminId}>
                  <TableCell>{admin.adminId}</TableCell>
                  <TableCell>{admin.adminName}</TableCell>
                  <TableCell>{admin.adminEmail}</TableCell>
                  <TableCell>{admin.adminRole}</TableCell>
                  <TableCell>
                    {new Date(admin.adminCreatedAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      {/* View button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewAdmin(admin)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      {/* Edit button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditAdmin(admin)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      {/* Delete button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteAdmin(admin.adminId)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Admin form dialog (for adding or editing) */}
      {isFormOpen && (
        <AdminForm
          admin={selectedAdmin}
          onSubmit={selectedAdmin ? handleUpdateAdmin : handleAddAdmin}
          onCancel={() => setIsFormOpen(false)}
        />
      )}

      {/* Admin details dialog */}
      {isViewOpen && selectedAdmin && (
        <AdminDetails
          admin={selectedAdmin}
          onClose={() => setIsViewOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminManagement;