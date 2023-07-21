import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    localStorage.clear();
    dispatch(logoutUser());
    navigate('/home');
  };

  return (
    <button onClick={handleLogout}>
      <span className="pr-2 lg:pr-3">
        <FontAwesomeIcon icon={faRightFromBracket} />
      </span>
    </button>
  );
}

export default Logout;
