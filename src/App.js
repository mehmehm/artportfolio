import React from 'react';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Bannertext from './components/Bannertext';
import Gallery from './components/Gallery';
import Pretext from './components/Pretext';

function App() {
  return (
    <div className= "text">
      <header className="App-header"> 
        <NavBar />       
        <Banner />
        <Bannertext />
              
      </header>
      <main>
        <Pretext />
        <Gallery />
      </main>
    </div>
  );
}

export default App;