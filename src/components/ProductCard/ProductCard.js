import React from 'react';
import "./ProductCard.css"

export default function ProductCard ({data}) {

  function dataShow(product) {
    return (
      <div key={product.id} className="card">
        <img src="" alt=""/>
        <h1>{product.title}</h1>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <p><button>Add to Cart</button></p>
      </div>
    )
  }

  return (
    <>
      {data.map(dataShow)}
    </>
  )
}

