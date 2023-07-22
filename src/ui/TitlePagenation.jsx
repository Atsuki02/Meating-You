import React from 'react';

function TitlePagenation({ title, page }) {
  return (
    <h1 className="relative mb-10 pb-6 text-2xl font-bold lg:pb-10 lg:text-3xl">
      {title}
      <span className="absolute bottom-0 left-0 h-2 w-full bg-slate-100"></span>
      <span
        className={`absolute bottom-0 ${
          page === '1'
            ? 'left-0'
            : page === '3'
            ? 'right-0'
            : page === '2'
            ? 'left-1/3'
            : ''
        } h-2 w-1/3 bg-teal-600`}
      ></span>
    </h1>
  );
}

export default TitlePagenation;
