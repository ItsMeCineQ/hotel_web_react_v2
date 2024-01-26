import React from "react";
import { useState } from "react";
import '../css/newsletter.css';
import icon_mail from '../img/icon_mail.png';
import icon_close from '../img/icon_close.png';

export default function Newsletter() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [sendMail, setSendMail] = useState(false);

    const openConfirmationModal = () => {
        const modalConfirm = document.querySelector('.newsletter--confirm');
        
        if(!email){
            setError('Please fill your email.');
        }else{
            setSendMail(true);
            setEmail('');
            setError('');
        }
        
        modalConfirm.classList.remove('hidden');
    }
    
    const closeNewsletter = () => {
        const newsletter = document.querySelector('.newsletter');
        const newsletterConfirm = document.querySelector('.newsletter--confirm');

        newsletter.classList.add('hidden');
        newsletterConfirm.classList.add('hidden');

        setSendMail('');
        setEmail('');
        setError('');
    }

    const regulationsAccept = () => {

    }

    const regulationsDecline = () => {

    }

    return(
        <div className="newsletter hidden">
            <p>Sign up for the newsletter, receive a discount and stay up to date!</p>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} className="newsletter--mail" placeholder="Your email..."></input>
            <button onClick={openConfirmationModal} className="button_newsletter--submit"><img src={icon_mail}></img></button>
            <button onClick={closeNewsletter} className="button_newsletter--close"><img src={icon_close}></img></button>
            {error && <p className="newsletter--error">{error}</p>}
            <div className="newsletter--confirm hidden">
                {sendMail && !error && <p></p>}
                <div className="buttons_newsletter--confirm">
                <button onClick={regulationsDecline} className="button_newsletter--confirm--decline">Decline</button>
                <button onClick={regulationsAccept} className="button_newsletter--confirm--accept">Accept</button>
                </div>
            </div>
        </div>
    )
}