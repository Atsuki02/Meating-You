import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function User() {
  return (
    <Link to="/auth">
      <span className="pr-2 text-teal-600 lg:pr-3">
        <FontAwesomeIcon icon={faUser} />
      </span>
    </Link>
  );
}

export default User;
