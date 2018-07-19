import React from 'react';
import { Link } from 'react-router-dom'

import '../css/Cart.css'

const Cart = ({ cart, onProductClick }) => {
  const productRows = cart.map((product, idx) => (
    <tr key={idx}>
      <td>{product.title}</td>
      <td className='right aligned'>{product.description}</td>     
      <td className='right aligned'>{product.image}</td>
      <td className='right aligned' id="item-price">${product.price}</td>
      <button onClick={() => onProductClick(idx)}>X</button>
    </tr>
  ));

  return (
      <section id="cart-item-section" className="ui container">
        <div className="ui grid row cart-row">
          <div className="four wide column">
            <Link to='/products/1'>
              <img className="in-cart-product-image" src="https://images.reverb.com/image/upload/s--E8z-Spvm--/a_exif,c_thumb,f_jpg,fl_progressive,g_south,h_226,q_auto:eco,w_226/v1531944161/mwfsjtzjruqblf6n5wbq.jpg" alt="title" width="120" height="120"/>
            </Link>
          </div>
          <div className="eight wide column">
            <p className="cart-item-paragraph">Ludwig Black Beauty Snare Drum</p>
            <p className="cart-item-paragraph">Seller: A seller</p>
            <p className="cart-item-paragraph">Ships from: A place</p>
            <ul>
              <li>
                <a>Remove</a>
              </li>
            </ul>
          </div>
          <div className="four wide column price-column">
            <p>$100</p>
          </div>
        </div>
        <div className="ui grid row cart-row">
          <div className="four wide column">
            <Link to='/products/1'>
              <img className="in-cart-product-image" src="https://images.reverb.com/image/upload/s--E8z-Spvm--/a_exif,c_thumb,f_jpg,fl_progressive,g_south,h_226,q_auto:eco,w_226/v1531944161/mwfsjtzjruqblf6n5wbq.jpg" alt="title" width="120" height="120"/>
            </Link>
          </div>
          <div className="eight wide column">
            <p className="cart-item-paragraph">Ludwig Black Beauty Snare Drum</p>
            <p className="cart-item-paragraph">Seller: A seller</p>
            <p className="cart-item-paragraph">Ships from: A place</p>
            <ul>
              <li>
                <a>Remove</a>
              </li>
            </ul>
          </div>
          <div className="four wide column price-column">
            <p>$100</p>
          </div>
        </div>
      </section>

  );
}

export default Cart

function sum(products, prop) {
  return products.reduce((memo, product) => (
    parseInt(product[prop], 10) + memo
  ), 0.0).toFixed(2);
}
