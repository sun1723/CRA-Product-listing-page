import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/productsReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));
