import React from 'react';
import { Link } from 'react-router-dom'

import '../css/Cart.css'

const EmptyCart = () => {
  return (
    <div id="empty-cart-div">
      <img className="empty-cart-icon" src="https://static.reverb.com/assets/icons/empty-states/empty-basket@2x-eb75105fc1729efd4326871977458126.png" alt="Empty basket@2x" />
      <h3 id="empty-cart-text">Your cart is empty. Start browsing!</h3>
      <div>
        <Link to='/' className="orange-btn">Products</Link>
      </div>
    </div>
  );
}

export default EmptyCart
