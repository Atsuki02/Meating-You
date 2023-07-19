import React from 'react';

const ReservationCompletePage = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-teal-100">
      <div className="relative flex flex-col items-center justify-center space-y-4 p-4 lg:mx-auto  lg:w-1/2 lg:space-y-6 lg:p-0">
        <h1 className="pb-10 text-2xl font-bold lg:pb-2 lg:text-3xl">
          Reservation Complete
        </h1>
        <p className="pb-4">Thank you for making a reservation!</p>
        <p className="pb-4">Your reservation is confirmed.</p>
        <p className="pb-4">We are looking forward to seeing you!</p>
      </div>
    </div>
  );
};

export default ReservationCompletePage;
