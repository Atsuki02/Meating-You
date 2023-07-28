import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function GoHome() {
  return (
    <Link to="/" className="pr-2 lg:pr-3">
      <FontAwesomeIcon icon={faHome} />
    </Link>
  );
}

export default GoHome;
