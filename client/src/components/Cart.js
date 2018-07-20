import React from 'react';

import EmptyCart from './EmptyCart'
import CartProductRows from './CartProductRows'
import '../css/Cart.css'

const Cart = ({ cart, removeProductFromCart }) => {
  let cartSection

  if(cart.length === 0) {
    cartSection = <div>
                    <EmptyCart />
                  </div>
  } else {
    cartSection = <div id="cart-item-section" className="ui container">
                    <h3>Cart</h3>
                    <CartProductRows cart={cart} />
                  </div>
  }

  return (
    <section id="cart-section">
      {cartSection}
    </section>
  );
}

export default Cart