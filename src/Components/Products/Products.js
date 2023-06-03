import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
  const { category, description, id, image, price, rating, title } =
    props.product;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div style={{ cursor: "pointer" }} onClick={handleClick}>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h3>{price}</h3>
        <button>delete</button>
      </div>
    </div>
  );
};

export default Products;
