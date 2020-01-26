import React from 'react';
import './App.css';
import StartPage from './components/StartPage';
import ReactDOM from 'react-dom';


export default class App extends React.Component {



  render() {
    return (
      <div className="App">
        <StartPage />
      </div>
    );
  }
  
}

