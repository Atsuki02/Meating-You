import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logout as logoutApi } from './apiAuth';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/form/formSlice';
import { toast } from 'react-hot-toast';

export function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      dispatch(logoutUser());
      localStorage.clear();
      sessionStorage.clear();
      queryClient.removeQueries();
      navigate('/auth', { replace: true });
      toast.success('You are successfully logged out');
    },
  });

  return { logout, isLoading };
}
