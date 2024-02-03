import React from "react";
import '../css/spinner.css';
import icon_loading from '../img/icon_loading.png';

const loadTime = async (time) => {
    const spinner = document.querySelector('.spinner');

    if (spinner)
        spinner.classList.remove('hidden');

        await new Promise((resolve) => {
            setTimeout(() => {
                console.log('spinner');
                spinner.classList.add('hidden');
                resolve();
            }, time);
        });
}

function Spinner () {
    return(
        <div className="spinner">
            <img src={icon_loading}></img>
        </div>
    )
}

export { Spinner, loadTime};