import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/fetchProducts";

export const Search = (props) => {
  const [input, setInput] = useState("");

  const updateInput = (input) => {
    setInput(input);
  };

  const handleSearch = (event) => {
    //dispathes action to search
    //     console.log(event.target);
    console.log(input);
    fetchProducts(input);

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
      {console.log(props.products)}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { fetchProducts })(Search);
