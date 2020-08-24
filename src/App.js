import React from 'react';
import PersonalData from './pages/personal-data/PersonalData';
import MainPage from './pages/main-page/MainPage';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PersonalData} />
        <Route path='/main' component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
