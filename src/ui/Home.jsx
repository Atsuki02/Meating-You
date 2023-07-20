import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Header from './Header';

function Home() {
  return (
    <div className="relative h-screen w-screen bg-teal-100 ">
      <div className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 justify-center ">
        <Link to="/table">
          <button className="shadow-3xl flex items-center justify-between space-x-4 rounded-xl border-2 border-transparent bg-teal-500 px-6 py-4 text-white lg:space-x-6 lg:px-10 lg:text-lg">
            <p>Book a table</p>
            <FontAwesomeIcon icon={faUtensils} size="2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
