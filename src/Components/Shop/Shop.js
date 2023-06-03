import React, { useEffect, useState } from "react";
import Products from "../Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <div className="shop">
        {products.map((product) => {
          return <Products product={product}></Products>;
        })}
      </div>
      <div className="add-product"></div>
    </div>
  );
};

export default Shop;
