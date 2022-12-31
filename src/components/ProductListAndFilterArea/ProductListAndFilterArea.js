import React, { useState } from "react";
import "./ProductListAndFilterArea.css"
import FiltersArea from "../FiltersArea/FiltersArea";
import ProductListArea from "../ProductListArea/ProductListArea";


export default function ProductListAndFilterArea ({products, filterText}) {

  const productList = products.filter(product => product.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);

  const productCount = productList.length;

  return (
    <div className="product-list-area-wrapper">
      <FiltersArea productCount={productCount} />
      <ProductListArea 
        products={productList} 
        filterText={filterText}
        productCount={productCount}
      />
    </div>
  )
}