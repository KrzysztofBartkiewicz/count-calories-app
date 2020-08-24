import React from 'react';

import './header.scss';

const Header = ({ mainText, subText, goBack }) => {
  return (
    <header className="header">
      <nav className={`header__nav ${goBack ? '' : 'hidden'}`}>
        <button className="header__button" onClick={goBack}></button>
      </nav>
      <div className="header__text-box">
        <h1 className="header__main-text">{mainText}</h1>
        <span className="header__sub-text">{subText}</span>
      </div>
    </header>
  );
};

export default Header;
