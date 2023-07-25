import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFormData } from '../features/form/formSlice';
import { useCreateBooking } from '../utils/useCreateBooking';
import Button from './Button';
import BackButton from './BackButton';
import SpinnerMini from './SpinnerMini';

const ConfirmationPage = () => {
  const formData = useSelector(getFormData);
  const navigate = useNavigate();
  const { createBooking, isCreating } = useCreateBooking();

  function handleConfirm() {
    createBooking(formData);
    navigate('/reservationCompletePage');
  }

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-white px-4 py-6 md:h-auto md:px-10 md:py-14 ">
      <BackButton />
      <div className="flex w-full flex-col items-center justify-center space-y-10 pt-20 lg:mx-auto lg:w-2/3 lg:space-y-6 lg:p-0">
        <h1 className="mb-4 text-2xl font-bold lg:mt-10 lg:pb-10 lg:text-3xl">
          Check Your Details
        </h1>

        <div className="flex w-full flex-col items-start border-b-[1px] border-teal-700 pb-2 lg:flex-row lg:space-x-3">
          <span className="pb-2 font-semibold">Email Address:</span>
          <span className=" pb-2">{formData.email}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-teal-700 pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">First Name:</span>
          <span className=" pb-2">{formData.firstName}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-teal-700 pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">Last Name:</span>
          <span className=" pb-2">{formData.lastName}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-teal-700 pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">Phone Number:</span>
          <span className=" pb-2">{formData.phoneNumber}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-teal-700 pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">Reservation Date:</span>
          <span className=" pb-2">{formData.reservationDate}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-teal-700 pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">Reservation Time:</span>
          <span className=" pb-2">{formData.reservationTime}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-teal-700 pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">Number of People:</span>
          <span className=" pb-2">{formData.numberOfPeople}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-teal-700   pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">Table type:</span>
          <span className=" pb-2">{formData.tableType}</span>
        </div>

        <Button type="continue" onClick={handleConfirm} disabled={isCreating}>
          {!isCreating ? 'Confirm Booking' : <SpinnerMini />}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
