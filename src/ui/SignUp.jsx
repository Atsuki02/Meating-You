import React, { useState } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(createUser(userName, email, password));
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: userName,
          },
        },
      });
      if (error) throw error;
      alert('Check you email for verificaiton link');
      navigate('/home');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <div className="mt-6 flex flex-col items-center justify-center space-y-6 lg:mt-6">
        <input
          className="w-full rounded-sm px-4 py-2 focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0"
          type="text"
          placeholder="Fullname"
          value={userName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="w-full rounded-sm px-4 py-2 focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0 "
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mb-6 w-full rounded-sm px-4 py-2 focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="login" onClick={handleSubmit}>
          Sign up
        </Button>
      </div>
    </>
  );
}

export default SignUp;
