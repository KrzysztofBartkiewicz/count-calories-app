import React from 'react';

import './customTextInput.scss';

const CustomTextInput = ({ type, value, name, onChange, isIncorrect }) => {
  return (
    <input
      className={`custom-text-input ${
        isIncorrect ? 'custom-text-input--incorrect' : ''
      }`}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomTextInput;
