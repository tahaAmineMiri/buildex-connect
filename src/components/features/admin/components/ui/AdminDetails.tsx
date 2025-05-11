// AdminDetails.tsx
// This component displays detailed information about an admin user in a dialog.
// It is used for viewing admin information but not editing it.

import React from "react";
// Type definition for admin data
import { AdminResponse } from "@/types/admin";
// UI components from the common component library
import { Button } from "@/components/common/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/common/ui/dialog";

// Component props definition
interface AdminDetailsProps {
  admin: AdminResponse;     // Admin data to display
  onClose: () => void;      // Function to handle dialog close
}

// The main AdminDetails component
const AdminDetails: React.FC<AdminDetailsProps> = ({ admin, onClose }) => {
  return (
    // Dialog modal that contains the admin details
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Admin Details</DialogTitle>
        </DialogHeader>
        {/* Admin information displayed in grid layout */}
        <div className="space-y-4 py-4">
          {/* Admin ID */}
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">ID:</div>
            <div className="col-span-2">{admin.adminId}</div>
          </div>
          {/* Admin Name */}
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Name:</div>
            <div className="col-span-2">{admin.adminName}</div>
          </div>
          {/* Admin Email */}
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Email:</div>
            <div className="col-span-2">{admin.adminEmail}</div>
          </div>
          {/* Admin Role */}
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Role:</div>
            <div className="col-span-2">{admin.adminRole}</div>
          </div>
          {/* Admin Creation Date */}
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Created At:</div>
            <div className="col-span-2">
              {new Date(admin.adminCreatedAt).toLocaleString()}
            </div>
          </div>
        </div>
        {/* Close button */}
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdminDetails;