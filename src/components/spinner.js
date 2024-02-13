import React, { useState } from "react";
import '../css/spinner.css';
import icon_loading from '../img/icon_loading.png';

const loadTime = async (time) => {

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
}

function Spinner () {

    return (
        <div className="spinner">
            <img src={icon_loading}></img>
        </div>
    );
}

export { Spinner, loadTime};