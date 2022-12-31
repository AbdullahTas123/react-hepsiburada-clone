import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListArea.css"


export default function ProductListArea ({ products }) {
  return (
    <div className='product-list-area'>
      {
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
  )
}



