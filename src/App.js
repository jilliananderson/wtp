import React from 'react';
import Calendar from './components/Calendar'
import List from './components/List'
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <List />
      <Calendar />
    </div>
  )
}

export default App;
