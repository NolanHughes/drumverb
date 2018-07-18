//***Could still be named better***
import React from 'react'
import { Link } from 'react-router-dom'

import '../ProductSearch.css'

const QueriedProducts = ({
  queriedProducts, 
  queryProducts, 
  clearQueriedProducts, 
  searchButton, 
  searchValue, 
  clearSearchValue}) => {

	const productRows = queriedProducts.map((product, idx) => (
    <Link style={{ display: 'block' }} key={product.id} to={`/products/${product.id}`} onClick={() => {clearQueriedProducts(); clearSearchValue();}}>{product.title}</Link>
	));

  return (
		<div id='product-search' className="nav-element nine wide column">
      <form onSubmit={searchButton}>
        <input
          id='product-input'
          type='text'
          placeholder='Shop for new & used drums...'//Change to products upon expanding
          value={searchValue}
          onChange={queryProducts}
        />
        <button id="search-button"><i className="search icon"></i></button>
      </form>     
      <Link to='/products' id="products-link">Products</Link>
      {productRows}
    </div>
  );
};

export default QueriedProducts;

     