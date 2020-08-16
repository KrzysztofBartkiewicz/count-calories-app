import React from 'react';
import WarnText from '../../shared/warn-text/WarnText';

import './dataSection.scss';

const DataSection = ({ heading, children, bottom }) => {
  return (
    <section className="pd-section">
      {heading}
      <div className="pd-section__inner">{children}</div>
      <div className="pd-section__bottom">
        {bottom ? <WarnText>{bottom}</WarnText> : null}
      </div>
    </section>
  );
};

export default DataSection;
