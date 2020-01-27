import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import HeaderImg from './components/HeaderImg';
import FormContainer from './containers/FormContainer';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
            </Route>
            <Route exact path="/form">
              <HeaderImg />
              <FormContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

