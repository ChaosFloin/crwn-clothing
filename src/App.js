import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import { render } from '@testing-library/react';

const HatsPage= () => (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
