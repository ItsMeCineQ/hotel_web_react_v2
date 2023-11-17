import React from 'react';
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Map from './components/map';
import CheckAvailability from './components/availability';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <CheckAvailability />
      <Map />
    </div>
  );
}

export default App;