import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { removeProductFromCart } from '../actions/products';
import '../css/Cart.css'

const CartProductRows = ({ cart, removeProductFromCart }) => {
  const productRows = cart.map((product, index) => (
    <div className="ui grid row cart-row" key={product.id}>
      <div className="four wide column image-div">
        <Link to={`/products/${product.id}`}>
          <img className="in-cart-product-image" src="https://images.reverb.com/image/upload/s--E8z-Spvm--/a_exif,c_thumb,f_jpg,fl_progressive,g_south,h_226,q_auto:eco,w_226/v1531944161/mwfsjtzjruqblf6n5wbq.jpg" alt="title"/>
        </Link>
      </div>
      <div className="eight wide column">
        <p className="cart-item-paragraph">{product.title}</p>
        <p className="cart-item-paragraph">Seller: A seller</p>
        <p className="cart-item-paragraph">Ships from: A place</p>
        <ul>
          <li>
            <a onClick={() => removeProductFromCart(index)}>Remove</a>
          </li>
        </ul>
      </div>
      <div className="four wide column price-column">
        <p>${product.price}</p>
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

function sum(products, prop) {
  return products.reduce((memo, product) => (
    parseInt(product[prop], 10) + memo
  ), 0.0).toFixed(2);
}