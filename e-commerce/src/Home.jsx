import { useState } from 'react';
import products from './data.js';
import Card from './Card.jsx';
let Home = () => {
    let obj = products[0];
    // const [allProduct, setAllProduct] = useState(products)
   
    return (
        <div className=" w-screen h-[87vh]">
            <div>
            <button className="btn btn-outline btn-primary">Primary</button>

            </div>
            <div className='flex flex-wrap justify-around'>
            {
                products.map((obj)=> <Card obj={obj}></Card>)
            }
            </div>
            
        </div>
    )
}

export default Home;
