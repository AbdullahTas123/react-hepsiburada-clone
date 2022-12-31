import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./ImageSlider.css"
import SliderImages from "../../constants/slider-images";


export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const path = `../../assets/images/slider-images/${slides[currentImage]}`;
  const length = SliderImages.length;

  // automatically slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex == length - 1 ? 0 : currentIndex + 1);
    }, 5000);
  
    return () => {
      clearInterval(interval);
    }
  }, [currentIndex, length]);
  

  const prevImage = () => {
    setCurrentIndex(currentIndex == 0 ? length - 1 : currentIndex - 1);
  }

  const nextImage = () => {
    setCurrentIndex(currentIndex == length - 1 ? 0 : currentIndex + 1);
  }

  if (!Array.isArray(SliderImages) || length <= 0) {
    return null;
  }

  return (
    <div className='slider'>
      <div className="slider-image-area">
        <div className='left-arrow-area'>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevImage} />
        </div>

        <img className='slider-image' src={SliderImages[currentIndex]} alt="product images" />

        <div className='right-arrow-area'>
          <FaArrowAltCircleRight className='right-arrow' onClick={nextImage} />
        </div>
        
      </div>
      <div className='slider-circles'>
        {SliderImages.map((image, index) => 
          <button onClick={() => setCurrentIndex(index)} 
          className={index == currentIndex ? "circle active" : "circle"} key={index}>
          </button> 
        )}
      </div>    
    </div>
  );
}


// export default function ImageSlider({ slides }) {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const goToNext = () => {
//     setCurrent(current == length - 1 ? 0 : current + 1);
//   }

//   const goToPrev = () => {
//     setCurrent(current == 0 ? length - 1 : current - 1);
//   }

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <section className='slider'>
      // <FaArrowAltCircleLeft className='left-arrow' onClick={goToPrev} />
      // <FaArrowAltCircleRight className='right-arrow' onClick={goToNext} />
      // {SliderData.map((slide, index) => {
      //   return (
      //     <div
      //       className={index === current ? 'slide active' : 'slide'}
      //       key={index}
      //     >
      //       {index === current && (
      //         <img src={slide.image} alt='travel image' className='image' />
      //       )}
      //     </div>
      //   );
      // })}
//     </section>
//   );
// }




