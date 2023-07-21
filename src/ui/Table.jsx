import React, { useState } from 'react';
import Button from './Button';

function Table() {
  const [selectedTable, setSelectedTable] = useState(null);

  const tableOptions = [
    {
      id: 1,
      name: 'Table Type 1',
      imageUrl: 'image/table1.jpg',
    },
    {
      id: 2,
      name: 'Table Type 2',
      imageUrl: 'image/table2.jpg',
    },
    {
      id: 3,
      name: 'Table Type 3',
      imageUrl: 'image/table3.jpg',
    },
  ];

  const handleTableSelection = (tableId) => {
    setSelectedTable(tableId);
  };

  return (
    <form className="flex min-h-screen w-screen items-center justify-center bg-white px-4 py-6 md:h-auto md:px-10 md:py-14 ">
      <div className="flex w-full flex-col items-center justify-center space-y-8 lg:mx-auto lg:w-1/2 lg:space-y-6 lg:p-0">
        <h1 className="pb-6 pt-20 text-2xl font-bold lg:pb-10 lg:text-3xl">
          Choose a table type
        </h1>
        <div className="flex h-[240px] w-[380px] overflow-x-scroll">
          {tableOptions.map((table) => (
            <div
              className="m-1 w-[80%] flex-shrink-0  border-[1px] border-slate-200 p-2"
              key={table.id}
              onClick={() => handleTableSelection(table.id)}
            >
              <span className="font-bold">{table.name}</span>
              <img
                src={table.imageUrl}
                alt={table.name}
                className={`m-1 cursor-pointer rounded-md  p-2 ${
                  selectedTable === table ? 'bg-teal-600 text-white' : ''
                }`}
              />
            </div>
          ))}
        </div>
        <Button type="continue">Continue</Button>
      </div>
    </form>
  );
}

export default Table;
