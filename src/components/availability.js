import '../css/availability.css'
import icon_search from '../img/icon_search2.png'
import { useEffect } from 'react'

export default function CheckAvailability() {

    useEffect(() => {
        const bookContainer = document.querySelector('.book--container');
        bookContainer.classList.add('book--container-visible');
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
                <label>Choose date: </label>
                <div className="choose--date">
                    <p>dd.mm.yyyy</p>
                </div>
                <div className="calendar">
                    
                </div>
                <button className="form--submit">
                    <img src={icon_search} alt="search" />
                </button>
            </div>
        </div>
    )
}