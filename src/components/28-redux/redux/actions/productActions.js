import { productActionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
  return {
    type: productActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: productActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
    return {
      type: productActionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };

// // another way to create action
// export const setProducts = (products) => ({
//   type: productActionTypes.SET_PRODUCTS,
//   payload: {
//     products: products,
//   }
// });
// export const setProducts = (products) => ({
//     type: productActionTypes.SET_PRODUCTS,
//     payload: products,
// })
