import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const styles = {
    login:
      'pointer shadow-3xl rounded-sm hover:border-2 hover:border-white w-full h-10 flex items-center justify-center text-white bg-teal-600 font-bold text-black shadow-2xl shadow-black px-4 py-3 md:px-8 md:py-2',
    continue:
      'mb-6 flex w-full items-center justify-center text-lg rounded-md border-2 border-transparent bg-teal-500 px-2 py-4 text-white shadow-xl lg:px-10 lg:text-lg',
    home: 'flex items-center justify-center font-semibold text-xs rounded-md border-2 border-white py-2 w-[150px] lg:w-[250px]  px-4 text-white shadow-xl lg:px-10 lg:text-lg',
    booking:
      'flex items-center justify-center font-semibold  text-md rounded-md border-2 border-white py-2 w-[150px] lg:w-[250px] bg-white px-4 text-teal-700 shadow-xl lg:px-10 lg:text-lg',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        type="submit"
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
