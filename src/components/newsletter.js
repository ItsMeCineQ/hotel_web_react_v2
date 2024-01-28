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
    
    const newsletterConfirm = document.querySelector('.newsletter--confirm');
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
        
        newsletterConfirm.classList.remove('hidden');
    }
    
    const closeNewsletter = () => {

        newsletter.classList.add('hidden');
        newsletterConfirm.classList.add('hidden');

        setSendMail('');
        setEmail('');
        setError('');
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

        newsletterConfirm.classList.add('hidden');
        newsletter.classList.add('hidden');
        regulationsDeclined.classList.add('hidden');
    }

    const handleCheckboxChange = () => {
        
        setRegulationsChecked(!regulationsChecked);
        setRegulationsNotAccepted('');
    };

    return(
        <div className="newsletter hidden">
            <p>Sign up for the newsletter, receive a discount and stay up to date!</p>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} className="newsletter--mail" placeholder="Your email..."></input>
            <button onClick={openConfirmationModal} className="button_newsletter--submit"><img src={icon_mail}></img></button>
            <button onClick={closeNewsletter} className="button_newsletter--close"><img src={icon_close}></img></button>
            {error && <p className="newsletter--error">{error}</p>}
            <div className="newsletter--confirm hidden">
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
    )
}