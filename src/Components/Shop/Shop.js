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

  function deleteProduct(product) {
    const filter = products.filter(
      (singleProduct) => product.id !== singleProduct.id
    );
    setProducts(filter);
  }

  return (
    <div className="home-conatiner">
      <div className="shop-conatiner">
        {products?.map((product) => {
          return (
            <Products
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
            ></Products>
          );
        })}
      </div>
      <div className="add-product">
        <Add_Product></Add_Product>
      </div>
    </div>
  );
};

export default Shop;
