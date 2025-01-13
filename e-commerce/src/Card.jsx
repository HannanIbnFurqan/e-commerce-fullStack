import React from 'react'
function Card({obj}) {
    const {thumbnail, title, price, rating, brand, category} = obj;
    return (
        <div className="card card-compact bg-white w-96 shadow-xl m-5">
            <figure>
                <img className='h-48'
                    src={`${thumbnail}`}
                    alt="Product Thumbnail" />
            </figure>
            <div className="card-body">

                <p className="text-black">{title}</p>
                <div className='flex gap-2'>
                    <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{brand}</span>
                    <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{category}</span>
                </div>

                <p className='text-xl font-bold'>{price} $</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card
