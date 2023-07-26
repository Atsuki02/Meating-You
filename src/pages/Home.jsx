import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Header from './Header';

function Home() {
  return (
    <div className="h-screen w-screen md:relative">
      <Header color="text-white" />
      <div className="h-[55%] w-full bg-[url('/image/topbg-1.jpg')] bg-cover bg-center after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-custom-background md:relative md:h-screen md:w-screen md:bg-[url('/image/pc-topbg-1.jpg')]"></div>
      <div className="relative z-20 h-[45%] bg-white  p-6 text-black md:absolute md:left-20 md:top-24 md:bg-transparent md:text-white">
        <h1 className="py-4 text-3xl font-extrabold md:py-8 md:text-5xl">
          Savor Exquisite Dining Experiences
          <br className="hidden md:block md:py-1" /> in Our Venue
        </h1>
        <p className="pb-6 text-base italic md:absolute  md:text-lg ">
          Reserve Your Spot for Memorable Food Adventures Today
        </p>
        <Link to="/booking">
          <button className="mb-6 flex w-full items-center justify-center space-x-4 rounded-md border-2 border-transparent bg-teal-500 px-2 py-4 text-lg text-white shadow-xl md:absolute md:top-72 md:w-1/2 md:space-x-6 md:px-10 md:text-lg">
            <p className="font-semibold">Book your table</p>
            <FontAwesomeIcon icon={faUtensils} size="lg" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
