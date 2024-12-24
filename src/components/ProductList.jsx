// import React from 'react';

// const ProductList = ({ products, addToCart }) => {
//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <div key={product.id} className="product-item">
//           <img src={product.image} alt={product.name} />
//           <h3>{product.name}</h3>
//           <p>₹{product.price}</p>
//           <input
//             type="number"
//             min="1"
//             defaultValue="1"
//             onChange={(e) => addToCart(product, parseInt(e.target.value, 10))}
//           />
//           <button onClick={() => addToCart(product)}>AddtoCart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;


import React, { useState } from 'react';

const ProductList = ({ products, addToCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, value) => {
    if(value>0){
    setQuantities({
      ...quantities,
      [productId]: value,
    });
  }
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1; 
    addToCart(product, quantity);

    setQuantities((prevQuantities)=>({
      ...prevQuantities,[product.id]:1,
    }));
  };

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
            value={quantities[product.id] || 1}
            onChange={(e) =>
              handleQuantityChange(product.id, parseInt(e.target.value, 10))
            }
          />
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
