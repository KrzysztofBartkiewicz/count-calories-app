import React from 'react';
import './button.scss';

const Button = ({ handleClick, type, children, btnType }) => {
  return (
    <button className={`button button--${btnType}`} type={type} onClick={handleClick}>
      <span className="button__icon"></span>
      <span className="button__text">{children}</span>
    </button>
  );
};

export default Button;
