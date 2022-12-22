import React from 'react';
import "./ProductCard.css"

export default function ProductCard ({data}) {

  function dataShow(product) {
    return (
      <div class="card">
        <img src="" alt="" style="width:100%"/>
        <h1>{product.title}</h1>
        <p class="price">{product.price}</p>
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

