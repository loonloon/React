import React from "react";
import Product from "./product";

const ProductList = ({ products, compare }) => {
  return (
    <div className="row mt-3">
      {products.map(product => (
        <Product key={product.id} product={product} compare={compare} />
      ))}
    </div>
  );
};

export default ProductList;
