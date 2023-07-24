import React, { useState } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';
import { useSignup } from '../utils/useSignup';
import SpinnerMini from './SpinnerMini';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading } = useSignup();

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(createUser(fullName, email, password));
    signup({ fullName, email, password });
  }

  return (
    <>
      <div className="mt-6 flex flex-col items-center justify-center space-y-6 lg:mt-6">
        <input
          className="w-full rounded-sm px-4 py-2 focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0"
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isLoading}
        />
        <input
          className="w-full rounded-sm px-4 py-2 focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0 "
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <input
          className="mb-6 w-full rounded-sm px-4 py-2 focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />

        <Button type="login" onClick={handleSubmit} disabled={isLoading}>
          {!isLoading ? 'Sign up' : <SpinnerMini />}
        </Button>
      </div>
    </>
  );
}

export default SignUp;
