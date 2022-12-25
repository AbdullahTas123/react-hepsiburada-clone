import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListArea.css"


export default function ProductListArea ({ products, productCount, setproductCount, filterText }) {

  const rows = []
  
  products.forEach(product => {
    if (product.title.toLowerCase().indexOf(filterText.toLowerCase()) == -1){
      return
    }

    rows.push(
      <ProductCard product={product} />
    )
  });

  setproductCount(rows.length)

  return (
    <div className='product-list-area'>
      {rows}
    </div>
  )
}
