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
import NavBar from '../components/NavBar';
import SuggestSelectMachine from '../components/SuggestSelectMachine';
import MachineInfo from './MachineInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <SlideBar />
        <div className="wrapper">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/manage" exact>
              <MachineManagePage>
                <SuggestSelectMachine/>
              </MachineManagePage>
            </Route>
            <Route path="/manage/:id">
              <MachineManagePage>
                <MachineInfo/>
              </MachineManagePage>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
