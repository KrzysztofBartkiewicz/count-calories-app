import React, { Component, Fragment } from 'react';
import CustomCheckbox from '../../components/custom-checkbox/CustomCheckbox';
import Heading from '../../components/custom-heading/Heading';
import Header from '../../components/header/Header';
import CustomTextInput from '../../components/custom-text-input/CustomTextInput';

import './personalData.scss';

class PersonalData extends Component {
  render() {
    return (
      <Fragment>
        <Header mainText={'Mój profil'} subText={'Something'} goBack />
        <form className="personal-data">
          <section className="pd-section">
            <Heading>{'Płeć'}</Heading>
            <div className="pd-section__inner pd-section__inner--gender">
              <CustomCheckbox id="female" type="radio" name="gender">
                {'Kobieta'}
              </CustomCheckbox>
              <CustomCheckbox id="male" type="radio" name="gender">
                {'Mężczyzna'}
              </CustomCheckbox>
            </div>
          </section>
          <section className="pd-section">
            <Heading>{'Wiek'}</Heading>
            <div className="pd-section__inner">
              <CustomTextInput type="text" value="37" />
            </div>
          </section>
          <section className="pd-section">
            <Heading>{'Waga (kg)'}</Heading>
            <div className="pd-section__inner">
              <CustomTextInput type="text" value="90" />
            </div>
          </section>
          <section className="pd-section">
            <Heading>{'Wzrost (cm)'}</Heading>
            <div className="pd-section__inner">
              <CustomTextInput type="text" value="170" />
            </div>
          </section>
          <section className="pd-section">
            <Heading>{'Płeć'}</Heading>
            <div className="pd-section__inner pd-section__inner--activity">
              <CustomCheckbox id="low" type="radio" name="activity">
                {'Niska'}
              </CustomCheckbox>
              <CustomCheckbox id="medium" type="radio" name="activity">
                {'Średnia'}
              </CustomCheckbox>
              <CustomCheckbox id="high" type="radio" name="activity">
                {'Wysoka'}
              </CustomCheckbox>
            </div>
          </section>
        </form>
      </Fragment>
    );
  }
}

export default PersonalData;
