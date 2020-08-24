import React, { Fragment } from 'react';
import Header from '../../components/header/Header';

const MainPage = ({ history }) => {
  return(
    <Fragment>
      <Header mainText='Bieda-Fitatu-App' goBack={() => history.goBack()} />
    </Fragment>
  )
}

export default MainPage;