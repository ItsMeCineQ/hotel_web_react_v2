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
        <CheckAvailability />
        <Map />
        <AboutUs />
        <Reviews />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;