import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import ProductSearch from '../containers/ProductSearch';
import '../css/Header.css'

const Header = ({cart}) => (

  <header>
	  <nav id="main-nav" className="ui grid middle aligned">
	    <Link to='/' id="nav-logo" className="nav-element three wide column">Drumverb</Link>
	  	<ProductSearch />
	  	<ul>
	  		<li id="sell-product-li">
			  	<Link to='/sell' id="sell-product-link" className="nav-element four wide column">
			  			Sell
			  	</Link>
		  	</li>
		  	<li id="cart-li">
			  	<Link to='/cart' id="cart-link" className="nav-element four wide column">			  		
			  		{cartProductCount(cart)}
			  		<i className="shopping cart icon" id="shoping-cart-icon">
			  		</i>
			  		<div id='cart-icon-label'>
			  			Cart
			  		</div>
			  	</Link>
		  	</li>
	  	</ul>
	  </nav>
  </header>
)

function cartProductCount(cart) {
	if(cart.length > 0) {
		return <div id="cart-count">
			 		   {cart.length}
			  	 </div>
	} else {
		return false
	}
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Header)