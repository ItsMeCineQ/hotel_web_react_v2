import '../css/availability.css';
import icon_search from '../img/icon_search2.png';
import { useState, useEffect } from 'react';
import CalendarComponent from './calendar.js';

export default function CheckAvailability() {

    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        const bookContainer = document.querySelector('.book--container');
        bookContainer.classList.add('book--container-visible');
    }, []);

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const openCalendar = () => {
        const calendar = document.querySelector('.react-calendar');
        calendar.classList.toggle('hidden');
    };

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
                <div className="choose--date date--start" onClick={openCalendar}>
                    <p>{selectedDate ? selectedDate.toLocaleDateString() : 'Select a date'}</p>
                </div>
                <label>To: </label>
                <div className="choose--date date--end">
                    <p>dd.mm.yyyy</p>
                </div>
                <CalendarComponent onDateChange={handleDateChange} />
                <button className="form--submit">
                    <img src={icon_search} alt="search" />
                </button>
            </div>
        </div>
    )
}