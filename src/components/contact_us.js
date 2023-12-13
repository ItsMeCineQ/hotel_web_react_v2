import React, { useState } from 'react';
import '../css/contact_us.css'

export default function ContactUs() {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState('');

    const sendQuestion = () => {
        if (!name || !mail || !topic || !message) {
            setError('Please fill in all fields.');
        } else {
            setFormSubmitted(true);
            setError('');
        }
    };


    return(
        <div className="contact--container section" id="contact">
            <span>Contact us with e-mail!</span>
            <div className="form--contact">
                <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Your e-mail" value={mail} onChange={(e) => setMail(e.target.value)}/>
                <select name="Choose topic" className="form--contact-select" value={topic} onChange={(e) => setTopic(e.target.value)}>
                    <option value="">Choose topic...</option>
                    <option value="Reservation">Reservation</option>
                    <option value="Reservation">Localizations</option>
                    <option value="Reservation">Availability</option>
                    <option value="Reservation">Events</option>
                </select>
                <textarea className="form--contact-message" cols="30" rows="10" placeholder="Your message..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button className='button--submit' onClick={sendQuestion}>Send</button>
                {error && <p className="error-message">{error}</p>}
                {formSubmitted && !error && <p className="success-message">Your message was sent successfully!</p>}
            </div>
        </div>
    )
}