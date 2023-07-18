import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function User() {
  return (
    <Link to="/auth">
      <span className="pr-2 lg:pr-3">
        <FontAwesomeIcon icon={faUser} />
      </span>
    </Link>
  );
}

export default User;
