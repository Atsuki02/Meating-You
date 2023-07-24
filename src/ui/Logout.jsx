import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useLogout } from '../utils/useLogout';
import Spinner from './Spinner';

function Logout() {
  const dispatch = useDispatch();
  const { logout, isLoading } = useLogout();

  async function handleLogout() {
    sessionStorage.removeItem('token');
    localStorage.clear();
    dispatch(logoutUser());
    logout();
  }

  return (
    <button onClick={handleLogout} disabled={isLoading}>
      <span className="pr-2 lg:pr-3">
        {!isLoading ? (
          <FontAwesomeIcon icon={faRightFromBracket} />
        ) : (
          <Spinner />
        )}
      </span>
    </button>
  );
}

export default Logout;
