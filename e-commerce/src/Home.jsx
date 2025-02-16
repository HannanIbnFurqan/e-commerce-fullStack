import React, { useEffect, useState, useContext } from 'react';
import Card from './ProductCard.jsx';
import { ThemeStore } from './utility/themeController.jsx';

let Home = () => {
  const { theme } = useContext(ThemeStore);  // Getting theme state
  const [productData, setProductData] = useState([]);
  const [query, setQuery] = useState("");
  const [allData, setAllData] = useState([]);

  async function getData() {
    const data = await fetch('https://dummyjson.com/products');
    const obj = await data.json();
    setAllData(obj.products);
    setProductData(obj.products);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleTopRated() {
    setProductData(allData.filter((obj) => obj.rating >= 4));
  }

  function handleCategory(category) {
    setProductData(allData.filter((obj) => obj.category === category));
  }

  function handleSearch() {
    setProductData(allData.filter((obj) => obj.title.toLowerCase().includes(query.trim().toLowerCase())));
    setQuery("");
  }

  // Theme classes
  const darkTheme = "flex flex-wrap justify-around bg-gray-600 text-white";
  const lightTheme ="flex flex-wrap justify-around bg-gray-100 text-black";
  // className={theme === "light" ? lightTheme : darkTheme}
  return (
    <div  className="w-screen h-[87vh]">  {/* Fixed */}
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
          <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
        <button className="btn btn-outline btn-primary" onClick={() => handleCategory('fragrances')}>fragrances</button>
        <button className="btn btn-outline btn-primary" onClick={() => handleCategory('groceries')}>groceries</button>
      </div>
      <div className={theme === "light" ? lightTheme : darkTheme}>
        {productData.map((items, index) => (
          <Card key={index} items={items} theme={theme}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
