import React from 'react';
import { getUserData } from '../features/user/userSlice';
import { useSelector } from 'react-redux';

function Home() {
  const userData = useSelector(getUserData);
  return (
    <div className="relative h-screen w-screen bg-[url('./image/sp-top1.JPG')] bg-cover bg-center bg-no-repeat text-center  after:absolute after:bottom-0 after:left-0  after:right-0 after:top-0 after:z-10 after:bg-custom-background lg:bg-[url('./image/top1.JPG')]">
      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center p-10 text-white  ">
        <h1 className="pb-10 text-3xl font-extrabold lg:text-5xl">
          Hi, {userData.fullName}
        </h1>
        <h1 className="pb-10 text-3xl font-extrabold lg:text-5xl">
          Welcome to Yakiniku Hokuden!
        </h1>
      </div>
    </div>
  );
}

export default Home;
