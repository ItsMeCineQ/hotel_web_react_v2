import '../css/availability.css';
import '../css/calendar.css'
import icon_search from '../img/icon_search2.png';
import { useState, useEffect } from 'react';
import CalendarComponent from './calendar.js';

export default function CheckAvailability() {

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
  
    const handleStartDateChange = (date) => {
      setSelectedStartDate(date);
    };
  
    const handleEndDateChange = (date) => {
      setSelectedEndDate(date);
    };
    
    const openStartCalendar = () => {
        const calendar = document.querySelector('.react-calendar');
        const mapContainer = document.querySelector('.map--container');
        calendar.classList.toggle('hidden');
        mapContainer.classList.toggle('map--under');
    };

    const openEndCalendar = () => {
        const calendar = document.querySelector('.react-calendar');
        const mapContainer = document.querySelector('.map--container');
        calendar.classList.toggle('hidden');
        mapContainer.classList.toggle('map--under');
    };

    useEffect(() => {
        const bookContainer = document.querySelector('.book--container');
        const calendar = document.querySelector('.react-calendar');
        bookContainer.classList.add('book--container-visible');
        calendar.classList.add('hidden');
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
                <div className="choose--date date--start" onClick={openStartCalendar}>
                    <p>{selectedStartDate ? selectedStartDate.toLocaleDateString() : 'dd.mm.yyyy'}</p>
                </div>
                <label>To: </label>
                <div className="choose--date date--end" onClick={openEndCalendar}>
                    <p>{selectedEndDate ? selectedEndDate.toLocaleDateString() : 'dd.mm.yyyy'}</p>
                </div>
                <CalendarComponent onDateChange={handleStartDateChange} className="calendar--start"/>
                <CalendarComponent onDateChange={handleEndDateChange} className="calendar--end"/>
                <button className="form--submit">
                    <img src={icon_search} alt="search" />
                </button>
            </div>
        </div>
    )
}