import { useState } from 'react';
import Login from '../authentication/Login';
import SignUp from '../authentication/SignUp';
import BackButton from '../../ui/BackButton';

function Auth() {
  const [formState, setFormState] = useState(true);

  const handleFormToggle = () => {
    setFormState((prevState) => !prevState);
  };

  const formTitle = formState ? 'Login' : 'Sign up';

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-teal-700 bg-cover bg-center">
      <BackButton color="text-white" />
      <form className="z-30 m-4 h-[450px] w-[350px] rounded-2xl border-4 border-teal-700 bg-white bg-opacity-60 p-8 text-black shadow-slate-800 lg:m-10 lg:h-[450px] lg:w-[350px]">
        <h2 className="pb-4 text-center text-2xl font-bold lg:pb-6">
          {formTitle}
        </h2>
        <div className="mt-4 flex w-full cursor-pointer flex-row justify-between overflow-hidden rounded-sm text-center">
          <p
            className={`w-full ${
              formState ? 'bg-teal-600 text-white' : 'bg-white text-black'
            } px-10 py-2`}
            onClick={handleFormToggle}
          >
            Login
          </p>
          <p
            className={`w-full ${
              formState ? 'bg-white text-black' : 'bg-teal-600 text-white'
            } px-10 py-2`}
            onClick={handleFormToggle}
          >
            Sign up
          </p>
        </div>
        {formState ? <Login setFormState={handleFormToggle} /> : <SignUp />}
      </form>
    </div>
  );
}

export default Auth;
