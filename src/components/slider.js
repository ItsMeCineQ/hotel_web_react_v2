import React from "react"
import arrow_img from "../img/icon_arrow.png"
import slider_hotel1 from "../img/slider_hotel.jpg";
import slider_hotel2 from "../img/slider_hotel2.jpg";
import slider_hotel3 from "../img/slider_hotel3.jpg";
import slider_hotel4 from "../img/slider_hotel4.jpg";
import slider_hotel5 from "../img/slider_hotel5.jpeg";

const Slider = function () {
    const sliderImages = document.querySelectorAll('.slider--image');
    
    const btnArrowRight = document.querySelector('.button--arrow-right');
    const btnArrowLeft = document.querySelector('.button--arrow-left');

    let curSlide = 0;
    let interval;

    sliderImages.forEach((s, i) => {
        s.style.transform = `translateX(${100 * i}%)`;
    });
    
    const nextSlide = function(){
        if(curSlide === sliderImages.length - 1) curSlide = -1;
        curSlide++;
        sliderImages.forEach((s, i) => s.style.transform = `translateX(${100 * (i - curSlide)}%)`);
    };
    
    const previousSlide = function(){
        if(curSlide === 0) curSlide = sliderImages.length;
        curSlide--;
        sliderImages.forEach((s, i) => s.style.transform = `translateX(${100 * (i - curSlide)}%)`);
    };
    
    const autoSlider = () => {
        interval = setInterval(nextSlide, 5000);
    };
    autoSlider();

    btnArrowRight.addEventListener('click', function(){
        clearInterval(interval);
        nextSlide();
        autoSlider();
    });
    btnArrowLeft.addEventListener('click', function(){
        clearInterval(interval);
        previousSlide();
        autoSlider();
    });
    
    return (
        <div className="slider--container">
            <button className="button--arrow button--arrow-left">
                <img src={arrow_img} alt="" />
            </button>
            <img src={slider_hotel1} alt="" className="slider--image" />
            <img src={slider_hotel2} alt="" className="slider--image" />
            <img src={slider_hotel3} alt="" className="slider--image" />
            <img src={slider_hotel4} alt="" className="slider--image" />
            <img src={slider_hotel5} alt="" className="slider--image" />
            <button className="button--arrow button--arrow-right">
                <img src={arrow_img} alt="" />
            </button>
        </div>
    )
};

export default Slider;