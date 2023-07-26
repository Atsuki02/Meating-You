import { useState } from 'react';
import { useLogin } from '../utils/useLogin';
import Button from './Button';
import SpinnerMini from './SpinnerMini';

function Login({ setFormState }) {
  const [email, setEmail] = useState('testtest@test.com');
  const [password, setPassword] = useState('testtest');
  const { login, isLoading } = useLogin();

  return (
    <>
      <div className="mt-6 flex flex-col items-center justify-center space-y-6 lg:mt-6">
        <input
          className="focus: w-full rounded-sm px-4 py-2 focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <input
          className="mb-6 w-full  rounded-sm px-4 py-2 focus:border-2 focus:border-teal-600  focus:ring-0 "
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <Button
          type="login"
          onClick={(e) => {
            e.preventDefault();
            login({ email, password });
          }}
          disabled={isLoading}
        >
          {!isLoading ? 'Login' : <SpinnerMini />}
        </Button>
      </div>
      <div className="mt-6 text-center">
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
