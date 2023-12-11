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
          calendar.classList.toggle('hidden');
          mapContainer.classList.toggle('map--under');
        } else {
          console.error(`Could not find element with class name: ${calendarClassName}`);
        }
      };

    useEffect(() => {
        const bookContainer = document.querySelector('.book--container');
        const calendarStart = document.querySelector('.calendar--start');
        const calendarEnd = document.querySelector('.calendar--end');
        bookContainer.classList.add('book--container-visible');
        calendarStart.classList.add('hidden');
        calendarEnd.classList.add('hidden');
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