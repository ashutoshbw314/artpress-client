import React from "react";
import {Link} from "react-router-dom";

function ProductCard({data}) {
  return (
    <div>
      <div className='flex flex-col items-center p-2 overflow-hidden border-2 border-indigo-400 rounded-lg shadow-lg border-opacity-90 hover:scale-110 hover:border-indigo-800 transform transition-all bg-opacity-90'>
        <img className='flex-shrink-0 object-cover h-64 lg:object-contain' src={data.imageURL} alt={data.name} />
        <div className='self-start py-1'>
          <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
          <p>By <i>{data.artistName}</i></p>
        </div>
        <div className='flex justify-between w-full'>
          <div className='text-2xl text-blue-500'>
            ${data.price}
          </div>
          <Link to={`/checkout/${data._id}`}>
            <button className='block px-3 py-2 rounded-lg transform transition bg-blue-500 hover:bg-blue-600 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 uppercase tracking-wider font-semibold text-sm text-white shadow  cursor-pointer '>Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

