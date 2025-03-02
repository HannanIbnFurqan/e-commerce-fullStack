import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from './utility/store/CartSlice'
import { useParams } from 'react-router-dom'
import Review from './Review'
import ShimmerUI from "./ShimmerUI"
function SingleProductPage() {
    const CartItems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch();


    const [obj, setObj] = useState(null)
    const { id } = useParams();
    const getData = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const objData = await response.json();
        setObj(objData)

    }

    useEffect(() => {
        getData()
    }, [])
console.log('id = ', id)
    if (obj == null) {
        return <div className='flex justify-center w-1/2 h-[50%]'><ShimmerUI></ShimmerUI></div>
    }

    const { thumbnail, title, description, category, price, rating, stock, brand, reviews } = obj

    const checkCart = () => {
        const objIdx = CartItems.findIndex((cartObj) => cartObj.objData.id === Number(id));
        console.log('objIdx = ', objIdx); // Debugging
        return objIdx !== -1;
    };
    

    return (
        <div className='bg-base-200 w-1/2 m-auto mt-5'>
            {checkCart() != -1 ? <div className='bg-orange-500 h-[2rem] w-[7rem] p-1 text-black rounded-2xl font-bold'>Added to cart</div> : null }
            <div className="card card-side bg-base-900 shadow-xl">
                <figure>
                    <img
                        src={thumbnail}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div>
                    <button className="btn">
                    price
                            <div className="badge badge-secondary">{price}</div>
                        </button>

                        <button className="btn">
                        rating
                            <div className="badge badge-secondary">{rating}</div>
                        </button>

                        <button className="btn">
                        category
                            <div className="badge badge-secondary">{category}</div>
                        </button>

                        <button className="btn">
                        stock
                            <div className="badge badge-secondary">{stock}</div>
                        </button>

                        <button className="btn">
                        brand
                            <div className="badge badge-secondary">{brand}</div>
                        </button>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={()=> dispatch(addCart(obj))}>Buy Now</button>
                    </div>
                </div>
            </div>
            {
                reviews.map((obj)=>{
                    return(
                        <div>
                            <Review obj={obj}></Review>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SingleProductPage