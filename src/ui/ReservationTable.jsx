import { useQuery } from '@tanstack/react-query';
import { fetchReservations } from '../utils/apiBooking';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { getFormData } from '../features/form/formSlice';
// prettier-ignore
import { faCalendar, faClock, faPerson } from '@fortawesome/free-solid-svg-icons';
import Spinner from './Spinner';
import Button from './Button';
import SpinnerMini from './SpinnerMini';

function ReservationTable({ setSelectedReservation, isDeleting }) {
  const userId = useSelector(getFormData).userId;
  const { isLoading, data: reservations } = useQuery(['reservations'], () =>
    fetchReservations(userId)
  );

  if (isLoading) return <Spinner />;

  return (
    <>
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
            onClick={() => setSelectedReservation(reservation)}
            disabled={isDeleting}
          >
            {!isDeleting ? 'Delete' : <SpinnerMini />}
          </Button>
        </div>
      ))}
    </>
  );
}

export default ReservationTable;
