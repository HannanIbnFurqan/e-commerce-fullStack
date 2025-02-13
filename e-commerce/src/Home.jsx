import React, { useEffect, useState } from 'react';
// import products from './data.js';
import Card from './ProductCard.jsx';
let Home = () => {
  const [productData, setProductData] = useState([]);
  // search functionality
  const [query, setQuery] = useState();
  // filter functionality
  const [allData, setAllData] = useState([])

  async function getData() {
    const data = await fetch('https://dummyjson.com/products');
    const obj = await data.json();
    console.log(obj.products)
    setAllData(obj.products)
    setProductData(obj.products)
  }

  useEffect(() => {
    getData()
  }, [])


  function handleTopRated() {
    const filterData = allData.filter((obj) => {
      return obj.rating >= 4
    })
    setProductData(filterData);
  }
  function handleCategory(category) {
    const filterCategory = allData.filter((obj) => {
      return obj.category == category
    })

    setProductData(filterCategory);
  }

  function handleSearch() {
    const search = allData.filter((obj) => {
      return obj.title.toLowerCase().includes(query.trim().toLowerCase())
    })
    setProductData(search);
    setQuery("");
  }


  return (
    <div className="w-screen h-[87vh]">
      <div className="flex justify-around mt-1.5">
        <button className="btn btn-outline btn-primary" onClick={handleTopRated}>Top Rated</button>
        <button className="btn btn-outline btn-primary" onClick={() => handleCategory('beauty')}>beauty</button>
        <button className="btn btn-outline btn-primary" onClick={() => handleCategory('furniture')}>furniture</button>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>Searchy</button>
        </div>
        <button className="btn btn-outline btn-primary" onClick={() => handleCategory('fragrances')}>fragrances</button>
        <button className="btn btn-outline btn-primary" onClick={() => handleCategory('groceries')}>groceries</button>
      </div>
      <div className="flex flex-wrap justify-around">
        {productData.map((items, index) => (
          <Card key={index} items={items} />
        ))}
      </div>
    </div>
  );
};

export default Home;
