import { useSelector } from "react-redux";
import "./App.css";
import Dropdown from "./components/Dropdown";
import  ProductList  from "./components/productList";
import Search from "./components/Search";

function App() {
  const products = useSelector((state => state.products))
  return (
    <div className='App'>
      {/* <ProductList /> */}
      <Search />
      <Dropdown />
      <ProductList list={products}/>
    </div>
  );
}

export default App;
