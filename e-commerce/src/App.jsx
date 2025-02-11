import { useEffect, useState } from 'react';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  let [productData, setProductData] = useState([]);
  // API call
  let getProducts = async () => {
    try {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      // get product data
      setProductData(data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Home productData={productData} />
    </>
  );
}

export default App;
