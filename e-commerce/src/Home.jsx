import products from './data.js'
let Home = () => {
    let first_obj = products[0];
    console.log(first_obj);
    return (
        <div className="border-2 border-red-50 w-screen h-[87vh]">
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={`${first_obj.thumbnail}`}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{first_obj.category}</h2>
                    <p>{first_obj.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home