//***Could still be named better***
import React from 'react'
import { Link } from 'react-router-dom'

const SearchedProducts = ({
  queriedProducts, 
  searchChange, 
  clearQueriedProducts, 
  searchButton, 
  searchValue, 
  clearSearchValue}) => {

	const productRows = queriedProducts.map((product, idx) => (
    <Link style={{ display: 'block' }} key={product.id} to={`/products/${product.id}`} onClick={() => {clearQueriedProducts(); clearSearchValue();}}>{product.title}</Link>
	));

  return (
		<div id='product-search'>
      <table className='ui selectable structured large table'>
        <thead>
          <tr>
            <th colSpan='5'>
              <div className='ui fluid search'>
                <div className='ui icon input'>
                <form onSubmit={searchButton}>
                    <input
                      id='product-input'
                      type='text'
                      placeholder='Search drums...'//Change to products upon expanding
                      value={searchValue}
                      onChange={searchChange}
                    />
                    <button>Search</button>
                  </form>
                </div>
                
              </div>
            </th>
          </tr>
        </thead>     
      </table>
      {productRows}
    </div>
  );
};

export default SearchedProducts;

     