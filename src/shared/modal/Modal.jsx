import React from 'react';

import './modal.scss';

const Modal = ({ message }) => {
  return (
    <div className="modal">
      <h1 className="modal__message">{message}</h1>
      <div className="modal__icon"></div>
    </div>
  );
};

export default Modal;
