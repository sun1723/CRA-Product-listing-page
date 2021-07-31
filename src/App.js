import "./App.css";
import Dropdown from "./components/Dropdown";
import { ProductList } from "./components/productList";
import Search from "./components/Search";

function App() {
  return (
    <div className='App'>
      {/* <ProductList /> */}
      <Search />
      <Dropdown />
      <ProductList />
    </div>
  );
}

export default App;
