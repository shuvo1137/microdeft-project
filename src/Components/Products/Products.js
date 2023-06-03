import React from "react";

const Products = (props) => {
  const { category, description, id, image, price, rating, title } =
    props.product;
  return (
    <div>
      <h1>{title}</h1>
      <h3>{price}</h3>
    </div>
  );
};

export default Products;
