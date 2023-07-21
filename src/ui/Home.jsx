import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen w-screen md:relative">
      <div className="h-3/5 w-full bg-[url('/image/topbg-1.jpg')] bg-cover bg-center md:absolute md:h-screen md:w-screen md:bg-[url('/image/pc-topbg-1.jpg')]"></div>
      <div className="h-2/5 bg-white  p-6 text-black md:absolute md:left-10 md:top-20 md:bg-transparent md:text-white">
        <h1 className="py-4 text-3xl font-bold md:py-8 md:text-5xl">
          Book your table in a few clicks
        </h1>
        <p className="pb-10 text-lg font-semibold italic md:absolute  md:text-xl ">
          Secure your spot for an unforgettable dining experience!
        </p>
        <Link to="/table">
          <button className="mb-6 flex w-full items-center justify-center space-x-4 rounded-md border-2 border-transparent bg-teal-500 px-2 py-4 text-lg text-white shadow-xl md:absolute md:top-72 lg:w-1/2 lg:space-x-6 lg:px-10 lg:text-lg">
            <p className="font-semibold">Book a table</p>
            <FontAwesomeIcon icon={faUtensils} size="lg" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
