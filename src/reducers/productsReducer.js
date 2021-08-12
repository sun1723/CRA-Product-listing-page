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
      const selectedSort = action.payload.sort;
      console.log(state)
      const newState = { ...state ,products :
        (selectedSort === SORT_FILTER.PRICE_HIGH_TO_LOW)
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
