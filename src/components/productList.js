import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
const ProductList = (props) => {
  
  const renderedProducts = props.list.map((product) => (
    <div key={product.goodsSn}>
      <h3>{product.goodsTitle}</h3>
      <p>{product.description}</p>
      <p> {product.displayPrice}</p>
    </div>
  ));
 

  return (
    <section>
      <h2>Products</h2>
      {renderedProducts}
    </section>
  );
  
};


export default ProductList;
