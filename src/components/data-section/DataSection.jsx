import React from 'react';

import './dataSection.scss';

<<<<<<< HEAD
const DataSection = ({ heading, children }) => {
=======
const DataSection = ({ heading, children, bottomText }) => {
>>>>>>> 9248c6dc4889dc71611c15c5e48e704c4eafd39a
  return (
    <section className="pd-section">
      {heading}
      <div className="pd-section__inner">{children}</div>
<<<<<<< HEAD
=======
      <div className="pd-section__bottom">
        {bottomText ? <WarnText>{bottomText}</WarnText> : null}
      </div>
>>>>>>> 9248c6dc4889dc71611c15c5e48e704c4eafd39a
    </section>
  );
};

export default DataSection;
