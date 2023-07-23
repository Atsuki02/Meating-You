import React, { useEffect, useState } from 'react';
import BackButton from './BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faClock,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { supabase } from '../../supabase';

function YourBooking() {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);
  //   const [userId, setUserId] = useState();

  //   useEffect(() => {
  //     async function getUser() {
  //       try {
  //         const { data: user, error } = await supabase.auth.getUser();
  //         const userId = user ? user.id : null;
  //         setUserId(userId);
  //         if (error) throw error;
  //       } catch (error) {
  //         setError(error.message || 'Failed to fetch user.');
  //       }
  //     }

  //     getUser();
  //   }, []);

  useEffect(() => {
    async function fetchReservations() {
      try {
        let { data: reservations, error } = await supabase
          .from('reservations')
          .select('*');
        //   .eq('user_id', userId);
        if (error) throw error;
        setReservations(reservations);
      } catch (error) {
        setError(error.message || 'Failed to fetch reservations.');
      }
    }

    fetchReservations();
  }, []);

  const deleteReservation = async (id) => {
    try {
      const { error } = await supabase
        .from('reservations')
        .delete()
        .eq('id', id);
      if (error) throw error;
      setReservations((prevReservations) =>
        prevReservations.filter((reservation) => reservation.id !== id)
      );
    } catch (error) {
      setError('Failed to delete reservation.');
    }
  };

  return (
    <div className="flex min-h-screen w-screen items-start justify-center bg-white px-4 py-6 pt-28 md:h-auto md:px-10 md:py-14 ">
      <BackButton />
      <div className="flex w-full flex-col items-start justify-center space-y-10 lg:mx-auto lg:w-2/3 lg:space-y-6 lg:p-0">
        <h1 className="text-3xl font-extrabold lg:mt-10 lg:pb-10 lg:text-4xl">
          Your Bookings
        </h1>
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            className="w-full border-2 border-slate-200 p-4 shadow-xl"
          >
            <img
              src={reservation.tableImage}
              alt={reservation.tableName}
              className="h-44 w-80 lg:h-56 lg:w-96"
            />
            <div className="flex flex-col space-y-1 text-stone-500 lg:space-y-2">
              <p className="pb-1 pt-4 text-lg font-bold text-black lg:text-2xl">
                {reservation.tableName}
              </p>
              <p className="text-base lg:text-lg ">
                <span className="pr-2">
                  <FontAwesomeIcon icon={faCalendar} />
                </span>
                {reservation.reservationDate}
              </p>
              <p className="text-base lg:text-lg">
                <span className="pr-2">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                {reservation.reservationTime}
              </p>
              <p className="pb-6 text-base lg:text-lg">
                <span className="pr-2">
                  <FontAwesomeIcon icon={faPerson} />
                </span>
                {reservation.numberOfPeople} guests
              </p>
            </div>
            <Button
              type="continue"
              onClick={() => deleteReservation(reservation.id)}
            >
              Cancel
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBooking;
