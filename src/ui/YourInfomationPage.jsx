import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../features/form/formSlice';
import Button from './Button';

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
    <div className="flex h-screen w-screen items-center justify-center bg-white px-4 py-6 md:h-auto md:px-10 md:py-14 ">
      <div className="flex w-full flex-col items-center justify-center space-y-8 lg:mx-auto lg:w-1/2 lg:space-y-6 lg:p-0">
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

        <Button onClick={handleContinue} type="continue">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default YourInformationPage;
