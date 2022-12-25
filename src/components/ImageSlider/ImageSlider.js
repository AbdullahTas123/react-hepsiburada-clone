import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./ImageSlider.css"
import {SliderData} from "../../constants/sliderData";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const goToNext = () => {
    setCurrent(current == length - 1 ? 0 : current + 1);
  }

  const goToPrev = () => {
    setCurrent(current == 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={goToPrev} />
      <FaArrowAltCircleRight className='right-arrow' onClick={goToNext} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
}

