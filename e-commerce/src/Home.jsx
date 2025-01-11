import products from './data.js';

let Home = () => {
    let first_obj = products[0];
    console.log(first_obj);
    return (
        <div className="border-2 border-white w-screen h-[87vh]">
            <div className="card card-compact bg-white w-96 shadow-xl">
                <figure>
                    <img
                        src={`${first_obj.thumbnail}`}
                        alt="Product Thumbnail" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{first_obj.category}</h2>
                    <p className="text-black">{first_obj.title}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
