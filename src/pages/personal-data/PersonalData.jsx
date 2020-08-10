import React, { Component } from 'react';
import CustomCheckbox from '../../components/custom-checkbox/CustomCheckbox';
import Heading from '../../components/custom-heading/Heading';

import './personalData.scss';

class PersonalData extends Component {
  render() {
    return (
      <form className="personal-data">
        <section className="gender">
          <Heading>Płeć</Heading>
          <div className="gender__selection">
            <CustomCheckbox id='female' type='radio' name='gender'>
              {'Kobieta'}
            </CustomCheckbox>
            <CustomCheckbox id='male' type='radio' name='gender'>
              {'Mężczyzna'}
            </CustomCheckbox>
          </div>
        </section>
      </form>
    );
  }
}

export default PersonalData;
