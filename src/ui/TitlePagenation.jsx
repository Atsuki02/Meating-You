import React from 'react';

function TitlePagenation({ title, page }) {
  let indicatorPosition = 'left-0';

  switch (page) {
    case '1':
      indicatorPosition = 'left-0';
      break;
    case '2':
      indicatorPosition = 'left-1/3';
      break;
    case '3':
      indicatorPosition = 'right-0';
      break;
    default:
      break;
  }

  return (
    <h1 className="relative mb-6 pb-6 pt-10 text-2xl font-bold lg:pb-10 lg:text-3xl">
      {title}
      <span className="absolute bottom-0 left-0 h-2 w-full bg-slate-100"></span>
      <span
        className={`absolute bottom-0 ${indicatorPosition} h-2 w-1/3 bg-teal-600`}
      ></span>
    </h1>
  );
}

export default TitlePagenation;
