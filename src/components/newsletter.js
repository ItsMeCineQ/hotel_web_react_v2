import React, { useEffect } from "react";
import { useState } from "react";
import '../css/newsletter.css';
import icon_mail from '../img/icon_mail.png';
import icon_close from '../img/icon_close.png';

export default function Newsletter() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [regulationsNotAccepted, setRegulationsNotAccepted] = useState(false);
    const [sendMail, setSendMail] = useState(false);
    const [regulationsChecked, setRegulationsChecked] = useState(false);
    const [isConfirmationVisible, setConfirmationVisible] = useState(false);
    
    const newsletter = document.querySelector('.newsletter');
    const regulationsDeclined = document.querySelector('.newsletter--confirm--regulations--declined');

    const openConfirmationModal = () => {

        if(!email){
            setError('Please fill your email.');
        }else{
            setSendMail(true);
            setEmail('');
            setError('');
        }
        
        setConfirmationVisible(true);
        document.body.classList.add('newsletter--confirmation--open');
    }
    
    const closeNewsletter = () => {

        setConfirmationVisible(false);
        setSendMail(false);
        setEmail('');
        setError('');
        
        if(newsletter)
            newsletter.classList.add('newsletter--hidden');
        document.body.classList.remove('newsletter--confirmation--open');
    }

    const regulationsAccept = () => {

        if(!regulationsChecked){
            regulationsDeclined.classList.remove('hidden');
            setRegulationsNotAccepted('Please accept the regulations.');
        } else {
            setRegulationsNotAccepted('');
        }
    }

    const regulationsDecline = () => {

        setConfirmationVisible(false);
        setRegulationsNotAccepted('');

        newsletter.classList.add('newsletter--hidden');
        document.body.classList.remove('newsletter--confirmation--open');
    }

    const handleCheckboxChange = () => {
        
        setRegulationsChecked(!regulationsChecked);
        setRegulationsNotAccepted('');
    };

    return(
        <div className='newsletter newsletter--hidden'>
            <p className="newsletter--message">Sign up for the newsletter, receive a discount and stay up to date!</p>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} className="newsletter--mail" placeholder="Your email..."></input>
            <button onClick={openConfirmationModal} className="button_newsletter--submit"><img src={icon_mail}></img></button>
            <button onClick={closeNewsletter} className="button_newsletter--close"><img src={icon_close}></img></button>
            {error && <p className="newsletter--error">{error}</p>}
            <div className={`newsletter--confirm ${isConfirmationVisible ? '' : 'hidden'}`}>
                <h2>
                    Confirm sending the form
                </h2>
                <p>
                    By clicking the "Accept" button you consent to the processing of your personal data
                    for ther purpose of sending you offers and informations about actual events
                    and promotions on the provided e-mail address. 
                </p>
                <p className="administrator--data">
                    Data administrator: <br />
                    Hotel.ly Sp. z o. o. Kraków 12-345, Świętego Tomasza 21
                </p>
                <div className="newsletter--confirm--bottom">
                    <div className="newsletter--confirm--regulations-accept">
                        <input type="checkbox" className='newsletter--confirm--checkbox' onChange={handleCheckboxChange} checked={regulationsChecked}></input>
                        <p>Accept the regulations</p>
                    </div>
                    <p className="newsletter--confirm--regulations--declined">{regulationsNotAccepted}</p>
                    <div className="buttons_newsletter--confirm">
                        <button onClick={regulationsDecline} className="button_newsletter--confirm--decline">❌Decline</button>
                        <button onClick={regulationsAccept} className="button_newsletter--confirm--accept">✅Accept</button>
                    {/* {regulationsAccept ? <p>You have successfully signed up for the newsletter!</p> : ''} */}
                    </div>
                </div>
            </div>
        </div>
    )
}