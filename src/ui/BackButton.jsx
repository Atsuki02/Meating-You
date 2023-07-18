import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function BackButton() {
  return (
    <div>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
}

export default BackButton;
