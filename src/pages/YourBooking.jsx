import { useState } from 'react';
import { useDeleteBooking } from '../features/bookings/useDeleteBooking';
import BackButton from '../ui/BackButton';
import ConfirmDelete from '../features/bookings/ConfirmDelete';
import ReservationTable from '../features/bookings/ReservationTable';

function YourBooking() {
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const [selectedReservation, setSelectedReservation] = useState(null);

  const handleConfirmDelete = () => {
    deleteBooking(selectedReservation.id);
    setSelectedReservation(null);
  };

  const handleCloseModal = () => {
    setSelectedReservation(null);
  };

  return (
    <div className="flex min-h-screen w-screen items-start justify-center bg-white px-4 py-6 pt-28 md:h-auto md:px-10 md:py-14 ">
      <BackButton />
      <div className="flex w-full flex-col items-start justify-center space-y-10 lg:mx-auto lg:w-2/3 lg:space-y-6 lg:p-0">
        <h1 className="text-3xl font-extrabold lg:mt-10 lg:pb-10 lg:text-4xl">
          Your Bookings
        </h1>
        <ReservationTable
          setSelectedReservation={setSelectedReservation}
          isDeleting={isDeleting}
        />
      </div>
      {selectedReservation && (
        <ConfirmDelete
          onConfirm={handleConfirmDelete}
          disabled={isDeleting}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default YourBooking;
