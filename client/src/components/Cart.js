import React from 'react';
import {connect} from 'react-redux';

import EmptyCart from './EmptyCart'
import CartProductRows from './CartProductRows'
import CartSumTable from './CartSumTable'
import { deleteCart } from '../actions/index'

import '../css/Cart.css'

const Cart = ({ cart, removeProductFromCart, deleteCart }) => {
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
                      <button onClick={() => {deleteCart(cart); alert("Your cart has been purchased")}}>Buy</button>
                    </div>
                  </div>
                  
  }

  return (
    <section id="cart-section">
      {cartSection}
    </section>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    deleteCart: (cart) => dispatch(deleteCart(cart))
  };
};

export default connect(null, mapDispatchToProps)(Cart);