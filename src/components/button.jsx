import React from 'react';
import './button.scss';

const Button = (props) => {
  return (
    <button className="button">
      <i className="button__icon" />
      <span className="button__text">SCAN</span>
    </button>
  );
};

export default Button;
