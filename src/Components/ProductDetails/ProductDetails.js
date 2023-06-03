import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  const param = useParams();
  const { id } = param;
  return (
    <div>
      <div className="image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="description">
        <h1>{product.title}</h1>
        <h3>{product.description}</h3>
      </div>

      <Link to={"/"}>back</Link>
    </div>
  );
};

export default ProductDetails;
