import React from 'react';

import './customTextInput.scss';

const CustomTextInput = ({ type, value, name, onChange, warning }) => {
  return (
    <div className="custom-text-input">
      <input
        className={`custom-text-input__input ${
          warning ? 'custom-text-input__input--incorrect' : ''
        }`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      <span className="custom-text-input__warning">{warning}</span>
    </div>
  );
};

export default CustomTextInput;
