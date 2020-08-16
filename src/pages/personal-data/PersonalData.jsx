import React, { Component, Fragment } from 'react';
import CustomCheckbox from '../../components/custom-checkbox/CustomCheckbox';
import Heading from '../../components/custom-heading/Heading';
import Header from '../../components/header/Header';
import CustomTextInput from '../../components/custom-text-input/CustomTextInput';
import Button from '../../components/button/Button';
import DataSection from '../../components/data-section/DataSection';

import './personalData.scss';

class PersonalData extends Component {
  state = {
    gender: 'female',
    age: 38,
    weight: 90,
    height: 180,
    activity: 'low',
    ageWarn: '',
    weightWarn: '',
    heightWarn: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      gender,
      age,
      weight,
      height,
      activity,
      ageWarn,
      weightWarn,
      heightWarn,
    } = this.state;

    if (ageWarn || weightWarn || heightWarn) return;

    localStorage.setItem('gender', gender);
    localStorage.setItem('age', age);
    localStorage.setItem('weight', weight);
    localStorage.setItem('height', height);
    localStorage.setItem('activity', activity);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'age' && (value < 14 || value > 100)) {
      this.setState({ ageWarn: 'Zakres 14 - 100' });
    } else {
      this.setState({ ageWarn: '' });
    }

    if (name === 'weight' && (value < 40 || value > 200)) {
      this.setState({ weightWarn: 'Zakres 40 - 200' });
    } else {
      this.setState({ weightWarn: '' });
    }

    if (name === 'height' && (value < 120 || value > 220)) {
      this.setState({ heightWarn: 'Zakres 120 - 220' });
    } else {
      this.setState({ heightWarn: '' });
    }

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
          <DataSection heading={<Heading>{'Płeć'}</Heading>}>
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
          </DataSection>

          <DataSection
            heading={<Heading>{'Wiek'}</Heading>}
            bottom={this.state.ageWarn}
          >
            <CustomTextInput
              value={this.state.age}
              onChange={this.handleChange}
              type="text"
              name="age"
            />
          </DataSection>

          <DataSection
            heading={<Heading>{'Waga (kg)'}</Heading>}
            bottom={this.state.weightWarn}
          >
            <CustomTextInput
              value={this.state.weight}
              onChange={this.handleChange}
              type="text"
              name="weight"
            />
          </DataSection>

          <DataSection
            heading={<Heading>{'Wzrost (cm)'}</Heading>}
            bottom={this.state.heightWarn}
          >
            <CustomTextInput
              value={this.state.height}
              onChange={this.handleChange}
              type="text"
              name="height"
            />
          </DataSection>

          <DataSection heading={<Heading>{'Aktywność'}</Heading>}>
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
          </DataSection>
          <Button type="submit" btnType="save">
            {'Zapisz'}
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default PersonalData;
