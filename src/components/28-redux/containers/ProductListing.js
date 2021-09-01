import React, { Suspense, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {setProducts} from '../redux/actions/productActions'
const ProductComponent = React.lazy(() => import('./ProductComponent'));
function ProductListing() {
    

    const dispatch = useDispatch()


  useEffect(() => {
    const fetchProducts = () => {
        axios.get("https://fakestoreapi.com/products")
          .then((response) => {
            console.log(response.data);
            dispatch(setProducts(response.data))
          })
          .catch((error) => {
            console.log(error);
          });
      };

    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <h1 className="flex justify-center p-5 font-bold text-3xl">Product list</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductComponent />
      </Suspense>
    </div>
  );
}

export default ProductListing;
