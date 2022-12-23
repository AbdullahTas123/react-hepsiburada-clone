import React from 'react';
import "./ProductCard.css"

export default function ProductCard ({data}) {

  function dataShow(product) {
    return (
      <div key={product.id} className='product'>
        <picture className='product__img'>
          <img src="https://unsplash.it/250/200" alt="unsplash" />
        </picture>
        <div className="product__content">
          <p className="product__offer">Hemen Al Sonra Öde</p>
          <h3 className='product__title'>{product.title}</h3>
          <p className='product__description'>{product.description}</p>
          <p>&#11088; &#11088; &#11088; &#11088; &#11088;</p>
          <div className="product__price">{product.price} TL</div>
          <button className='button'>Add To Card</button>
        </div>
      </div>
    )
  }

  return (
    <>
      {data.map(dataShow)}
    </>
  )
}

