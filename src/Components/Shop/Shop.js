import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./Shop.css";
import Add_Product from "../Add_Product/Add_Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="home-conatiner">
      <div className="shop-conatiner">
        {products?.map((product) => {
          return <Products key={product.id} product={product}></Products>;
        })}
      </div>
      <div className="add-product">
        <Add_Product></Add_Product>
      </div>
    </div>
  );
};

export default Shop;
