import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setReservationData } from '../features/form/formSlice';
import { supabase } from '../../supabase';

function Table() {
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();
  const daysUntilNextThursday = (4 - currentDayOfWeek + 7) % 7;
  const nextThursday = new Date(currentDate);
  nextThursday.setDate(currentDate.getDate() + daysUntilNextThursday);

  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const [time, setTime] = useState('');

  const handleValueChange = (newDate) => {
    setDate(newDate);
  };

  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleNextPage(e) {
    e.preventDefault();
    const reservationData = {
      reservationDate: date.startDate,
      reservationTime: time,
      numberOfPeople: numberOfPeople,
    };

    dispatch(setReservationData(reservationData));
    navigate('/yourInformationPage');
  }
  return (
    <form className="relative flex h-screen w-screen items-center justify-center bg-teal-100 ">
      <div className="relative flex flex-col items-center justify-center space-y-4 p-4 lg:mx-auto  lg:w-1/2 lg:space-y-6 lg:p-0">
        <h1 className="pb-10 text-2xl font-bold lg:pb-2 lg:text-3xl">
          Book a table
        </h1>
        <div className="flex w-full flex-col items-start">
          <span className="pb-2">Date of reservations</span>
          <Datepicker
            minDate={new Date()}
            primaryColor={'teal'}
            asSingle={true}
            value={date}
            onChange={handleValueChange}
            useRange={false}
            readOnly={true}
            popoverDirection="down"
            inputClassName="w-full h-10 rounded-md focus:ring-0 focus:border-2 focus:border-teal-600 bg-white"
          />
        </div>
        <div className="flex w-full flex-col items-start pb-2">
          <span className="pb-2">Time of reservations</span>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="h-10 w-full rounded-md text-black focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0"
          >
            <option hidden></option>
            <option>17:30</option>
            <option>18:00</option>
            <option>18:30</option>
            <option>19:00</option>
            <option>19:30</option>
            <option>20:00</option>
            <option>20:30</option>
            <option>21:00</option>
            <option>21:30</option>
          </select>
        </div>
        <div className="flex w-full flex-col items-start pb-10">
          <span className="pb-2">Number of people</span>
          <input
            type="number"
            placeholder="0"
            min={1}
            max={10}
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
            className="h-10 w-full rounded-md text-black focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0"
          />
        </div>
        <Button type="continue" onClick={handleNextPage}>
          Continue
        </Button>
      </div>
    </form>
  );
}

export default Table;
