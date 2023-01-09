import React from 'react';
import "./ProductCard.css";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

function calculateRating (rating) {
  const result = []
  for (let i = 0; i < 5; i++) {
    if (rating >= 1){
      result.push(<BsStarFill key={i} className="product-star fill" />);
      rating -= 1
    }
    else if (rating > 0) {
      if (rating + 0.25 >= 1){
        result.push(<BsStarFill key={i} className="product-star fill"/>);
      }
      else if (rating + 0.25 >= 0.50) {
        result.push(<BsStarHalf key={i} className="product-star half"/>);
      }
      else {
        result.push(<BsStar key={i} className="product-star empty"/>);
      }
      rating -= rating
    }
    else {
      result.push(<BsStar key={i} className="product-star empty"/>);
    }
  }
  return result;
}

export default function ProductCard ({product}) {
  return (
    <div className='product' title={product.title}>
      <picture className='product-img'>
        <img src="https://unsplash.it/250/200" alt="unsplash" />
      </picture>
      <div className="product-content">
        <p className="product-offer">Hemen Al Sonra Öde</p>
        <h3 className='product-title' >{product.title}</h3>
        {/* <p className='product-description' title={product.description}>{product.description}</p> */}
        <div className='product-rating-area'>
          <p>{calculateRating(product.rating.rate)}</p>
          <p className='product-rating'>{product.rating.rate}</p>
        </div>

        <div className="product-price">{product.price} TL</div>
        <button className='button'>Add To Card</button>
      </div>
    </div>
  )
}




// const result = []
// for (let i = 0; i < 5; i++) {
//   if (rating >= 1){
//     result.push(<BsStarFill key={i} className="product-star fill" />);
//     rating -= 1
//   }
//   else if (rating > 0) {
//     if (rating >= 0.5){
//       result.push(<BsStarHalf key={i} className="product-star half"/>);
//     }
//     else {
//       result.push(<BsStar key={i} className="product-star empty"/>);
//     }
//     rating -= rating
//   }
//   else {
//     result.push(<BsStar key={i} className="product-star empty"/>);
//   }
// }