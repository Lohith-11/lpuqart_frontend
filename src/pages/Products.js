import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8082/verse/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.cost}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;