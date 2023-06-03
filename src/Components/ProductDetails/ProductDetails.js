import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  const param = useParams();
  const { id } = param;
  return <div>{product.title}</div>;
};

export default ProductDetails;
