import React from "react";
import "./FiltersArea.css"


export default function FiltersArea ({productCount}) {
  return (
    <div className="product-list-regulators">
      <div className="total-product-count">
        <span><b>{productCount}</b> ürün listeleniyor</span>
      </div>

      <div className="brand-filter">
        <form>
          <label htmlFor="brand-filter">Marka</label>
          <input type="text" placeholder="Marka ara..." />
          <select id="brand-filter">
            <option value="all">Tüm Markalar</option>
            <option value="brand1">Marka 1</option>
            <option value="brand2">Marka 2</option>
            <option value="brand3">Marka 3</option>
          </select>
        </form>
      </div>

      <div className="price-range-filter"></div>
      <div className="evaulation-score-filter"></div>
    </div>
  )
}