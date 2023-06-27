import React, { useState } from "react";
import "./Carousel.css";
export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>{`<`}</button>
      <img
        style={{ width: "100px" }}
        src={images[currentIndex]}
        alt="carouselImage"
      />
      <button onClick={handleNext}>{`>`}</button>
    </div>
  );
}
