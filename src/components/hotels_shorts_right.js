import React from "react";
import '../css/hotels_shorts.css'
import { hotels } from './hotels.js'

export default function hotelShort() {
    return(
        <div className="hotel_short--container">
            <img src={hotels.Wawel.image}></img>
            <h2>{hotels.Wawel.name}</h2>
            <p>{hotels.Wawel.address.street}  {hotels.Wawel.address.number}</p>
            <h3>Contact</h3>
                <p>phone: {hotels.Wawel.contact.phone}</p>
                <p>e-mail: {hotels.Wawel.contact.mail}</p>
            <img src={hotels.Station.image}></img>
            <h2>{hotels.Station.name}</h2>
            <p>{hotels.Station.address.street}  {hotels.Station.address.number}</p>
            <h3>Contact</h3>
                <p>phone: {hotels.Station.contact.phone}</p>
                <p>e-mail: {hotels.Station.contact.mail}</p>
        </div>
    )
}