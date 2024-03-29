import React, { useState, useEffect } from "react";
import '../css/slider.css'
import icon_arrow from "../img/icon_arrow4.png";
import slider_hotel1 from "../img/slider_hotel6.jpg";
import slider_hotel2 from "../img/slider_hotel7.jpg";
import slider_hotel3 from "../img/slider_hotel3.jpg";
import slider_hotel4 from "../img/slider_hotel4.jpg";
import slider_hotel5 from "../img/slider_hotel5.jpeg";

export default function Slider() {
  const [curSlide, setCurSlide] = useState(0);

  const sliderImages = [
    slider_hotel1,
    slider_hotel2,
    slider_hotel3,
    slider_hotel4,
    slider_hotel5,
  ];

  const nextSlide = () => {
    setCurSlide((prevSlide) =>
      prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const previousSlide = () => {
    setCurSlide((prevSlide) =>
      prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
    );

  };

  const autoSlider = () => {
    setCurSlide((prevSlide) =>
      prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(autoSlider, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider--container">
      <button
        className="button--arrow button--arrow-left" onClick={previousSlide}>
        <img src={icon_arrow} alt="" />
      </button>
      {sliderImages.map((image, i) => (
        <img
          key={i}
          src={image}
          alt=""
          style={{
            opacity: i === curSlide ? 1 : 0,
            transition: "opacity 0.5s ease",
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: i === curSlide ? 1 : -1,
            objectFit: "cover",
            transform: `translateX(${100 * (i - curSlide)}%)`,
          }}
          className={`slider--image ${i === curSlide ? "active" : ""}`}
        />
      ))}
      <button className="button--arrow button--arrow-right" onClick={nextSlide}>
        <img src={icon_arrow} alt="" />
      </button>
    </div>
  );
};