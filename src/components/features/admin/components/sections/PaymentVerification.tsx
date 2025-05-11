// PaymentVerification.tsx
// This component manages the verification of customer payments.
// It allows administrators to view pending payments and verify or reject them.

import React from "react";
// React Query for data fetching and state management
import { useQuery } from "@tanstack/react-query";
// Type definition for payment data
import { Payment } from "@/types/admin";
// UI components from the common component library
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/common/ui/table";
import { Button } from "@/components/common/ui/button";
// Toast notifications
import { toast } from "sonner";
// Icon components
import { Check, X } from "lucide-react";

// Mocked API function to fetch pending payments
// In a real application, this would call an actual API endpoint
const fetchPendingPayments = async (): Promise<Payment[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          paymentId: 5001,
          userId: 101,
          userName: "Construction Ltd",
          paymentAmount: 2500.00,
          paymentDate: "2024-04-10T09:30:00",
          referenceNumber: "REF123456789",
          paymentStatus: "PENDING",
        },
        {
          paymentId: 5002,
          userId: 102,
          userName: "Build Master Inc",
          paymentAmount: 4200.50,
          paymentDate: "2024-04-09T10:15:00",
          referenceNumber: "REF987654321",
          paymentStatus: "PENDING",
        },
        {
          paymentId: 5003,
          userId: 103,
          userName: "City Builders",
          paymentAmount: 1800.75,
          paymentDate: "2024-04-08T15:45:00",
          referenceNumber: "REF456789123",
          paymentStatus: "PENDING",
        },
      ]);
    }, 500);
  });
};

// Mocked API function to verify a payment
const verifyPayment = async (paymentId: number): Promise<Payment> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        paymentId: paymentId,
        userId: 101,
        userName: "Construction Ltd",
        paymentAmount: 2500.00,
        paymentDate: "2024-04-10T09:30:00",
        referenceNumber: "REF123456789",
        paymentStatus: "VERIFIED",
      });
    }, 500);
  });
};

// Mocked API function to reject a payment
const rejectPayment = async (paymentId: number): Promise<Payment> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        paymentId: paymentId,
        userId: 101,
        userName: "Construction Ltd",
        paymentAmount: 2500.00,
        paymentDate: "2024-04-10T09:30:00",
        referenceNumber: "REF123456789",
        paymentStatus: "REJECTED",
      });
    }, 500);
  });
};

// The main PaymentVerification component
const PaymentVerification: React.FC = () => {
  // Fetch the list of pending payments using React Query
  const { data: payments, isLoading, refetch } = useQuery({
    queryKey: ["pending-payments"],
    queryFn: fetchPendingPayments,
  });

  // Handler for verifying a payment
  const handleVerify = async (paymentId: number) => {
    try {
      await verifyPayment(paymentId);
      toast.success(`Payment #${paymentId} verified successfully`);
      refetch(); // Refresh the list after verification
    } catch (error) {
      toast.error("Failed to verify payment");
    }
  };

  // Handler for rejecting a payment
  const handleReject = async (paymentId: number) => {
    try {
      await rejectPayment(paymentId);
      toast.success(`Payment #${paymentId} rejected`);
      refetch(); // Refresh the list after rejection
    } catch (error) {
      toast.error("Failed to reject payment");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Payment Verification</h2>
      </div>

      {/* Loading indicator */}
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        // Payments table
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Reference Number</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* If no payments are pending, show a message */}
              {payments?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    No pending payments found.
                  </TableCell>
                </TableRow>
              ) : (
                // List of pending payments
                payments?.map((payment) => (
                  <TableRow key={payment.paymentId}>
                    <TableCell>#{payment.paymentId}</TableCell>
                    <TableCell>{payment.userName}</TableCell>
                    <TableCell>${payment.paymentAmount.toFixed(2)}</TableCell>
                    <TableCell>
                      {new Date(payment.paymentDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="font-mono">
                      {payment.referenceNumber}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {/* Verify button */}
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-green-50 text-green-700 hover:bg-green-100"
                          onClick={() => handleVerify(payment.paymentId)}
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Verify
                        </Button>
                        {/* Reject button */}
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-red-50 text-red-700 hover:bg-red-100"
                          onClick={() => handleReject(payment.paymentId)}
                        >
                          <X className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default PaymentVerification;