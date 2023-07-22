import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from './Button';
import Header from './Header';
import BackButton from './BackButton';
import { useNavigate } from 'react-router-dom';

const ReservationCompletePage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-teal-700 text-white">
      <Header color="text-white" />
      <BackButton color="text-white" />
      <div className="relative flex flex-col items-center justify-center space-y-4 p-4 lg:mx-auto  lg:w-1/2 lg:space-y-6 lg:p-0">
        <h1 className="pb-20 text-4xl font-bold lg:pb-8 lg:text-5xl">
          Hooray!
        </h1>
        <div className="pb-20 text-8xl lg:pb-8 ">
          <FontAwesomeIcon icon={faChampagneGlasses} />
        </div>
        <p className="pb-20 text-center text-2xl font-bold lg:pb-8">
          Your reservation
          <br />
          is confirmed!
        </p>
        <div className="flex flex-row space-x-4">
          <Button type="home" onClick={() => navigate('/home')}>
            Go to homepage
          </Button>
          <Button type="booking">My bookings</Button>
        </div>
      </div>
    </div>
  );
};

export default ReservationCompletePage;
