import React from 'react';

import './dataSection.scss';

const DataSection = ({ heading, children }) => {
  return (
    <section className="pd-section">
      {heading}
      <div className="pd-section__inner">{children}</div>
    </section>
  );
};

export default DataSection;
