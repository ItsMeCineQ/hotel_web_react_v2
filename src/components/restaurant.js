import React from "react";
import '../css/restaurant.css';
import image_restaurant from '../img/image_restaurant.jpg'

export default function Restaurant () {
    return(
        <div id='restaurant' className="restaurant--container section">
            <img src={image_restaurant}></img>
            <div className="restaurant--container-details">
                <h1>Our restaurant</h1>
                <p>Indulge your palate with a diverse array of dishes, expertly prepared to satisfy the most discerning tastes. From signature cocktails at the stylish bar to appetizers that tantalize the senses, each course is a culinary journey designed to delight. Our attentive and knowledgeable staff is dedicated to ensuring your dining experience is nothing short of exceptional, providing personalized service to make every moment memorable.</p>
            </div>
        </div>
    )
}