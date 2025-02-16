import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/verse/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="title">{product.name}</h1>
      <div className="product-detail">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <p className="product-category">Category: {product.category}</p>
          <p className="product-cost">Cost: ${product.cost}</p>
          <p className="product-rating">Rating: {product.rating}</p>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;