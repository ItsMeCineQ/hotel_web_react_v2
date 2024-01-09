import React from "react";
import '../css/hotels_shorts.css'
import { hotels } from './hotels.js'

export default function hotelShort() {
    return(
        <div className="hotel_short--container">
            <img src={hotels.OldTown.image}></img>
            <h2>{hotels.OldTown.name}</h2>
            <p>{hotels.OldTown.address.street} {hotels.OldTown.address.number}</p>
            <h3>Contact</h3>
                <p>phone: {hotels.OldTown.contact.phone}</p>
                <p>e-mail: {hotels.OldTown.contact.mail}</p>
            <img src={hotels.Cracow.image}></img>
            <h2>{hotels.Cracow.name}</h2>
            <p>{hotels.Cracow.address.street} {hotels.Cracow.address.number}</p>
            <h3>Contact</h3>
                <p>phone: {hotels.Cracow.contact.phone}</p>
                <p>e-mail: {hotels.Cracow.contact.mail}</p>
            
        </div>
    )
}