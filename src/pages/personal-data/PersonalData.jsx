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
      this.props.history.push('/main');
    }, 3000);
  };

  handleChange = (event, index) => {
    const { name, value } = event.target;

    this.setState((prevState) => {
      prevState.numberInputs[index].value = value;

      if (reg[name].test(value)) {
        prevState.numberInputs[index].isIncorrect = false;
      } else {
        prevState.numberInputs[index].isIncorrect = true;
      }

      return prevState;
    });
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

        <Header mainText={'Mój profil'} subText={'Something'} />
        <form
          className="personal-data"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <DataSection heading={<Heading>{'Płeć'}</Heading>}>
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
