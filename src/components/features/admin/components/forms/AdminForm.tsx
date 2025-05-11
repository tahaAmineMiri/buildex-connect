// AdminForm.tsx
// This component provides a dialog form for creating or editing admin users.
// It handles both adding new admins and updating existing ones with validation.

import React from "react";
// Zod is used for form validation
import { z } from "zod";
// React Hook Form handles form state and submission
import { useForm } from "react-hook-form";
// Connects Zod validation with React Hook Form
import { zodResolver } from "@hookform/resolvers/zod";
// Type definitions for admin data
import { AdminRequest, AdminResponse } from "@/types/admin";
// UI components from the common component library
import { Button } from "@/components/common/ui/button";
import { Input } from "@/components/common/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/common/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/common/ui/form";

// Component props definition
interface AdminFormProps {
  admin: AdminResponse | null;    // Existing admin data (null for new admin)
  onSubmit: (data: AdminRequest) => void;   // Function to handle form submission
  onCancel: () => void;           // Function to handle cancellation
}

// Form validation schema using Zod
const adminSchema = z.object({
  adminName: z.string().min(2, "Name must be at least 2 characters"),
  adminEmail: z.string().email("Invalid email address"),
  adminPassword: z.string().min(6, "Password must be at least 6 characters"),
});

// The main AdminForm component
const AdminForm: React.FC<AdminFormProps> = ({ admin, onSubmit, onCancel }) => {
  // Initialize the form with React Hook Form and Zod validation
  const form = useForm<AdminRequest>({
    resolver: zodResolver(adminSchema),
    // Pre-fill form with existing admin data if editing, otherwise empty
    defaultValues: {
      adminName: admin?.adminName || "",
      adminEmail: admin?.adminEmail || "",
      adminPassword: "",
    },
  });

  // Handle form submission
  const handleSubmit = (data: AdminRequest) => {
    onSubmit(data);
  };

  return (
    // Dialog modal that contains the form
    <Dialog open={true} onOpenChange={() => onCancel()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{admin ? "Edit Admin" : "Add New Admin"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            {/* Admin Name Field */}
            <FormField
              control={form.control}
              name="adminName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Admin Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Admin Email Field */}
            <FormField
              control={form.control}
              name="adminEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Admin Password Field */}
            <FormField
              control={form.control}
              name="adminPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Form Buttons */}
            <DialogFooter>
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit">
                {admin ? "Update" : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminForm;