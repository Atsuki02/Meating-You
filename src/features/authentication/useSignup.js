import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signup as signupApi } from './apiAuth';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, setUserId } from '../form/formSlice';

export function useSignup() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      toast.success('Account successfully created!');
      dispatch(setUserId(user.user.id));
      dispatch(loginUser());
      navigate('/', { replace: true });
    },
    onError: (err) => {
      toast.error('Provided email or password are invalid');
    },
  });
  return { signup, isLoading };
}
