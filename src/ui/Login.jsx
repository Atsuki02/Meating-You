import React, { useEffect, useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';
import { useDispatch } from 'react-redux';
import { createUser, loginUser, setToken } from '../features/user/userSlice';

function Login({ setFormState }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log(data);
      if (error) throw error;

      if (data) {
        const userData = {
          fullName: data.user.user_metadata.full_name,
          email: data.user.email,
          password: password,
        };

        dispatch(setToken(data));
        dispatch(loginUser());
        dispatch(createUser(userData));
        navigate('/home');
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      <div className="mt-6 flex flex-col items-center justify-center space-y-6 lg:mt-6">
        <input
          className="w-full rounded-sm px-4 py-2 focus:outline-red-800 "
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mb-6 w-full rounded-sm px-4 py-2 focus:outline-red-800 "
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="login" onClick={handleLogin}>
          Login
        </Button>
      </div>
      <div className="mt-6">
        <p>
          Not a member?
          <span
            className="cursor-pointer pl-3 text-blue-600 underline hover:text-blue-900"
            onClick={() => setFormState(false)}
          >
            Sign up now
          </span>
        </p>
      </div>
    </>
  );
}

export default Login;
