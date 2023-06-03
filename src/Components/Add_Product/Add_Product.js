import React from "react";

const Add_Product = () => {
  const product = {};
  function handleChange(event) {
    console.log(event.target.value);
  }
  return (
    <div>
      <h1>Adding Products</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Product-Name"
        name=""
        id=""
      />
      <input type="text" placeholder="Description" name="" id="" />
      <input type="text" placeholder="Category" name="" id="" />
      <input type="text" placeholder="imageURL" name="" id="" />
      <input type="text" placeholder="Price" name="" id="" />

      <button>Add Products</button>
    </div>
  );
};

export default Add_Product;
