import React, { useState } from "react";
import "./ProductListAndFilterArea.css"
import FiltersArea from "../FiltersArea/FiltersArea";
import ProductListArea from "../ProductListArea/ProductListArea";


export default function ProductListAndFilterArea ({products, filterText, productCount, setproductCount}) {

  setproductCount(products.length)
  
  return (
    <div className="product-list-area-wrapper">
      <FiltersArea productCount={productCount} />
      <ProductListArea 
        products={products} 
        filterText={filterText}
        productCount={productCount}
        setproductCount={setproductCount}
      />
    </div>
  )
}