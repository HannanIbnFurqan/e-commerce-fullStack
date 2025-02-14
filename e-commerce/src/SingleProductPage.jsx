import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
function SingleProductPage() {
    const { id } = useParams();
    const getData = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const obj = await response.json();
        console.log(obj);
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='bg-base-200 w-1/2 m-auto mt-5'>
            <div className="card card-side bg-base-900 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductPage