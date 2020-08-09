import React, { Component } from 'react';
import CustomCheckbox from '../../components/custom-checkbox/CustomCheckbox';

import './personalData.scss';

class PersonalData extends Component {
  render() {
    return (
      <form className="personal-data">
        <section className="gender">
          <h2 className="gender__heading">Płeć</h2>
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
