import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import HeaderImg from './components/HeaderImg';
import Form from './components/Form';

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
              <Form />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

