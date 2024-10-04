import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Bannertext from './components/Bannertext';
import Gallery from './components/Gallery';
import Pretext from './components/Pretext';
import ImagePage from './components/imagePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the gallery and main page */}
        <Route 
          path="/" 
          element={
            <>
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
            </>
          } 
        />
        {/* Route for the individual image page */}
        <Route path="/image/:imageName" element={<ImagePage />} />
      </Routes>
    </Router>
  );
}

export default App;

