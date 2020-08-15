import React from 'react';

import './customCheckbox.scss';

const CustomCheckbox = ({ id, type, name, orientation, checked, onChange, children }) => {
  return (
    <div className="custom-checkbox">
      <input
        id={id}
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
        className="custom-checkbox__input"
      />
      <label
        htmlFor={id}
        className={`custom-checkbox__label ${
          orientation === 'bottom' ? 'custom-checkbox__label--bottom' : ''
        }`}
      >
        {children}
      </label>
    </div>
  );
};

export default CustomCheckbox;
