import React from 'react'
import { Link } from 'react-router-dom'

import ProductSearch from '../containers/ProductSearch';
import '../Header.css'

const Header = () => (
  <header>
	  <nav id="main-nav" className="ui grid middle aligned">
	    <Link to='/' id={"nav-logo"} className="nav-element three wide column">Drumverb</Link>
	  	<ProductSearch />
  		<a href='#' id={"nav-sell"} className="nav-element four wide column">Cart/Selling</a>
	  </nav>
  </header>

)

export default Header