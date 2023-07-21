import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'pointer shadow-3xl rounded-xl border-2 border-white bg-red-800  font-bold text-white ';
  const base2 =
    'pointer shadow-3xl rounded-xl border-2 border-stone-400 bg-white font-bold text-black';

  const styles = {
    primary: base + ' px-10 py-3 md:px-10 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1.5 md:px-3.5 md:py-2.5 text-xs',
    primary2: base2 + ' px-4 py-3 md:px-8 md:py-4',
    small2: base2 + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round2: base2 + ' px-2.5 py-1.5 md:px-3.5 md:py-2.5 text-xs',
    login:
      'pointer shadow-3xl rounded-sm hover:border-2 hover:border-white w-full h-10 flex items-center justify-center text-white bg-teal-600 font-bold text-black shadow-2xl shadow-black px-4 py-3 md:px-8 md:py-2',
    continue:
      'pointer flex items-center shadow-3xl rounded-md hover:border-2 hover:border-white h-10 text-white bg-teal-600 font-bold text-black shadow-2xl shadow-black px-6 py-4 md:px-10 md:py-2',
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
