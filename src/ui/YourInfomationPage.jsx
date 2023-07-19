import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../features/form/formSlice';

function YourInformationPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleContinue() {
    const userData = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
    };
    dispatch(setUserData(userData));
    navigate('/confirmationPage');
  }

  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-teal-100">
      <div className="relative flex flex-col items-center justify-center space-y-4 p-4 lg:mx-auto  lg:w-1/2 lg:space-y-4 lg:p-0">
        <h1 className="pb-10 text-2xl font-bold lg:pb-2 lg:text-3xl">
          Your Information
        </h1>

        <div className="flex w-full flex-col items-start">
          <span className="pb-2">Email Address</span>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 w-full rounded-md text-black focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex w-full flex-col items-start pb-2">
          <span className="pb-2">First Name</span>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="h-10 w-full rounded-md text-black focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex w-full flex-col items-start pb-2">
          <span className="pb-2">Last Name</span>
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="h-10 w-full rounded-md text-black focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex w-full flex-col items-start pb-2">
          <span className="pb-2">Phone Number</span>
          <div className="flex w-full justify-end">
            <PhoneInput
              country={'jp'}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              inputProps={{
                className:
                  'h-10 w-full px-12 rounded-md text-black focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0',
              }}
            />
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default YourInformationPage;
