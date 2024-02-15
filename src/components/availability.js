import '../css/availability.css';
import '../css/calendar.css'
import icon_search from '../img/icon_search.png';
import icon_calendar from '../img/icon_calendar.png';
import { useState, useEffect } from 'react';
import CalendarComponent from './calendar.js';

export default function CheckAvailability() {

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [isToday, setIsToday] = useState(null);
  
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
        const mainContainer = document.querySelector('.main--container');
        const today = new Date();
        setIsToday(today);
        
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
          <h1>Make a reservation online</h1>
            <div className="form--book">
                <select name="hotel" className="form--select">
                    <option value="OldTown">Old Town Hotel</option>
                    <option value="Cracow">Cracow Hotel</option>
                    <option value="Wawel">Wawel Hotel</option>
                    <option value="Station">Main Station Hotel</option>
                </select>
                <div className="choose--date date--start" onClick={() => openCalendar('calendar--start')}>
                    <p>{selectedStartDate && selectedStartDate >= isToday ? selectedStartDate.toLocaleDateString() : 'Start date'}</p><img src={icon_calendar}></img>
                </div>
                <div className="choose--date date--end" onClick={() => openCalendar('calendar--end')}>
                    <p>{selectedEndDate > selectedStartDate ? selectedEndDate.toLocaleDateString() : 'End date'}</p><img src={icon_calendar}></img>
                </div>
                <div className='calendar--start'>
                    <CalendarComponent onDateChange={(date) => handleDateChange(date, true)} />
                </div>
                <div className='calendar--end'>
                    <CalendarComponent onDateChange={(date) => handleDateChange(date, false)} />
                </div>
                <button className="form--submit">
                    <p>Check availability</p>
                </button>
            </div>
        </div>
    )
}