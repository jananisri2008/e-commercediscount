import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => addToCart(product, parseInt(e.target.value, 10))}
          />
          <button onClick={() => addToCart(product)}>AddtoCart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
