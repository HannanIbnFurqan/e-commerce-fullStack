import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShimmerUI from "./ShimmerUI"
function SingleProductPage() {
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

    if (obj == null) {
        return <div className='flex justify-center w-1/2 h-[50%]'><ShimmerUI></ShimmerUI></div>
    }

    const { thumbnail, title, description, category, price, rating, stock, brand } = obj

    return (
        <div className='bg-base-200 w-1/2 m-auto mt-5'>
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
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductPage