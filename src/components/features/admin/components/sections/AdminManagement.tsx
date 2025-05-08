import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AdminResponse, AdminRequest } from "@/types/admin";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/common/ui/table";
import { Button } from "@/components/common/ui/button";
import { Edit, Trash2, Eye } from "lucide-react";
import AdminForm from "@/components/features/admin/components/forms/AdminForm"
import AdminDetails from "@/components/features/admin/components/ui/AdminDetails";
import { toast } from "sonner";

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

const AdminManagement: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<AdminResponse | null>(null);

  const { data: admins, isLoading, refetch } = useQuery({
    queryKey: ["admins"],
    queryFn: fetchAdmins,
  });

  const handleAddAdmin = async (admin: AdminRequest) => {
    try {
      await createAdmin(admin);
      toast.success("Admin added successfully");
      setIsFormOpen(false);
      refetch();
    } catch (error) {
      toast.error("Failed to add admin");
    }
  };

  const handleUpdateAdmin = async (admin: AdminRequest) => {
    if (!selectedAdmin) return;
    
    try {
      await updateAdmin(selectedAdmin.adminId, admin);
      toast.success("Admin updated successfully");
      setIsFormOpen(false);
      refetch();
    } catch (error) {
      toast.error("Failed to update admin");
    }
  };

  const handleViewAdmin = (admin: AdminResponse) => {
    setSelectedAdmin(admin);
    setIsViewOpen(true);
  };

  const handleEditAdmin = (admin: AdminResponse) => {
    setSelectedAdmin(admin);
    setIsFormOpen(true);
  };

  const handleDeleteAdmin = async (adminId: number) => {
    try {
      await deleteAdmin(adminId);
      toast.success("Admin deleted successfully");
      refetch();
    } catch (error) {
      toast.error("Failed to delete admin");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Admin Management</h2>
        <Button onClick={() => {
          setSelectedAdmin(null);
          setIsFormOpen(true);
        }}>
          Add New Admin
        </Button>
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
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewAdmin(admin)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditAdmin(admin)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
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

      {isFormOpen && (
        <AdminForm
          admin={selectedAdmin}
          onSubmit={selectedAdmin ? handleUpdateAdmin : handleAddAdmin}
          onCancel={() => setIsFormOpen(false)}
        />
      )}

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
