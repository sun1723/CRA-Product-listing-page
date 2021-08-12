import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import {setSort} from '../actions/sortedProducts'
const ProductList =  ({products}) => {

  
  return (
    <section>
      {console.log(products)}
      <h2>Products</h2>
      {products.map(product =>
        <div key={product.goodsSn}>
          <h3>{product.goodsTitle}</h3>
          <p>{product.description}</p>
          <p> {product.displayPrice}</p>
        </div>
      )}
    </section>
  );

};

export default ProductList;


