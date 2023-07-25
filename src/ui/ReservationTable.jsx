import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchReservations } from '../utils/apiBooking';
import Spinner from './Spinner';

function ReservationTable() {
  const {
    isLoading,
    data: reservations,
    error,
  } = useQuery({
    queryKey: ['reservations'],
    queryFn: fetchReservations,
  });

  if (isLoading) return <Spinner />;

  return <div>ReservationTable</div>;
}

export default ReservationTable;
