import React, { useState } from 'react';
import './ProjectCarousel.css'
import { Link } from 'react-router-dom'

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="card-container">

      <button onClick={prevSlide} className="card-button card-button-prev">
        &lt;
      </button>

      <div className="card">
        <h1>{data[activeIndex].heading}</h1>
        <img src={data[activeIndex].image} />
        <Link to="/projects">&#9733; View Projects Page</Link>
      </div>

      <button onClick={nextSlide} className="card-button card-button-next">
          &gt;
        </button>

    </div>
  );
};
export default Carousel;