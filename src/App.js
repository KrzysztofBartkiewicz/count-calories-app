import React from 'react';
import PersonalData from './pages/personal-data/PersonalData';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <PersonalData />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
