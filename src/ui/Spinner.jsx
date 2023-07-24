import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const Spinner = () => {
  return (
    <div className="mx-auto h-16 w-16">
      <BiLoaderAlt className="h-16 w-16 animate-spin text-teal-700" />
    </div>
  );
};

export default Spinner;
