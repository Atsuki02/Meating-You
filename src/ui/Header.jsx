import React from 'react';
import Logout from './Logout';
import User from './User';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="lg:text:lg absolute left-0 top-0 z-30 flex h-20 w-full items-center justify-end bg-transparent p-4 text-xl font-bold text-white lg:px-12 ">
        <div className="flex items-center justify-between space-x-6 ">
          <User />
          <Logout />
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
