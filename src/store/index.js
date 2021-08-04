import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/productsReducer";
import { createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
