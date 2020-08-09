import React from 'react';

import './customCheckbox.scss';

const CustomCheckbox = ({ id, type, name, children }) => {
  return (
    <div className="custom-checkbox">
      <input id={id} type={type} name={name} className="custom-checkbox__input" />
      <label htmlFor={id} className="custom-checkbox__label">
        {children}
      </label>
    </div>
  );
};

export default CustomCheckbox;
