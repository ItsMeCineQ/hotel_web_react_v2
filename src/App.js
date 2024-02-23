import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import CheckAvailability from './components/availability';
import AboutUs from './components/about_us';
import Spa from './components/spa';
import Restaurant from './components/restaurant';
import Reviews from './components/reviews';
import Contact from './components/contact';
import Other from './components/other';
import Map from './components/map';
import ContactForm from './components/contact_form';
import Newsletter from './components/newsletter';
import Footer from './components/footer';

export default function App() {

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
        <AboutUs />
        <Map />
        <Spa />
        <Restaurant />
        <Reviews />
      </div>
      <div className='essentials' id='other'>
        <Contact />
        <ContactForm />
        <Other />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};