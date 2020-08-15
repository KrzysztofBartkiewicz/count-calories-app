import React from 'react';

import './dataSection.scss';

const DataSection = ({ heading, children, warning }) => {
  return (
    <section className="pd-section">
      {heading}
      <div className="pd-section__inner pd-section__inner--gender">
        {children}
      </div>
      <span className="pd-section__warning">{warning}</span>
    </section>
  );
};

export default DataSection;
