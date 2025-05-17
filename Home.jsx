// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       This is Home Page
//     </div>
//   );
// }

// export default Home;




import React, { useEffect, useState } from "react";

const categories = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("men's clothing");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(selectedCategory)}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [selectedCategory]);

  return (
    <div className="home">
      {/* Logo */}
      <div className="logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Site Logo"
          className="site-logo"
        />
      </div>

      {/* Category Selector */}
      <div className="category-selector">
        <label htmlFor="category">Select Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
