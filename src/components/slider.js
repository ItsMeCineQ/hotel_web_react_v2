import React, { useState, useEffect } from "react";
import arrow_img from "../img/icon_arrow.png";
import slider_hotel1 from "../img/slider_hotel.jpg";
import slider_hotel2 from "../img/slider_hotel2.jpg";
import slider_hotel3 from "../img/slider_hotel3.jpg";
import slider_hotel4 from "../img/slider_hotel4.jpg";
import slider_hotel5 from "../img/slider_hotel5.jpeg";

const Slider = () => {
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

  // Start autoSlider with setInterval
  useEffect(() => {
    const intervalId = setInterval(autoSlider, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);



  return (
    <div className="slider--container">
      <button
        className="button--arrow button--arrow-left"
        onClick={previousSlide}
      >
        <img src={arrow_img} alt="" />
      </button>
      {sliderImages.map((image, i) => (
        <img
          key={i}
          src={image}
          alt=""
          style={{
            width: "100%", // Adjust this as needed
            transition: "transform 0.5s ease",
            transform: `translateX(${100 * (i - curSlide)}%)`,
          }}
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