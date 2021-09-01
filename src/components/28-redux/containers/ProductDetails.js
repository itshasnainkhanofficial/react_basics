import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct , removeSelectedProduct} from "../redux/actions/productActions";

function ProductDetails() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
//   console.log(product);
//   console.log(productId);

  useEffect(() => {
    const fetchProduct = () => {
        axios
          .get(`https://fakestoreapi.com/products/${productId}`)
          .then((response) => {
            console.log(response.data);
            dispatch(selectedProduct(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      };

    if (productId && productId !== "") fetchProduct();

    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId , dispatch]);

  return (
    <div>
      {Object.keys(product).length > 0 ? (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div className="rounded overflow-hidden shadow-lg" key={product.id}>
            <img
              className="w-5/12 m-auto"
              src={product.image}
              alt="Mountain"
              height="200px"
            />
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
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductDetails;
