import React from 'react';
import Calendar from './components/Calendar'
import List from './components/List'
import TopNav from './components/TopNav';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <TopNav />
      <List />
      <Calendar />
    </div>
  )
}

export default App;
