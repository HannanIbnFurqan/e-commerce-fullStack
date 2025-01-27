import React from 'react';
// import products from './data.js';
import Card from './Card.jsx';
let Home = ({ productData }) => {
  return (
    <div className="w-screen h-[87vh]">
      <div className="flex justify-around mt-1.5">
        <button className="btn btn-outline btn-primary">beauty</button>
        <button className="btn btn-outline btn-primary">furniture</button>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button className="btn btn-primary">Searchy</button>
        </div>
        <button className="btn btn-outline btn-primary">fragrances</button>
        <button className="btn btn-outline btn-primary">groceries</button>
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
