import React from 'react'
import { useNavigate } from 'react-router-dom';
import { addCart } from './utility/store/CartSlice';
import {useDispatch} from "react-redux"
function Card({ items = {}, theme }) {
    const { thumbnail, title, price, rating, brand, category, id } = items || {};
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleNavigation = () => {
      navigate(`/product/${id}`);
    };

    const StopEvent = (e) =>{
        dispatch(addCart(items))
        e.stopPropagation();
    }

    // Define background color based on theme
  const cardTheme = theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white";
    return (
        <div className={`card card-compact  w-96 shadow-xl m-5 hover:outline outline-offset-2 ${cardTheme}`} onClick={handleNavigation}>
            <figure>
                <img className='h-48'
                    src={`${thumbnail}`}
                    alt="Product Thumbnail" />
            </figure>
            <div className="card-body">

                <p className="text-gray">{title}</p>
                <div className='flex gap-2'>
                   <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{brand}</span>
                    <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{category}</span>
                </div>

                <p className='text-xl font-bold'>{price} $</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white" onClick={StopEvent}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card


