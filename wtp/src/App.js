import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            A class component? In this day and age? How crude.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
