import React from "react";
import { useState } from "react";
import '../css/newsletter.css'

export default function Newsletter() {

    const [email, setEmail] = useState(false);
    const [error, setError] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const openConfirmationModal = () => {
        const modal = document.querySelector('.newsletter--success');
        
        if(!email){
            console.log('blabla')
            setError('Please fill your email.')
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
            <input type= 'text' onChange={e => setEmail(e.target.value)} className="newsletter--mail" placeholder="Your email..."></input>
            <button onClick={openConfirmationModal} className="button_newsletter--submit">Save</button>
            <button onClick={closeNewsletter} className="button_newsletter--close">x</button>
            {error && <p>{error}</p>}
            <div className="newsletter--success hidden">
                <button className="button_newsletter--success--close"></button>
                {submitSuccess && !error && <h2>You have successfully</h2>}
            </div>
        </div>
    )
}