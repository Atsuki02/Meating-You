import { useDispatch, useSelector } from 'react-redux';
import { getFormData, setUserId } from '../features/form/formSlice';
import { useCreateBooking } from '../features/bookings/useCreateBooking';
import Button from '../ui/Button';
import BackButton from '../ui/BackButton';
import SpinnerMini from '../ui/SpinnerMini';
import DataItem from '../features/form/DataItem';
import { useUser } from '../features/authentication/useUser';
import { useEffect } from 'react';

const randomNumber = Math.floor(Math.random() * 999999999);

const ConfirmationPage = () => {
  const formData = useSelector(getFormData);
  const { createBooking, isCreating } = useCreateBooking();
  const { isAuthenticated } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(setUserId(randomNumber));
    }
  }, [isAuthenticated, dispatch]);

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-white px-4 py-6 md:h-auto md:px-10 md:py-14 ">
      <BackButton />
      <div className="flex w-full flex-col items-center justify-center space-y-10 pt-20 lg:mx-auto lg:w-2/3 lg:space-y-6 lg:p-0">
        <h1 className="mb-4 text-2xl font-bold lg:mt-10 lg:pb-10 lg:text-3xl">
          Check Your Details
        </h1>

        <DataItem label="First Name" value={formData.firstName} />
        <DataItem label="Last Name" value={formData.lastName} />
        <DataItem label="Email Address" value={formData.email} />
        <DataItem label="Phone Number" value={formData.phoneNumber} />
        <DataItem label="Reservation Date" value={formData.reservationDate} />
        <DataItem label="Reservation Time" value={formData.reservationTime} />
        <DataItem label="Number of People" value={formData.numberOfPeople} />
        <DataItem label="Table type" value={formData.tableType} />

        <Button
          type="continue"
          onClick={() => createBooking(formData)}
          disabled={isCreating}
        >
          {!isCreating ? 'Confirm Booking' : <SpinnerMini />}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
