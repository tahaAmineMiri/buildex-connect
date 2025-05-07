
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllOrders, getOrderById, createOrder, updateOrderStatus } from '@/api/orders';

export const useOrders = () => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const queryClient = useQueryClient();
  
  const { 
    data: orders = [], 
    isLoading: isLoadingOrders, 
    error: ordersError 
  } = useQuery({
    queryKey: ['orders'],
    queryFn: getAllOrders,
  });
  
  const { 
    data: selectedOrder, 
    isLoading: isLoadingOrder, 
    error: orderError 
  } = useQuery({
    queryKey: ['order', selectedOrderId],
    queryFn: () => selectedOrderId ? getOrderById(selectedOrderId) : null,
    enabled: !!selectedOrderId,
  });
  
  const createOrderMutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
  
  const updateOrderStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: string }) => 
      updateOrderStatus(id, status as any),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      queryClient.invalidateQueries({ queryKey: ['order', selectedOrderId] });
    },
  });
  
  return {
    orders,
    isLoadingOrders,
    ordersError,
    selectedOrder,
    isLoadingOrder,
    orderError,
    setSelectedOrderId,
    createOrder: createOrderMutation.mutate,
    isCreatingOrder: createOrderMutation.isPending,
    updateOrderStatus: updateOrderStatusMutation.mutate,
    isUpdatingOrderStatus: updateOrderStatusMutation.isPending,
  };
};
