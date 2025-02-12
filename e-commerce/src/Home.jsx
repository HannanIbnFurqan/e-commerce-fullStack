import React, { useState } from 'react';
import products from './data.js';
import Card from './Card.jsx';
let Home = () => {
  // search functionality
  const [query, setQuery] = useState();
  // for filter
  const [allData, setAllData] = useState([...products])
  const [Data, setData] = useState([...products])

  function handleTopRated(){
    const filterData = allData.filter((obj)=>{
      return obj.rating >= 4
    })
    setData(filterData);
  }
  function handleCategory(category){
      const filterCategory = allData.filter((obj)=>{
        return obj.category == category
      })

      setData(filterCategory);
  }

  function handleSearch(){
    const search = allData.filter((obj)=>{
      return obj.title.toLowerCase().includes(query.trim().toLowerCase())
    })
    setData(search);
    setQuery("");
  }
  return (
    <div className="w-screen h-[87vh]">
      <div className="flex justify-around mt-1.5">
      <button className="btn btn-outline btn-primary" onClick={handleTopRated}>Top Rated</button>
        <button className="btn btn-outline btn-primary" onClick={()=>handleCategory('beauty')}>beauty</button>
        <button className="btn btn-outline btn-primary" onClick={()=>handleCategory('furniture')}>furniture</button>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            value={query}
            onChange={(event)=> setQuery(event.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>Searchy</button>
        </div>
        <button className="btn btn-outline btn-primary" onClick={()=>handleCategory('fragrances')}>fragrances</button>
        <button className="btn btn-outline btn-primary" onClick={()=>handleCategory('groceries')}>groceries</button>
      </div>
      <div className="flex flex-wrap justify-around">
        {Data.map((items, index) => (
          <Card key={index} items={items} />
        ))}
      </div>
    </div>
  );
};

export default Home;
