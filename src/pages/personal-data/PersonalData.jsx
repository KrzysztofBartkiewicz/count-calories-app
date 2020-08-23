import React, { Component, Fragment } from 'react';
import CustomCheckbox from '../../components/custom-checkbox/CustomCheckbox';
import Heading from '../../components/custom-heading/Heading';
import Header from '../../components/header/Header';
import CustomTextInput from '../../components/custom-text-input/CustomTextInput';
import Button from '../../components/button/Button';
import DataSection from '../../components/data-section/DataSection';
import Modal from '../../shared/modal/Modal';
import { CSSTransition } from 'react-transition-group';

import './personalData.scss';

const reg = {
  age: /\b(1[4-9]|[2-9][0-9]|100)\b/,
  weight: /\b([4-8][0-9]|9[0-9]|1[0-9]{2}|200)\b/,
  height: /\b(1[2-8][0-9]|19[0-9]|2[01][0-9]|220)\b/,
};

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
    showModal: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      gender,
      activity,
      ageWarn,
      weightWarn,
      heightWarn,
      age,
      weight,
      height,
    } = this.state;

    if (ageWarn || weightWarn || heightWarn) return;

    localStorage.setItem('gender', gender);
    localStorage.setItem('age', age);
    localStorage.setItem('weight', weight);
    localStorage.setItem('height', height);
    localStorage.setItem('activity', activity);

    this.setState({ showModal: true });

    setTimeout(() => {
      this.setState({ showModal: false });
    }, 3000);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'age':
        reg.age.test(value)
          ? this.setState({ ageWarn: '' })
          : this.setState({ ageWarn: '14 - 100 lat' });
        break;
      case 'weight':
        reg.weight.test(value)
          ? this.setState({ weightWarn: '' })
          : this.setState({ weightWarn: '40 - 200 kg' });
        break;
      case 'height':
        reg.height.test(value)
          ? this.setState({ heightWarn: '' })
          : this.setState({ heightWarn: '120 - 220 cm' });
        break;
      default:
        break;
    }

    this.setState(
      {
        [name]: value,
      },
      console.log('state: ', this.state, name, value)
    );
  };

  handleCheck = (event) => {
    const { name, id } = event.target;
    this.setState({ [name]: id });
  };

  render() {
    const {
      gender,
      activity,
      ageWarn,
      weightWarn,
      heightWarn,
      showModal,
      age,
      weight,
      height,
    } = this.state;

    return (
      <Fragment>
        <CSSTransition
          in={showModal}
          timeout={1000}
          classNames="my-node"
          unmountOnExit
        >
          <Modal message="Zapisano" />
        </CSSTransition>

        <Header mainText={'Mój profil'} subText={'Something'} goBack />
        <form
          className="personal-data"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <DataSection heading={<Heading>{'Płeć'}</Heading>}>
            <CustomCheckbox
              checked={gender === 'female'}
              onChange={this.handleCheck}
              id="female"
              type="radio"
              name="gender"
            >
              {'Kobieta'}
            </CustomCheckbox>
            <CustomCheckbox
              checked={gender === 'male'}
              onChange={this.handleCheck}
              id="male"
              type="radio"
              name="gender"
            >
              {'Mężczyzna'}
            </CustomCheckbox>
          </DataSection>

          <DataSection heading={<Heading>{'Wiek'}</Heading>}>
            <CustomTextInput
              value={age}
              onChange={this.handleChange}
              type="number"
              name="age"
              warning={ageWarn}
            />
          </DataSection>

          <DataSection heading={<Heading>{'Waga (kg)'}</Heading>}>
            <CustomTextInput
              value={weight}
              onChange={this.handleChange}
              type="number"
              name="weight"
              warning={weightWarn}
            />
          </DataSection>

          <DataSection heading={<Heading>{'Wzrost (cm)'}</Heading>}>
            <CustomTextInput
              value={height}
              onChange={this.handleChange}
              type="number"
              name="height"
              warning={heightWarn}
            />
          </DataSection>

          <DataSection heading={<Heading>{'Aktywność'}</Heading>}>
            <CustomCheckbox
              checked={activity === 'low'}
              onChange={this.handleCheck}
              id="low"
              type="radio"
              name="activity"
              orientation="bottom"
            >
              {'Niska'}
            </CustomCheckbox>
            <CustomCheckbox
              checked={activity === 'medium'}
              onChange={this.handleCheck}
              id="medium"
              type="radio"
              name="activity"
              orientation="bottom"
            >
              {'Średnia'}
            </CustomCheckbox>
            <CustomCheckbox
              checked={activity === 'high'}
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
