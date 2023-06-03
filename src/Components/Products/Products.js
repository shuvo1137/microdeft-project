import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
  const { category, description, id, image, price, rating, title } =
    props.product;
  const { deleteProduct, product } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div>
      <div className="image">
        <img
          src={image}
          alt={title}
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h3>{price}</h3>
        <button onClick={handleClick}>ShowDetails</button>
        <button
          onClick={() => {
            deleteProduct(product);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Products;
