import React, { useState } from "react";
import { connect } from "react-redux";
import fetchProducts from "../actions/fetchProducts";

const Search =  (props) => {
  const [input, setInput] = useState("");

  const updateInput = (input) => {
    setInput(input);
  };

  const handleSearch = (event) => {
    //dispathes action to search
    props.fetchProducts(input);
    //     console.log(props.fetchProducts(input));
    //set input back to empty string
    setInput("");
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Movie Title'
        onChange={(e) => updateInput(e.target.value)}
        value={input}
      />
      <button onClick={handleSearch}>Search</button>
      {/* {console.log(props.products)} */}
    </div>
  );
};

export default connect(null,{fetchProducts})(Search);





