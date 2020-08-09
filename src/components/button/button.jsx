import React from 'react';
import './button.scss';

const Button = ({ handleClick }) => {
  return (
    <button className="button button--search" onClick={handleClick}>
      <span className="button__icon"></span>
      <span className="button__text">SCAN</span>
    </button>
  );
};

export default Button;
