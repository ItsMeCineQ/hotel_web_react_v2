import React from "react";
import '../css/spa.css';
import spa_image from '../img/spa_image2.jpg';
import spa_image2 from '../img/spa_image3.jpg';

export default function Spa () {
    return(
        <div id='spa' className="spa--container section">
            <img src={spa_image} className="spa--overlay"></img>
            <h1>Relaxation zone</h1>
            <div className="spa--container-details">
                <img src={spa_image2}></img>
                <div className="spa--container-details_text">
                    <h2>Spa zone</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam repudiandae dicta debitis, totam minima assumenda deserunt recusandae necessitatibus voluptatem ullam ad accusantium dolores eos pariatur saepe. Cum libero facere eum, nemo recusandae voluptate ex ad nulla dicta non error ratione, nihil, nesciunt quibusdam architecto odit fugit ipsam omnis obcaecati.</p>

                </div>
            </div>
        </div>
    )
}