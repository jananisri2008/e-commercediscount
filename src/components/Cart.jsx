import React from 'react';
import '../styles/Cart.css';
const Cart = ({ cart, removeFromCart, total, offer }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.name} width="50" height="50" /></td>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price * item.quantity}</td>
                <td><button onClick={() => removeFromCart(item.id)}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h3>Total: ₹{total}</h3>
      {offer && <h3>Offer: {offer}</h3>}
       {/* Display offer if available */}
    </div>
  );
};

export default Cart;
