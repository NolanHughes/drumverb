import React from 'react';

import EmptyCart from './EmptyCart'
import CartProductRows from './CartProductRows'
import CartSumTable from './CartSumTable'
import BuyButton from './BuyButton'
import '../css/Cart.css'

const Cart = ({ cart, removeProductFromCart }) => {
  let cartSection

  if(cart.length === 0) {
    cartSection = <div>
                    <EmptyCart />
                  </div>
  } else {
    cartSection = <div>
                    <div id="cart-item-section" className="ui container">
                      <h3 id="cart-label">Cart</h3>
                      <CartProductRows cart={cart} />
                      <hr id="table-separator"/>
                      <CartSumTable cart={cart} />                     
                    </div>
                    <div className="ui container" id="buy-container">
                      <button onClick={() => alert("Hello There")}>Buy</button>
                    </div>
                  </div>
                  
  }

  return (
    <section id="cart-section">
      {cartSection}
    </section>
  );
}

export default Cart