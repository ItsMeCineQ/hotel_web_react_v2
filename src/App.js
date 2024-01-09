import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Map from './components/map';
import CheckAvailability from './components/availability';
import AboutUs from './components/about_us';
import ContactUs from './components/contact_us';
import Footer from './components/footer';
import Reviews from './components/reviews';
import Calendar from './components/calendar';
import HotelShortLeft from './components/hotels_shorts_left';
import HotelShortRight from './components/hotels_shorts_right';


function App() {

  useEffect(() => {

    const allSections = document.querySelectorAll('.section');

    const revealSection = function(entries, observer){
        const [entry] = entries;
        if(!entry.isIntersecting) return;
        entry.target.classList.remove('section--hidden');
    };

    const sectionObserver = new IntersectionObserver(revealSection,{
        root: null,
        threshold: 0.15,
    });

    allSections.forEach(function(section){
        sectionObserver.observe(section);
        section.classList.add('section--hidden');
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='main--container'>
        <Slider />
        <div className='mid--container'>
          <HotelShortLeft />
          <div className='map-section'>
            <CheckAvailability />
            <Map />
          </div>
          <HotelShortRight />
        </div>
        <AboutUs />
        <Reviews />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;