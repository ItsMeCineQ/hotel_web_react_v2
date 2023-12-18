import '../css/availability.css';
import '../css/calendar.css'
import icon_search from '../img/icon_search2.png';
import { useState, useEffect } from 'react';
import CalendarComponent from './calendar.js';

export default function CheckAvailability() {

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
  
    const handleDateChange = (date, isStartDate) => {
        if (isStartDate) {
          setSelectedStartDate(date);
        } else {
          setSelectedEndDate(date);
        }
      };
    
      const openCalendar = (calendarClassName) => {
        const calendar = document.querySelector(`.${calendarClassName}`);
        const mapContainer = document.querySelector('.map--container');
      
        if (calendar && mapContainer) {
          const isHidden = calendar.classList.contains('hidden');
      
          if (isHidden) {
            calendar.classList.remove('hidden');
            mapContainer.classList.add('map--under');
          } else {
            calendar.classList.add('hidden');
            mapContainer.classList.remove('map--under');
          }
        }
      };

      const closeCalendar = (event) => {
        
        const calendarStart = document.querySelector('.calendar--start');
        const calendarEnd = document.querySelector('.calendar--end');
        const mapContainer = document.querySelector('.map--container');
        const mainContainer = document.querySelector('.main--container');

        if (
          calendarStart &&
          calendarEnd &&
          mainContainer &&
          !event.target.closest('.calendar--start') &&
          !event.target.closest('.calendar--end') &&
          !event.target.closest('.map--container') &&
          event.target.closest('.main--container')
        ) {
          calendarStart.classList.add('hidden');
          calendarEnd.classList.add('hidden');
          mapContainer.classList.remove('map--under');
        }
      };
      
      useEffect(() => {
        const bookContainer = document.querySelector('.book--container');
        const calendarStart = document.querySelector('.calendar--start');
        const calendarEnd = document.querySelector('.calendar--end');
        const mainContainer = document.querySelector('.main--container')
        
        bookContainer.classList.add('book--container-visible');
        calendarStart.classList.add('hidden');
        calendarEnd.classList.add('hidden');

        mainContainer.addEventListener('click', closeCalendar);

        return () => {
          mainContainer.removeEventListener('click', closeCalendar);
        };
    }, []);

    return(
        <div className="book--container" id="book">
            <h2>Check room availability now!</h2>
            <div className="form--book">
                <label for="" className="form--hotel_choose">Choose your hotel:</label>
                <select name="hotel" className="form--select">
                    <option value="OldTown">Old Town Hotel</option>
                    <option value="Cracow">Cracow Hotel</option>
                    <option value="Wawel">Wawel Hotel</option>
                    <option value="Station">Main Station Hotel</option>
                </select>
                <label>From: </label>
                <div className="choose--date date--start" onClick={() => openCalendar('calendar--start')}>
                    <p>{selectedStartDate ? selectedStartDate.toLocaleDateString() : 'dd.mm.yyyy'}</p>
                </div>
                <label>To: </label>
                <div className="choose--date date--end" onClick={() => openCalendar('calendar--end')}>
                    <p>{selectedEndDate ? selectedEndDate.toLocaleDateString() : 'dd.mm.yyyy'}</p>
                </div>
                <div className='calendar--start'>
                    <CalendarComponent onDateChange={(date) => handleDateChange(date, true)} />
                </div>
                <div className='calendar--end'>
                    <CalendarComponent onDateChange={(date) => handleDateChange(date, false)} />
                </div>
                <button className="form--submit">
                    <img src={icon_search} alt="search" />
                </button>
            </div>
        </div>
    )
}