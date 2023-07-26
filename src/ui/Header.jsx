import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../features/form/formSlice';
import React from 'react';
import Logout from './Logout';
import User from './User';
import GoHome from './GoHome';

function Header({ color }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <header
        className={`lg:text:lg absolute left-0 top-0 z-30 flex h-20 w-full items-center justify-end bg-transparent p-4 text-xl font-bold ${
          color ? color : 'text-teal-700'
        } lg:px-12 `}
      >
        <div className="flex items-center justify-between space-x-6 ">
          <GoHome />
          {isLoggedIn ? <Logout /> : <User />}
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
