import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function BackButton({ color }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div
      className={`lg:text:2xl absolute left-4 top-0 z-30 flex h-20 cursor-pointer items-center  justify-start bg-transparent p-4 text-2xl lg:left-10 ${
        color ? color : 'text-teal-700'
      }`}
      onClick={handleGoBack}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
}

export default BackButton;
