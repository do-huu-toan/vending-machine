import React from 'react';
import './App.scss';
import SlideBar from '../components/SlideBar';
import HomePage from './HomePage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MachineManagePage from './MachineManagePage';


function App() {
  return (
    <Router>
      <div className="App">
          <SlideBar/>
        <div className="wrapper">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/manage">
                <MachineManagePage />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
