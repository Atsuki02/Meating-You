import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTableType } from '../features/form/formSlice';
import Button from './Button';
import TitlePagenation from './TitlePagenation';
import BackButton from './BackButton';

function Table() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tableOptions = [
    {
      id: 1,
      name: 'Fantasy stylish Table',
      imageUrl: '/image/table1.jpg',
    },
    {
      id: 2,
      name: 'Modern Fashionable Table',
      imageUrl: '/image/table2.jpg',
    },
    {
      id: 3,
      name: 'Comfortable sofa Table',
      imageUrl: '/image/table3.jpg',
    },
  ];
  const [selectedTable, setSelectedTable] = useState(tableOptions[0]);

  function handleNextPage(e) {
    e.preventDefault();
    const tableData = {
      tableType: selectedTable.name,
      tableImage: selectedTable.imageUrl,
    };
    dispatch(setTableType(tableData));
    navigate('/yourInformationPage');
  }

  return (
    <form
      onSubmit={handleNextPage}
      className="flex min-h-screen w-screen items-center justify-center bg-white px-4 py-6 md:h-auto md:px-10 md:py-14 "
    >
      <BackButton />
      <div className="flex w-full flex-col items-center justify-center space-y-10 lg:mx-auto lg:w-2/3 lg:space-y-6 lg:p-0">
        <TitlePagenation title="Table Type Selection" page="2" />
        <div className="flex w-full overflow-x-scroll border-slate-200">
          {tableOptions.map((table) => (
            <div
              className={`flex w-[80%] flex-shrink-0 flex-col justify-around space-y-6 border-[2px] border-slate-200 px-6 py-4 lg:space-y-8 lg:px-10 lg:py-14 ${
                selectedTable.id === table.id
                  ? 'border-[4px] border-teal-700 '
                  : ''
              }`}
              key={table.id}
              onClick={() => setSelectedTable(table)}
            >
              <span className="text-base font-bold italic lg:text-2xl">
                {table.name}
              </span>
              <img
                src={table.imageUrl}
                alt={table.name}
                className="m-1 cursor-pointer rounded-md p-2 "
              />
            </div>
          ))}
        </div>
        <span className=" text-center">
          {Array.from({ length: tableOptions.length }, (_, i) => (
            <span
              key={i}
              className={`text-xl ${
                i === selectedTable.id - 1 ? 'text-teal-600' : 'text-gray-400'
              }`}
            >
              •
            </span>
          ))}
        </span>

        <Button type="continue">Continue</Button>
      </div>
    </form>
  );
}

export default Table;
