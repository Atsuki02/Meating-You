import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createBooking as createBookingApi } from './apiBooking';

export function useCreateBooking() {
  const queryClient = useQueryClient();

  const { mutate: createBooking, isLoading: isCreating } = useMutation({
    mutationFn: createBookingApi,
    onSuccess: (data) => {
      toast.success('Booking successfully created');
      queryClient.invalidateQueries({
        queryKey: ['reservations'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createBooking, isCreating };
}
