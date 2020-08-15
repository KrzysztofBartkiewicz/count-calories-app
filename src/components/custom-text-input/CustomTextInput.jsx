import React from 'react';

import './customTextInput.scss';

const customTextInput = ({ type, value }) => {
  return(
    <input className="custom-text-input" type={type} value={value} />
  )
}

export default customTextInput;
