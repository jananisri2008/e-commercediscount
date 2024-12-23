import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import Image1 from './assets/product1.jpg';
import Image2 from './assets/product2.jpg';
import Image3 from './assets/product3.jpg';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 20, image: Image1 },
    { id: 2, name: 'Product 2', price: 40, image: Image2 },
    { id: 3, name: 'Product 3', price: 15, image: Image3 },
  ];

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () => {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (total > 50) {
      total *= 0.9; 
    }
    return total.toFixed(2);
  };

  const getOffer = () => {
    const buy2Get1Offer = cart.some((item) => item.quantity >= 2); 
    const discountOffer = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) > 50; 

    if (buy2Get1Offer) {
      return 'Buy 2 Get 1 Free!';
    }
    if (discountOffer) {
      return '10% Offer for Orders Above ₹50';
    }
    return null;
  };

  return (
    <div>
      <h1 align="center">E-commerce Cart with Conditional Discounts</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        total={calculateTotal()}
        offer={getOffer()} 
      />
    </div>
  );
};

export default App;