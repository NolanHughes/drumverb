import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { addProductToCart } from '../actions/index';

import '../css/ProductShow.css'
 
const ProductShow = ({ product, addProductToCart }) =>
  <div id="product-show" className="col-md-8 ui container">

    <div id="confirmBox">
      <button className="ui icon button" id="pop-up-close-button" onClick={() => closePopUp()}>
        <i className="window close outline icon"></i>
      </button>      
      <div className="message"><i className="check icon"></i>Item Added to Cart</div>  
      <div id="pop-up-body"> 
        <div className="ui grid row cart-row" key={product.id}>
          <div className="three wide column">
            <Link to={`/products/${product.id}`}>
              <img className="pop-up-image" src={product.image_url} alt={product.title}/>
            </Link>
          </div>
          <div className="eight wide column" id="pop-up-product-title">
            <p>{product.title}</p>
          </div>
          <div className="five wide column pop-up-right-column">
            <p>${product.price}.00</p>
            <Link to='/cart'><button id="pop-up-cart-button">View Cart</button></Link>
          </div>
        </div> 
      </div>  
      
    </div>

    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>{product.category}</p>
    <button onClick={() => { addProductToCart(product); popUp(product) }}>Add to cart</button>
  </div>;
 
const mapStateToProps = (state, ownProps) => {
  const product = state.products.find(product => product.id === parseInt(ownProps.match.params.productId, 10))
  
  if (product) {
    return { 
      product
    }
  } else {
    return { product: {} }
  }
}

function popUp(product) {
  const confirmBox = document.getElementById("confirmBox");
  debugger
  confirmBox.style.display = "block"
}

function closePopUp() {
  const confirmBox = document.getElementById("confirmBox");
  confirmBox.style.display = "none"
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);