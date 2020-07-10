import React from 'react';
import './button.scss';

const Button = (props) => {
  return (
    <button className="button button--search">
      <span className="button__icon"></span>
      <span className="button__text">SCAN</span>
    </button>
  );
};

export default Button;
