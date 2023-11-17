import React from 'react';
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Map from './components/map';
import CheckAvailability from './components/availability';
import AboutUs from './components/about_us';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <CheckAvailability />
      <Map />
      <AboutUs />
    </div>
  );
}

export default App;