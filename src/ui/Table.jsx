import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setReservationData } from '../features/form/formSlice';

function Table() {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const [selectedTime, setSelectedTime] = useState('17:30');

  const timeOptions = [
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
  ];

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

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
      reservationTime: selectedTime,
      numberOfPeople: numberOfPeople,
    };

    dispatch(setReservationData(reservationData));
    navigate('/yourInformationPage');
  }
  return (
    <form className="flex h-screen w-screen items-center justify-center bg-white px-4 py-6 md:h-auto md:px-10 md:py-14 ">
      <div className="flex w-full flex-col items-center justify-center space-y-8 lg:mx-auto lg:w-1/2 lg:space-y-6 lg:p-0">
        <h1 className="pb-6 text-2xl font-bold lg:pb-10 lg:text-3xl">
          Book your table
        </h1>
        <div className="flex w-full flex-col items-start rounded-md border-2 border-slate-200 p-4">
          <span className="pb-2 font-semibold">Date</span>
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
        <div className="flex w-full flex-col items-start rounded-md border-2 border-slate-200 p-4">
          <span className="pb-2 font-semibold">Time</span>
          <div className="flex flex-wrap">
            {timeOptions.map((time) => (
              <div
                key={time}
                className={`m-1 cursor-pointer rounded-md border-[1px] border-slate-200 p-2 ${
                  selectedTime === time ? 'bg-teal-600 text-white' : ''
                }`}
                onClick={() => handleTimeSelection(time)}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-between rounded-md border-2 border-slate-200 p-4">
          <span className="font-semibold">Guests</span>
          <input
            type="number"
            placeholder="0"
            min={1}
            max={10}
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
            className="h-10 rounded-md text-black focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0"
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
