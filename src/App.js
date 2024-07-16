import React from 'react';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className= "text">
      <header className="App-header">
        <NavBar />
        <Banner />
      </header>
    </div>
  );
}

export default App;