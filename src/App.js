import React from 'react';
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Map from './components/map';
import CheckAvailability from './components/availability';
import AboutUs from './components/about_us';
import ContactUs from './components/contact_us';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main--container'>
        <Slider />
        <CheckAvailability />
        <Map />
        <AboutUs />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;