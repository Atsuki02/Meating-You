import React from 'react';
import Logout from './Logout';
import User from './User';
import BackButton from './BackButton';

function Header() {
  return (
    <header className="lg:text:lg sticky left-0 top-0 z-30 flex h-20 items-center justify-between bg-transparent p-4 text-xl font-bold text-white lg:px-12 ">
      <BackButton />
      <div className="flex items-center justify-between space-x-6 ">
        <User />
        <Logout />
      </div>
    </header>
  );
}

export default Header;
