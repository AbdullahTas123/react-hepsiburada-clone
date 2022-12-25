import React, { useState, useEffect } from "react";
// import ProductListArea from "../components/ProductListArea/ProductListArea";
import Header from "../components/Header/Header";
import ProductListAndFilterArea from "../components/ProductListAndFilterArea/ProductListAndFilterArea";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import {SliderData} from "../constants/sliderData";
import ProductTitleArea from "../components/ProductTitleArea/ProductTitleArea";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [productCount, setproductCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }


  return (
    <div className="wrapper">
      <Header 
        filterText={filterText}
        setFilterText={setFilterText}
      />

      <ImageSlider slides={SliderData}/>

      <ProductTitleArea />

      <ProductListAndFilterArea
        products={data}
        filterText={filterText}
        productCount={productCount}
        setproductCount={setproductCount}
      />
    </div>  
  );
}