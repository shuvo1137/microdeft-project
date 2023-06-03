import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./Shop.css";
import Add_Product from "../Add_Product/Add_Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState(products);
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

  function handleSearch(event) {
    let value = event.target.value;
    console.log(value);
    const exists = products.filter((product) => value === product.title);
    console.log(exists);
  }

  return (
    <div className="home-conatiner">
      <div className="shop">
        <input
          onChange={handleSearch}
          type="search"
          name=""
          placeholder="Search products"
          id=""
        />
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
      </div>
      <div className="add-product">
        <Add_Product></Add_Product>
      </div>
    </div>
  );
};

export default Shop;
