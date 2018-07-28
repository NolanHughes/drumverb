import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

import EmptyCart from './EmptyCart'
import CartProductRows from './CartProductRows'
import CartSumTable from './CartSumTable'
import { deleteCart } from '../actions/index'

import '../css/Cart.css'
import '../css/CartPopUp.css'

const Cart = ({ cart, deleteCart }) => {
  let cartSection

  if(cart.length === 0) {
    cartSection = 
      <div>
        <EmptyCart />
      </div>
  } else {
    cartSection = 
      <div>
        <div id="cart-item-section" className="ui container">
          <h3 id="cart-label">Cart</h3>
          <CartProductRows cart={cart} />
          <hr id="table-separator"/>
          <CartSumTable cart={cart} />                     
        </div>
        <div className="ui container" id="buy-container">
          <button onClick={() => {deleteCart(cart); cartPurchasedPopUp()}}>Buy</button>
        </div>
      </div>                 
  }

  return (
    <section id="cart-section">

      <div id="cartPurchasedPopUp">
        <button className="ui icon button" id="pop-up-close-button" onClick={() => closePopUp()}>
          <i className="window close outline icon"></i>
        </button>      
        <div className="message"><i className="check icon"></i>Your cart has been purchased!</div>  
        <div id="pop-up-body"> 
          <Link to='/'><button id="pop-up-cart-button">Products</button></Link>
        </div>  
        
      </div>


      {cartSection}
    </section>
  );
}

function cartPurchasedPopUp() {
  const confirmBox = document.getElementById("cartPurchasedPopUp");
  confirmBox.style.display = "block"
}

function closePopUp() {
  const confirmBox = document.getElementById("cartPurchasedPopUp");
  confirmBox.style.display = "none"
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    deleteCart: (cart) => dispatch(deleteCart(cart))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);