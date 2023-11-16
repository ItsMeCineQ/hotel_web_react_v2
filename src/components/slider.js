import React, { useState, useEffect } from "react";
import arrow_img from "../img/icon_arrow.png";
import slider_hotel1 from "../img/slider_hotel.jpg";
import slider_hotel2 from "../img/slider_hotel2.jpg";
import slider_hotel3 from "../img/slider_hotel3.jpg";
import slider_hotel4 from "../img/slider_hotel4.jpg";
import slider_hotel5 from "../img/slider_hotel5.jpeg";

const Slider = () => {
    const [curSlide, setCurSlide] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
  
    const sliderImages = [
      slider_hotel1,
      slider_hotel2,
      slider_hotel3,
      slider_hotel4,
      slider_hotel5,
    ];
  
    useEffect(() => {
      const autoSlider = () => {
        const id = setInterval(() => {
          setCurSlide((prevSlide) =>
            prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
          );
        }, 5000);
        setIntervalId(id);
      };
  
      autoSlider();
  
      return () => {
        clearInterval(intervalId);
      };
    }, [intervalId, sliderImages.length]);
  
    const nextSlide = () => {
      setCurSlide((prevSlide) =>
        prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
      );
      clearInterval(intervalId);
      autoSlider();
    };
  
    const previousSlide = () => {
      setCurSlide((prevSlide) =>
        prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
      );
      clearInterval(intervalId);
      autoSlider();
    };
  
    return (
      <div className="slider--container">
        <button className="button--arrow button--arrow-left" onClick={previousSlide}>
          <img src={arrow_img} alt="" />
        </button>
        {sliderImages.map((image, i) => (
          <img
            key={i}
            src={image}
            alt=""
            className={`slider--image ${i === curSlide ? "active" : ""}`}
          />
        ))}
        <button className="button--arrow button--arrow-right" onClick={nextSlide}>
          <img src={arrow_img} alt="" />
        </button>
      </div>
    );
  };

  export default Slider;