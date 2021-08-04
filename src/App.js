import { useSelector } from "react-redux";
import "./App.css";
import Dropdown from "./components/Dropdown";

import Search from "./components/Search";

function App() {
  const products = useSelector(state => state.products);
  return (
    <div className='App'>
      {/* <ProductList /> */}
      <Search />
      <Dropdown />
     
    </div>
  );
}

export default App;
