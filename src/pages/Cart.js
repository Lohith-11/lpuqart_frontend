import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8082/verse/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8082/verse/cart/${itemId}`);
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">${item.price}</div>
            </div>
            <button onClick={() => handleRemoveItem(item.id)} className="cart-item-remove">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;