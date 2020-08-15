import React, { Component, Fragment } from 'react';
import CustomCheckbox from '../../components/custom-checkbox/CustomCheckbox';
import Heading from '../../components/custom-heading/Heading';
import Header from '../../components/header/Header';
import CustomTextInput from '../../components/custom-text-input/CustomTextInput';
import Button from '../../components/button/Button';

import './personalData.scss';

class PersonalData extends Component {
  state = {
    gender: 'female',
    age: 38,
    weight: 90,
    height: 180,
    activity: 'low',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheck = (event) => {
    const { name, id } = event.target;
    this.setState({ [name]: id });
  };

  render() {
    return (
      <Fragment>
        <Header mainText={'Mój profil'} subText={'Something'} goBack />
        <form className="personal-data" onSubmit={this.handleSubmit}>
          <section className="pd-section">
            <Heading>{'Płeć'}</Heading>
            <div className="pd-section__inner pd-section__inner--gender">
              <CustomCheckbox
                checked={this.state.gender === 'female'}
                onChange={this.handleCheck}
                id="female"
                type="radio"
                name="gender"
              >
                {'Kobieta'}
              </CustomCheckbox>
              <CustomCheckbox
                checked={this.state.gender === 'male'}
                onChange={this.handleCheck}
                id="male"
                type="radio"
                name="gender"
              >
                {'Mężczyzna'}
              </CustomCheckbox>
            </div>
          </section>
          <section className="pd-section">
            <Heading>{'Wiek'}</Heading>
            <div className="pd-section__inner">
              <CustomTextInput
                value={this.state.age}
                onChange={this.handleChange}
                type="text"
                name="age"
              />
            </div>
          </section>
          <section className="pd-section">
            <Heading>{'Waga (kg)'}</Heading>
            <div className="pd-section__inner">
              <CustomTextInput
                value={this.state.weight}
                onChange={this.handleChange}
                type="text"
                name="weight"
              />
            </div>
          </section>
          <section className="pd-section">
            <Heading>{'Wzrost (cm)'}</Heading>
            <div className="pd-section__inner">
              <CustomTextInput
                value={this.state.height}
                onChange={this.handleChange}
                type="text"
                name="height"
              />
            </div>
          </section>
          <section className="pd-section">
            <Heading>{'Aktywność'}</Heading>
            <div className="pd-section__inner pd-section__inner--activity">
              <CustomCheckbox
                checked={this.state.activity === 'low'}
                onChange={this.handleCheck}
                id="low"
                type="radio"
                name="activity"
                orientation="bottom"
              >
                {'Niska'}
              </CustomCheckbox>
              <CustomCheckbox
                checked={this.state.activity === 'medium'}
                onChange={this.handleCheck}
                id="medium"
                type="radio"
                name="activity"
                orientation="bottom"
              >
                {'Średnia'}
              </CustomCheckbox>
              <CustomCheckbox
                checked={this.state.activity === 'high'}
                onChange={this.handleCheck}
                id="high"
                type="radio"
                name="activity"
                orientation="bottom"
              >
                {'Wysoka'}
              </CustomCheckbox>
            </div>
          </section>
          <Button type="submit" btnType="save">
            {'Zapisz'}
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default PersonalData;
