import React from "react";
import '../css/spinner.css';
import icon_loading from '../img/icon_loading.png';

function Spinner () {

    const loadTime = (time) => {
        const spinner = document.querySelector('.spinner');

        if (spinner) {
            spinner.classList.remove('hidden');

            return new Promise((resolve) => {
                setTimeout(() => {
                    spinner.classList.add('hidden');
                    resolve();
                }, time);
            });
        }

        return Promise.resolve();

    }

    return(
        <div className="spinner hidden">
            <img src={icon_loading}></img>
        </div>
    )
}

export { Spinner };