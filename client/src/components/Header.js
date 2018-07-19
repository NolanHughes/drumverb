import React from 'react'
import { Link } from 'react-router-dom'

import ProductSearch from '../containers/ProductSearch';
import '../css/Header.css'

const Header = () => (
  <header>
	  <nav id="main-nav" className="ui grid middle aligned">
	    <Link to='/' id={"nav-logo"} className="nav-element three wide column">Drumverb</Link>
	  	<ProductSearch />
	  	{/*Add in new/selling routes as well*/}
	  	<Link to='/cart' id="cart-link" className="nav-element four wide column">Cart</Link> 
	  </nav>
  </header>

)

export default Header