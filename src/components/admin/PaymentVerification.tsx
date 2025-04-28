
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Payment } from "@/types/admin";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Check, X } from "lucide-react";

// Mock function to fetch pending payments
const fetchPendingPayments = async (): Promise<Payment[]> => {
  // In a real implementation, this would make an API call
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

// Mock function to verify payment
const verifyPayment = async (paymentId: number): Promise<Payment> => {
  // In a real implementation, this would make an API call
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

// Mock function to reject payment
const rejectPayment = async (paymentId: number): Promise<Payment> => {
  // In a real implementation, this would make an API call
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

const PaymentVerification: React.FC = () => {
  const { data: payments, isLoading, refetch } = useQuery({
    queryKey: ["pending-payments"],
    queryFn: fetchPendingPayments,
  });

  const handleVerify = async (paymentId: number) => {
    try {
      await verifyPayment(paymentId);
      toast.success(`Payment #${paymentId} verified successfully`);
      refetch();
    } catch (error) {
      toast.error("Failed to verify payment");
    }
  };

  const handleReject = async (paymentId: number) => {
    try {
      await rejectPayment(paymentId);
      toast.success(`Payment #${paymentId} rejected`);
      refetch();
    } catch (error) {
      toast.error("Failed to reject payment");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Payment Verification</h2>
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
                <TableHead>Payment ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Reference Number</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    No pending payments found.
                  </TableCell>
                </TableRow>
              ) : (
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
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-green-50 text-green-700 hover:bg-green-100"
                          onClick={() => handleVerify(payment.paymentId)}
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Verify
                        </Button>
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
