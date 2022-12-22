import React, { useState, useEffect } from "react";
import ProductListArea from "../components/ProductListArea/ProductListArea";
import Header from "../components/Header/Header";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <>
      <Header />
      <ProductListArea data={data} />
    </>  
  );
}