import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function User() {
  return (
    <Link to="/auth">
      <FontAwesomeIcon icon={faUser} />
    </Link>
  );
}

export default User;
