import React from "react";
import '../css/other.css';

export default function Other() {

    const showNewsletter = () => {
        const newsletter = document.querySelector('.newsletter');
        const newsletterOverlay = document.querySelector('.overlay');

        newsletter.classList.remove('newsletter--hidden');
        // newsletterOverlay.
    }

    return(
        <div id='other' className="other--list">
            <ul>
                <li><a>Regulations</a></li>
                <li><a>More</a></li>
                <li><a>About us</a></li>
                <li><a>Work with us</a></li>
                <li><a onClick={showNewsletter}>Newsletter</a></li>
                <li><a>Private policy</a></li>
                <li><a>Find your dream job</a></li>
                <li><a>Visit our place</a></li>
            </ul>
        </div>
    )
}