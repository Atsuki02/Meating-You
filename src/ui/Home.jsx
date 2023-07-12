import React from "react";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function Home() {
  const [formState, setFormState] = useState(true);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-[url('./image/sp-top1.JPG')] bg-cover bg-center bg-no-repeat text-center  after:absolute after:bottom-0 after:left-0  after:right-0 after:top-0 after:z-10 after:bg-custom-background lg:bg-[url('./image/top1.JPG')]">
      <form className="z-30 m-4 h-[420px] w-[350px] rounded-2xl border-4 border-red-800 bg-slate-200 bg-opacity-60 p-8 text-black shadow-slate-800 lg:m-10 lg:h-[450px] lg:w-[400px]">
        <h2 className="pb-4 text-2xl font-bold lg:pb-6">
          {formState ? "Login" : "Sign up"}
        </h2>
        <div className="mt-4 flex w-full cursor-pointer flex-row justify-between overflow-hidden rounded-sm">
          <p
            className={`w-full ${
              formState ? "bg-red-800 text-white" : "bg-white text-black"
            } px-10 py-2`}
            onClick={() => setFormState(true)}
          >
            Login
          </p>
          <p
            className={`w-full ${
              formState ? "bg-white text-black" : "bg-red-800 text-white"
            } px-10 py-2`}
            onClick={() => setFormState(false)}
          >
            Sign up
          </p>
        </div>
        {formState ? <Login setFormState={setFormState} /> : <SignUp />}
      </form>
    </div>
  );
}

export default Home;
