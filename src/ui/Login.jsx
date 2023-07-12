import React from 'react';
import Button from './Button';

function Login({ setFormState }) {
  return (
    <>
      <div className="mt-6 flex flex-col items-center justify-center space-y-6 lg:mt-6">
        <input
          className="w-full rounded-sm px-4 py-2 focus:outline-red-800 "
          type="email"
          placeholder="Email"
        />
        <input
          className="mb-6 w-full rounded-sm px-4 py-2 focus:outline-red-800 "
          type="password"
          placeholder="Password"
        />
        <Button type="login">Login</Button>
      </div>
      <div className="mt-6">
        <p>
          Not a member?
          <span
            className="cursor-pointer pl-3 text-blue-600"
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
