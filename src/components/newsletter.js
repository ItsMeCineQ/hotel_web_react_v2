import React from "react";
import '../css/newsletter.css'

export default function Newsletter() {

    
    return(
        <div className="newsletter hidden">
            <input type= 'text' className="newsletter--mail" placeholder="Your email..."></input>
            <button className="button_newsletter--submit">Save</button>
            <button className="button_newsletter--close">x</button>
        </div>
    )
}