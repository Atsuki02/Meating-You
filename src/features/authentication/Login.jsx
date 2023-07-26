import { useState } from 'react';
import { useLogin } from './useLogin';
import Button from '../../ui/Button';
import SpinnerMini from '../../ui/SpinnerMini';

function Login({ setFormState }) {
  const [email, setEmail] = useState('testtest@test.com');
  const [password, setPassword] = useState('testtest');
  const { login, isLoading } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <div className="mt-6 flex flex-col items-center justify-center space-y-6 lg:mt-6">
        <input
          className="w-full rounded-sm px-4 py-2 focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <input
          className="mb-6 w-full rounded-sm px-4 py-2 focus:border-2 focus:border-teal-600 focus:ring-0"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <Button type="login" onClick={handleLogin} disabled={isLoading}>
          {!isLoading ? 'Login' : <SpinnerMini />}
        </Button>
      </div>
      <div className="mt-6 text-center">
        <p>
          Not a member?{' '}
          <span
            className="cursor-pointer text-blue-600 underline hover:text-blue-900"
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
