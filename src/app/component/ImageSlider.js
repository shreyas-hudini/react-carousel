"use client";
import React, { useState } from "react";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrent] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const leftarrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    // zIndex: 1,
    cursor: "pointer",
  };

  const pointerStyle = {
    display: "flex",
    fontSize: "70px",
    justifyContent: "center",
  };
  const pointStyle = {
    cursor: "pointer",
  };
  const rightarrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    // zIndex: 1,
    cursor: "pointer",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrent(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    console.log(newIndex);
    setCurrent(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };
  return (
    <>
      <div style={sliderStyles}>
        <div style={leftarrowStyle} onClick={goToPrevious}>
          &lt;
        </div>
        <div style={rightarrowStyle} onClick={goToNext}>
          &gt;
        </div>
        <div style={slideStyles}></div>
        <div style={pointerStyle}>
          {slides.map((slide, slideIndex) => (
            <div
              style={pointStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              -
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
