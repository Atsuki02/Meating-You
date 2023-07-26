import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useLogout } from './useLogout';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button onClick={logout} disabled={isLoading}>
      <span className="pr-2 lg:pr-3">
        <FontAwesomeIcon icon={faRightFromBracket} />
      </span>
    </button>
  );
}

export default Logout;
