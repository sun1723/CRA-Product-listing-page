import { useSelector } from "react-redux";
export const ProductList = () => {
  const products = useSelector((state) => state.products);

  const renderedProducts = products.map((product) => (
    <div key={product.id}>
      <h3>{product.name}</h3>
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
