import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { addProductToCart } from '../actions/index';

import '../css/ProductShow.css'
 
const ProductShow = ({ product, addProductToCart, cart }) =>{
  let addToCartButton 
  let productThumbnail
  let firstProductImage
  let categoryName

  //Set as a model?
  const categoriesArray = [
    {value: "1", name: "Bass Drum"}, 
    {value: "2", name: "Full Acoustic Kits"}, 
    {value: "3", name: "Snare"},
    {value: "4", name: "Tom"},
    {value: "5", name: "Crash"},
    {value: "6", name: "Cymbal Packs"},
    {value: "7", name: "Hi-Hats"},
    {value: "8", name: "Other (Splash, China, etc)"},
    {value: "9", name: "Ride"}
  ]

  if(cart.includes(product)) {
    addToCartButton = <Link to={'/cart'}><button>Go to cart</button></Link>  
  } else {
    addToCartButton = <button onClick={() => { addProductToCart(product); popUp() }}>Add to cart</button>
  }

  if(Object.keys(product).length !== 0) {
    productThumbnail = <img className="pop-up-image" src={product.product_image_photos[0].thumbnail_url} alt={product.title}/>
    firstProductImage = <img src={product.product_image_photos[0].url} alt={product.title}/>
    categoryName = categoriesArray.find(c => c.value === product.category).name
  }

  return(
    <div id="product-show" className="ui container">

      <div id="confirmBox">
        <button className="ui icon button" id="pop-up-close-button" onClick={() => closePopUp()}>
          <i className="window close outline icon"></i>
        </button>      
        <div className="message"><i className="check icon"></i>Item Added to Cart</div>  
        <div id="pop-up-body"> 
          <div className="ui grid row cart-row" key={product.id}>
            <div className="three wide column">
              {productThumbnail}
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

      <div className="ui grid">
        <div className="eleven wide column">
          <Link to={`/filtered-products/${product.category}`} className="back-to-category-link">
            <i className="arrow circle left icon"></i>Back to {categoryName}
          </Link>
          <h1>{product.title}</h1>
                   
          <div id="product-show-image-div">
            {firstProductImage}
          </div>
          
          <div id="product-info">
            <ul>
              <li>Description</li>
            </ul>
            <div id="product-info-content">
              <section className="section--listing-readmore">
                <p>{product.description}</p>
              </section>
              <section>
                <h4>Product Specs</h4>
                <dl className="description-section__spec-list">

                  <dt>Condition:</dt>
                  <dd>
                    <span>{ product.condition }</span>
                  </dd>

                  <dt>Brand:</dt>
                  <dd>
                    <Link to={`/searched-products/${product.brand}`}>{product.brand}</Link>
                  </dd>

                  <dt>Model:</dt>
                  <dd>
                    <Link rel="nofollow" to={`/searched-products/${product.model}`}>{product.model}</Link>
                  </dd>

                  <dt>Category:</dt>
                  <dd>
                    <Link to={`/filtered-products/${product.category}`}>{categoryName}</Link>
                  </dd>
                </dl>
              </section>
            </div>
          </div>
        </div>

        <div className="five wide column buy-div">
          <div>
            <span>${product.price}.00</span>
          </div>
          {addToCartButton}
        </div>
      </div>
    </div>
  )
}
 
const mapStateToProps = (state, ownProps) => {
  const product = state.products.find(product => product.id === parseInt(ownProps.match.params.productId, 10))
  
  if (product) {
    return { 
      product,
      cart: state.cart
    }
  } else {
    return { 
      product: {},
      cart: []
    }
  }
}

function popUp() {
  const confirmBox = document.getElementById("confirmBox");
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