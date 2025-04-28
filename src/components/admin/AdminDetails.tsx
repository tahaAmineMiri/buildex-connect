
import React from "react";
import { AdminResponse } from "@/types/admin";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface AdminDetailsProps {
  admin: AdminResponse;
  onClose: () => void;
}

const AdminDetails: React.FC<AdminDetailsProps> = ({ admin, onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Admin Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">ID:</div>
            <div className="col-span-2">{admin.adminId}</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Name:</div>
            <div className="col-span-2">{admin.adminName}</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Email:</div>
            <div className="col-span-2">{admin.adminEmail}</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Role:</div>
            <div className="col-span-2">{admin.adminRole}</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Created At:</div>
            <div className="col-span-2">
              {new Date(admin.adminCreatedAt).toLocaleString()}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdminDetails;
