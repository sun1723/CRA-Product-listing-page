import React, { useState } from "react";
import { connect } from "react-redux";
import  {setSort}  from "../actions/sortedProducts";


const Dropdown = (props) => {

  const updateSortByFilter = (e) => {
        // console.log(e.target.value);
    props.setSort(e.target.value);
    
    
  };
  return (
    <div>
      <label>Sort By:</label>
      <select onChange={updateSortByFilter}>
        <option value='-'>-</option>
        <option value='price low to high'>price low to high</option>
        <option value='price hight to low'>price hight to low</option>
      </select>     
     </div>
  );
};


export default connect(null, { setSort })(Dropdown);
