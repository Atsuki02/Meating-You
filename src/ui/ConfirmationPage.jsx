import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFormData } from '../features/form/formSlice';
import { supabase } from '../../supabase';

const ConfirmationPage = () => {
  const formData = useSelector(getFormData);
  const navigate = useNavigate();

  async function handleConfirm() {
    try {
      const { data, error } = await supabase
        .from('reservations')
        .insert(formData);
      navigate('/reservationCompletePage');
      if (error) {
        console.error('Error occurred', error);
      } else {
        console.log('Succeeded', data);
      }
    } catch (error) {
      console.error('Error occurred', error);
    }
  }

  return (
    <div className="relative flex min-h-screen w-screen items-center justify-center bg-teal-100 px-2 py-8">
      <div className="relative flex w-full flex-col items-center justify-center space-y-4 p-4 lg:mx-auto  lg:w-1/2 lg:space-y-6 lg:p-0">
        <h1 className="pb-10 text-2xl font-bold lg:pb-2 lg:text-3xl">
          Confirmation
        </h1>

        <div className="flex w-full flex-col items-start border-b-[1px] border-gray-400 pb-2 lg:flex-row lg:space-x-3">
          <span className="pb-2 font-semibold">Email Address:</span>
          <span className=" pb-2">{formData.email}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-gray-400 pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">First Name:</span>
          <span className=" pb-2">{formData.firstName}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-gray-400 pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">Last Name:</span>
          <span className=" pb-2">{formData.lastName}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-gray-400 pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">Phone Number:</span>
          <span className=" pb-2">{formData.phoneNumber}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-gray-400 pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">Reservation Date:</span>
          <span className=" pb-2">{formData.reservationDate}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-gray-400 pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">Reservation Time:</span>
          <span className=" pb-2">{formData.reservationTime}</span>
        </div>

        <div className="flex w-full flex-col items-start border-b-[1px] border-gray-400 pb-2 lg:flex-row lg:space-x-6">
          <span className="pb-2 font-semibold">Number of People:</span>
          <span className=" pb-2">{formData.numberOfPeople}</span>
        </div>

        <button
          onClick={handleConfirm}
          className="rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
