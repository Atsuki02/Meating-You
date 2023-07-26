import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../features/form/formSlice';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import Button from '../ui/Button';
import TitlePagenation from '../ui/TitlePagenation';
import BackButton from '../ui/BackButton';
import { toast } from 'react-hot-toast';
import Input from '../features/form/Input';

function YourInformationPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNextPage = (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      toast('Please put your phone number.');
      return;
    }
    const userData = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
    };
    dispatch(setUserData(userData));
    navigate('/confirmationPage');
  };

  return (
    <form
      onSubmit={handleNextPage}
      className="flex min-h-screen w-screen items-center justify-center bg-white px-4 py-6 md:h-auto md:px-10 md:py-14 "
    >
      <BackButton />
      <div className="mt-10 flex w-full flex-col items-center justify-center space-y-3 lg:mx-auto lg:w-1/2 lg:space-y-6 lg:p-0">
        <TitlePagenation title="Your Information" page="3" />

        <Input
          label="First Name"
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <Input
          label="Last Name"
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Input
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex w-full flex-col items-start rounded-md border-2 border-slate-200 p-4">
          <span className="pb-2 font-semibold">Phone Number</span>
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

        <Button type="continue">Continue</Button>
      </div>
    </form>
  );
}

export default YourInformationPage;
