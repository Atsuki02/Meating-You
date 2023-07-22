import React from 'react';
import BackButton from './BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faClock,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

function YourBooking() {
  return (
    <div className="flex min-h-screen w-screen items-start justify-center bg-white px-4 py-6 pt-28 md:h-auto md:px-10 md:py-14 ">
      <BackButton />
      <div className="flex w-full flex-col items-start justify-center space-y-10 lg:mx-auto lg:w-2/3 lg:space-y-6 lg:p-0">
        <h1 className="text-3xl font-extrabold lg:mt-10 lg:pb-10 lg:text-4xl">
          Your Bookings
        </h1>
        <div className="w-full border-2 border-slate-200 p-4 shadow-xl">
          <img
            src="/image/table1.jpg"
            alt="table1"
            className=" h-44 w-80 lg:h-56 lg:w-96"
          ></img>
          <div className="flex flex-col space-y-1 text-stone-500 lg:space-y-2">
            <p className="pb-1 pt-4 text-lg font-bold text-black lg:text-2xl">
              Fantastic classic table
            </p>
            <p className="text-base lg:text-lg ">
              <span className="pr-2">
                <FontAwesomeIcon icon={faCalendar} />
              </span>
              12 May 2022
            </p>
            <p className="text-base lg:text-lg">
              <span className="pr-2">
                <FontAwesomeIcon icon={faClock} />
              </span>
              18:00
            </p>
            <p className="pb-6 text-base lg:text-lg">
              <span className="pr-2">
                <FontAwesomeIcon icon={faPerson} />
              </span>
              4 guests
            </p>
          </div>
          <Button type="continue">Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default YourBooking;
