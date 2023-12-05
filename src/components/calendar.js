import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/calendar.css'

export default function CalendarComponent({ onDateChange }){

    const [value, onChange] = useState(new Date());

    const handleDateChange = (selectedDate) => {
        onChange(selectedDate);
        onDateChange && onDateChange(selectedDate);
    };

    return(
        <div>
            <Calendar onChange={handleDateChange} value={value} />
        </div>
    )
}