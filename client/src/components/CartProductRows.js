import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { removeProductFromCart } from '../actions/index';
import '../css/Cart.css'

const CartProductRows = ({ cart, removeProductFromCart }) => {
  const productRows = cart.map((product, index) => (
    <div className="ui grid row cart-row" key={product.id}>
      <div className="four wide column image-div">
        <Link to={`/products/${product.id}`}>
          <img className="in-cart-product-image" src={product.image.url} alt="title"/>
        </Link>
      </div>
      <div className="eight wide column">
        <p className="cart-item-paragraph">{product.title}</p>
        <p className="cart-item-paragraph">Seller: A seller</p>
        <p className="cart-item-paragraph">Ships from: A place</p>
        <ul id="remove-link-ul">
          <li>
            <a id="remove-link" onClick={() => removeProductFromCart(index)}><span className="remove-product-icon">x</span>Remove</a>
          </li>
        </ul>
      </div>
      <div className="four wide column price-column">
        <p>${product.price}.00</p>
      </div>
    </div>
  ));

  return (
    <div>
      {productRows}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeProductFromCart: (product) => dispatch(removeProductFromCart(product))
  };
};

export default connect(null, mapDispatchToProps)(CartProductRows)
