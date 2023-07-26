import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createBooking as createBookingApi } from './apiBooking';
import { useNavigate } from 'react-router-dom';

export function useCreateBooking() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createBooking, isLoading: isCreating } = useMutation({
    mutationFn: createBookingApi,
    onSuccess: (data) => {
      toast.success('Booking successfully created');
      navigate('/reservationCompletePage', { replace: true });
      queryClient.invalidateQueries({
        queryKey: ['reservations'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createBooking, isCreating };
}
