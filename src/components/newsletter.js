import React,{ useState } from "react";
import '../css/newsletter.css';
import {Spinner, loadTime } from './spinner.js';
import icon_mail from '../img/icon_mail.png';
import icon_close from '../img/icon_close.png';
import icon_positive from '../img/icon_positive.png';

export default function Newsletter() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [regulationsNotAccepted, setRegulationsNotAccepted] = useState(false);
    const [sendMail, setSendMail] = useState(false);
    const [regulationsChecked, setRegulationsChecked] = useState(false);
    const [isConfirmationVisible, setConfirmationVisible] = useState(false);
    const [isPositiveVisible, setPositiveVisible] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    const overlay = document.querySelector('.overlay');
    const newsletter = document.querySelector('.newsletter');
    const regulationsDeclined = document.querySelector('.newsletter--confirm--regulations--declined');

    const openConfirmationModal = () => {
        if (!email) {
            setError('Please fill in your email.');
        } else {
            setSendMail(true);
            setEmail('');
            setError('');
            setConfirmationVisible(true);
            overlay.classList.add('overlay--active');
            document.body.style.overflow = 'hidden';
        }
    }

    const closeNewsletter = () => {
        setConfirmationVisible(false);
        setPositiveVisible(false);
        setSendMail(false);
        setEmail('');
        setError('');
        setRegulationsChecked(false);

        if(newsletter)
            newsletter.classList.add('newsletter--hidden');

        document.body.style.overflow = '';
    }

    const regulationsAccept = async () => {
        if (!regulationsChecked) {
            regulationsDeclined.classList.remove('hidden');
            setRegulationsNotAccepted('Please accept the regulations.');
        } else {
            setShowSpinner(true);
            await loadTime(1000);
            setShowSpinner(false);
            positiveTimeout();
        }
    }

    const positiveTimeout = () => {
        setPositiveVisible(true);
        
            setTimeout(() => {
                setConfirmationVisible(false);
                setPositiveVisible(false);
                closeNewsletter();
                overlay.classList.remove('overlay--active');
            }, 2000);
    }

    const regulationsClose = () => {
        setConfirmationVisible(false);
        setPositiveVisible(false);
        setRegulationsNotAccepted('');
        setRegulationsChecked(false);

        newsletter.classList.add('newsletter--hidden');
        overlay.classList.remove('overlay--active');
        document.body.style.overflow = '';
    }

    const handleCheckboxChange = () => {
        setRegulationsChecked(!regulationsChecked);
        setRegulationsNotAccepted('');
    };

    return(
        
        <div className="overlay">
            <div className='newsletter newsletter--hidden'>
                <p className="newsletter--message">Sign up for the newsletter, receive a discount and stay up to date!</p>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} className="newsletter--mail" placeholder="Your email..."></input>
                <button onClick={openConfirmationModal} className="button_newsletter--submit"><img src={icon_mail}></img></button>
                <button onClick={closeNewsletter} className="button_newsletter--close"><img src={icon_close}></img></button>
                {error && <p className="newsletter--error">{error}</p>}
            </div>
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
                            <button onClick={regulationsClose} className="button_newsletter--confirm--decline">Decline</button>
                            <button onClick={regulationsAccept} className="button_newsletter--confirm--accept">Accept</button>
                        </div>
                    </div>
                {showSpinner && <Spinner />}
                    <div className={`newsletter--confirm--regulations--positive ${isPositiveVisible ? '' : 'hidden'}`}>
                        <img src={icon_positive}></img>
                    </div>
                </div>
        </div>
    )
}