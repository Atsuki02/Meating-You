import React from 'react';
import Button from './Button';

function SignUp() {
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
        <input
          className="mb-6 w-full rounded-sm px-4 py-2 focus:outline-red-800 "
          type="password"
          placeholder="Confirm password"
        />
        <Button type="login">Sign up</Button>
      </div>
    </>
  );
}

export default SignUp;
