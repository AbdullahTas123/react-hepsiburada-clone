import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListArea.css"


export default function ProductListArea ({ products, productCount, setproductCount }) {
  function dataShow(product) {

    return (
      <ProductCard product={product} />
    )
  }

  return (
    <div className='product-list-area'>
      {products.map(dataShow)}
    </div>
  )
}
