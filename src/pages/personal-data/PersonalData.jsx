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
    numberInputs: [
      {
        heading: 'Wiek',
        value: 38,
        name: 'age',
        isIncorrect: false,
        warningMessage: '14 - 100 lat',
      },
      {
        heading: 'Waga',
        value: 90,
        name: 'weight',
        isIncorrect: false,
        warningMessage: '40 - 200 kg',
      },
      {
        heading: 'Wzrost',
        value: 180,
        name: 'height',
        isIncorrect: false,
        warningMessage: '120 - 220 cm',
      },
    ],
    genderCheckboxes: [
      {
        id: 'female',
        title: 'Kobieta',
        isChecked: true,
      },
      {
        id: 'male',
        title: 'Mężczyzna',
        isChecked: false,
      },
    ],
    activityCheckboxes: [
      {
        id: 'low',
        title: 'Niska',
        isChecked: true,
      },
      {
        id: 'medium',
        title: 'Średnia',
        isChecked: false,
      },
      {
        id: 'high',
        title: 'Wysoka',
        isChecked: false,
      },
    ],

    showModal: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const disableSubmit = this.state.numberInputs.some(
      (input) => input.isIncorrect === true
    );
    if (disableSubmit) return;

    this.state.numberInputs.forEach((input) => {
      localStorage.setItem(input.name, input.value);
    });

    this.state.genderCheckboxes.forEach(checkbox => {
      if (checkbox.isChecked) localStorage.setItem('gender', checkbox.id);
    })

    this.state.activityCheckboxes.forEach(checkbox => {
      if (checkbox.isChecked) localStorage.setItem('activity', checkbox.id);
    })

    this.setState({ showModal: true });

    setTimeout(() => {
      this.setState({ showModal: false });
<<<<<<< HEAD
      this.props.history.push('/main');
=======
>>>>>>> 9248c6dc4889dc71611c15c5e48e704c4eafd39a
    }, 3000);
  };

  handleChange = (event, index) => {
    const { name, value } = event.target;

<<<<<<< HEAD
    this.setState((prevState) => {
      prevState.numberInputs[index].value = value;

      if (reg[name].test(value)) {
        prevState.numberInputs[index].isIncorrect = false;
      } else {
        prevState.numberInputs[index].isIncorrect = true;
      }

      return prevState;
    });
=======
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
    this.setState({ [name]: value });
>>>>>>> 9248c6dc4889dc71611c15c5e48e704c4eafd39a
  };

  handleCheck = (event, index) => {
    const { name } = event.target;

    this.setState((prevState) => {
      prevState[name].forEach((checkbox) => (checkbox.isChecked = false));
      prevState[name][index].isChecked = true;
      return prevState;
    });
  };

  render() {
    const { showModal } = this.state;

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

<<<<<<< HEAD
        <Header mainText={'Mój profil'} subText={'Something'} />
=======
        <Header mainText={'Mój profil'} subText={'Something'} goBack />
>>>>>>> 9248c6dc4889dc71611c15c5e48e704c4eafd39a
        <form
          className="personal-data"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <DataSection heading={<Heading>{'Płeć'}</Heading>}>
<<<<<<< HEAD
            {this.state.genderCheckboxes.map((checkbox, index) => (
              <CustomCheckbox
                key={checkbox.id}
                checked={checkbox.isChecked}
                onChange={(event) => this.handleCheck(event, index)}
                id={checkbox.id}
                type="radio"
                name="genderCheckboxes"
              >
                {checkbox.title}
              </CustomCheckbox>
            ))}
          </DataSection>

          {this.state.numberInputs.map((input, index) => (
            <DataSection
              key={input.name}
              heading={<Heading>{input.heading}</Heading>}
            >
              <CustomTextInput
                value={input.value}
                onChange={(event) => this.handleChange(event, index)}
                type="number"
                name={input.name}
                warning={input.isIncorrect ? input.warningMessage : null}
              />
            </DataSection>
          ))}
=======
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

          <DataSection
            heading={<Heading>{'Wiek'}</Heading>}
            bottomText={ageWarn}
          >
            <CustomTextInput
              value={age}
              onChange={this.handleChange}
              type="number"
              name="age"
              isIncorrect={ageWarn}
            />
          </DataSection>

          <DataSection
            heading={<Heading>{'Waga (kg)'}</Heading>}
            bottomText={weightWarn}
          >
            <CustomTextInput
              value={weight}
              onChange={this.handleChange}
              type="number"
              name="weight"
              isIncorrect={weightWarn}
            />
          </DataSection>

          <DataSection
            heading={<Heading>{'Wzrost (cm)'}</Heading>}
            bottomText={heightWarn}
          >
            <CustomTextInput
              value={height}
              onChange={this.handleChange}
              type="number"
              name="height"
              isIncorrect={heightWarn}
            />
          </DataSection>
>>>>>>> 9248c6dc4889dc71611c15c5e48e704c4eafd39a

          <DataSection heading={<Heading>{'Aktywność'}</Heading>}>
            {this.state.activityCheckboxes.map((checkbox, index) => (
              <CustomCheckbox
                key={checkbox.id}
                checked={checkbox.isChecked}
                onChange={(event) => this.handleCheck(event, index)}
                id={checkbox.id}
                type="radio"
                name="activityCheckboxes"
                orientation="bottom"
              >
                {checkbox.title}
              </CustomCheckbox>
            ))}
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
