import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const fetchProduct = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      console.log("fetchproduct is activated", action.payload);
      return action.payload;
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
