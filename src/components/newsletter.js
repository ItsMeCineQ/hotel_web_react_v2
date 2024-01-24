import React from "react";
import { useState } from "react";
import '../css/newsletter.css';
import icon_mail from '../img/icon_mail.png';
import icon_close from '../img/icon_close.png';

export default function Newsletter() {

    const [email, setEmail] = useState(false);
    const [error, setError] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const openConfirmationModal = () => {
        const modal = document.querySelector('.newsletter--success');
        
        if(!email){
            setError('Please fill your email.');
        }else{
            setSubmitSuccess(true);
            setEmail('');
            setError('');
        }

        modal.classList.remove('hidden');
    }

    const closeNewsletter = () => {
        const newsletter = document.querySelector('.newsletter');

        newsletter.classList.add('hidden');
    }

    return(
        <div className="newsletter hidden">
            <p>Sign up for the newsletter, receive a discount and stay up to date!</p>
            <input type= 'text' onChange={e => setEmail(e.target.value)} className="newsletter--mail" placeholder="Your email..."></input>
            <button onClick={openConfirmationModal} className="button_newsletter--submit"><img src={icon_mail}></img></button>
            <button onClick={closeNewsletter} className="button_newsletter--close"><img src={icon_close}></img></button>
            {error && <p className="newsletter--error">{error}</p>}
            <div className="newsletter--success hidden">
                <button className="button_newsletter--success--close"></button>
                {submitSuccess && !error && <p>You have signed up for newsletter!</p>}
            </div>
        </div>
    )
}