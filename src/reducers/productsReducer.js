import { createSlice } from "@reduxjs/toolkit";
import { FETCH_PRODUCT, SET_SORT } from "../constant/actionType";
import { SORT_FILTER } from "../constant/sort_filter";

const initialState = [];
const fetchProduct = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      // console.log("fetchproduct is activated", action.payload);
      return action.payload;
    case SET_SORT:
      const selectedSOrt = action.payload;
      console.log(state)
      const newState = { ...state ,products :
        (selectedSOrt == SORT_FILTER.PRICE_LOW_TO_HIGH)
          ? state.products.sort((a, b) => b.displayPrice - a.displayPrice)
          : state.products.sort((a, b) => a.displayPrice - b.displayPrice)};
      console.log(newState.products);
      return newState.products;

    default:
      return state;
  }
};

const rootReducer = (state, action) => {
  return {
    products: fetchProduct(state, action),
  };
};

export default rootReducer;
