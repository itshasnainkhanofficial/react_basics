import { productActionTypes } from "../constants/actionTypes";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case productActionTypes.SET_PRODUCTS:
        return { ...state, products: payload };
      default:
        return state;
    }
  };

  export const selectedProductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case productActionTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case productActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };