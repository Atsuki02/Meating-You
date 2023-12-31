import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from './apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loginUser, setUserId } from '../form/formSlice';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      dispatch(setUserId(user.user.id));
      dispatch(loginUser());
      navigate('/yourbooking', { replace: true });
      toast.success('You are successfully logged in');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}
