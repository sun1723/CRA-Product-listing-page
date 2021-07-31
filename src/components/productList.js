import { useSelector } from "react-redux";
export const ProductList = () => {
  const products = useSelector((state) => state.products);

  const renderedProducts = products.map((product) => (
    <div key={product.goodsSn}>
      <h3>{product.goodsTitle}</h3>
      <p>{product.description}</p>
    </div>
  ));

  return (
    <section>
      <h2>Products</h2>
      {renderedProducts}
    </section>
  );
};
