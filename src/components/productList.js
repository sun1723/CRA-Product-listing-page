import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import setSort from '../actions/sortedProducts'
export default  ({productlist}) => {
 
  useEffect(()=>{
    console.log(productlist)
  },[productlist])


  return (
    <section>
      <h2>Products</h2>
      {productlist.map(product =>
        <div key={product.goodsSn}>
          <h3>{product.goodsTitle}</h3>
          <p>{product.description}</p>
          <p> {product.displayPrice}</p>
        </div>
      )}
    </section>
  );

};


