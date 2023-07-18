import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import Header from './Header';
import Button from './Button';

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
    console.log('newValue:', newDate);
    setDate(newDate);
  };

  return (
    <div className="relative h-screen w-screen bg-[url('./image/sp-top1.JPG')] bg-cover bg-center bg-no-repeat text-center text-white after:absolute after:bottom-0 after:left-0 after:right-0  after:top-0 after:z-10 after:bg-custom-background lg:bg-[url('./image/top1.JPG')]">
      <Header />
      <div className="relative z-20 mx-auto flex flex-col items-center justify-center space-x-10 p-10 lg:w-1/2 lg:space-y-6  lg:py-0">
        <h1 className="pb-5 text-xl font-bold lg:pb-0 lg:text-3xl">
          Book a table
        </h1>
        <div className="flex w-full flex-col items-start">
          <span className="pb-2">Number of people</span>
          <input
            type="number"
            placeholder="0"
            min={1}
            max={10}
            className="h-10 w-full rounded-md text-black focus:border-2 focus:border-red-800 focus:outline-none focus:ring-0"
          />
        </div>
        <div className="flex w-full flex-col items-start">
          <span className="pb-2">Date of reservations</span>
          <Datepicker
            minDate={new Date()}
            disabledDates={[
              {
                startDate: nextThursday,
                endDate: '2023-02-05',
              },
            ]}
            primaryColor={'red'}
            asSingle={true}
            value={date}
            onChange={handleValueChange}
            useRange={false}
            readOnly={true}
            inputClassName="w-full h-10 rounded-md focus:ring-0 focus:border-2 focus:border-red-800 bg-white"
          />
        </div>
        <div className="flex w-full flex-col items-start pb-2">
          <span className="pb-2">Time of reservations</span>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="h-10 w-full rounded-md text-black focus:border-2 focus:border-red-800 focus:outline-none focus:ring-0"
          >
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
        <Button type="next">Next</Button>
      </div>
    </div>
  );
}

export default Table;
