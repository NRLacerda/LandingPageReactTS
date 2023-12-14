import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <NavBar title="ORG"/>
      <MainPage/>
    </div>
  );
}

export default App;
