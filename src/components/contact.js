import React, { useState } from "react";
import '../css/contact.css'
import { hotels } from './hotels.js'

export default function contact() {

    const openContactForm = () => {
        const contactForm = document.querySelector('.contact--form');
        
        contactForm.classList.remove('hidden');
    }

    return(
        <div className="contact--container">
            <img src={hotels.OldTown.image}></img>
            <h2>Hotel.ly group</h2>
            <p>{hotels.OldTown.address.street} {hotels.OldTown.address.number}</p>
            <h3>Contact</h3>
                <p>phone: {hotels.OldTown.contact.phone}</p>
                <p>e-mail: hotel.ly@hotel.com</p>
            <h4>Or <a onClick={openContactForm} className="contact_form--link">click here</a> to contact us through online form</h4>
        </div>
    )
}