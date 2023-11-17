import '../css/availability.css'

export default function CheckAvailability() {
    return(
        <div className="book--container" id="book">
            <h2>Book your room now!</h2>
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
                    <img src="src/img/icon_search2.png" alt="search" />
                </button>
            </div>
        </div>
    )
}