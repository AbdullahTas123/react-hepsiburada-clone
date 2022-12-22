import React from 'react';
import "./ProductCard.css"

export default function ProductCard ({data}) {

  function dataShow(product) {
    return (
      <div key={product.id} className='card'>
        <img src="" alt="" />
        <div className="card-info">
          <h3 className='card-header'>{product.title}</h3>
          <div className="card-over">
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>
        </div>
        <div className="card-price">{product.price} TL</div>
        <p className='buttonAdd'><button>Add To Card</button></p>
      </div>
    )
  }

  return (
    <>
      {data.map(dataShow)}
    </>
  )
}

