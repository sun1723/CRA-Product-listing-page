import { useEffect,useState } from "react";
import { useSelector,connect } from "react-redux";
import "./App.css";

import Search from "./components/Search";
import  SortedList  from "./components/SortedList";
import {store} from './store'

function App() {
  const state = store.getState();
  console.log(state);
  return (
    <div className='App'>
      {/* <ProductList /> */}
      <Search />
      <SortedList />
    </div>
  );
}



export default App;
