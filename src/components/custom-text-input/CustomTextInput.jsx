import React from 'react';

import './customTextInput.scss';

const CustomTextInput = ({ type, value, name, onChange }) => {
  return(
    <input className="custom-text-input" name={name} type={type} value={value} onChange={onChange} />
  )
}

export default CustomTextInput;
