import React from "react";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

function ProductComponent() {
  const allProducts = useSelector((state) => state.allProducts.products);
const Products = allProducts.map(product => {
    return (
        
    <div className="rounded overflow-hidden shadow-lg p-5" key={product.id}>
        <Link to={`/product/${product.id}`}>
      <img className="m-auto" src={product.image} alt="Mountain" width="100px" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block text-white bg-indigo-400 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
          $ {product.price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
      </Link>
    </div>
 
    )
})
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10" >

{Products}

    </div>
  );
}

export default ProductComponent;
