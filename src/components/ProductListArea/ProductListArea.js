import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListArea.css"


export default function ProductListArea ({ data }) {
  return (
    <div className='container'>
      <ProductCard data={data} />
    </div>
  )
}
