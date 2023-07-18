import React from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative h-screen w-screen bg-[url('./image/sp-top1.JPG')] bg-cover bg-center bg-no-repeat text-center after:absolute after:bottom-0 after:left-0  after:right-0 after:top-0 after:z-10 after:bg-custom-background lg:bg-[url('./image/top1.JPG')]">
      <Header />
      <div className="absolute left-10 top-40 z-30 space-y-3 text-left text-4xl font-bold italic tracking-wider text-white lg:left-24 lg:top-28 lg:text-5xl">
        <h1>Welcome to</h1>
        <h1>Hokuden</h1>
      </div>
      <div className="absolute left-1/2 top-3/4 z-30 flex -translate-x-1/2 -translate-y-1/2 justify-center ">
        <Link to="/table">
          <button className="flex items-center justify-between space-x-4 rounded-xl border-2 bg-red-800 px-6 py-4 text-white lg:space-x-6 lg:px-10 lg:text-lg">
            <p>Book a table</p>
            <FontAwesomeIcon icon={faUtensils} size="2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
