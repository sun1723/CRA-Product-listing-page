import React, { useState } from "react";
import { connect } from "react-redux";
import  setSort  from "../actions/sortedProducts";
import  ProductList  from "./productList";

const Dropdown = (props) => {
  const [pros,setPros] = useState(props.products);
  const updateSortByFilter = (e) => {
        // console.log(e.target.value);
    props.setSort(e.target.value);
    setPros(props.products)
  };
  return (
    <div>
      <label>Sort By:</label>
      <select onChange={updateSortByFilter}>
        <option value='-'>-</option>
        <option value='price low to high'>price low to high</option>
        <option value='price hight to low'>price hight to low</option>
      </select>

     <ProductList productlist={pros}/>
     </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
  products: state.products,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps, { setSort })(Dropdown);
