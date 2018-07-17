//***Could still be named better***
import React from 'react'

const SearchedProducts = ({products, searchValue, searchChange, searchCancel, displayProduct, searchButton}) => {
	const productRows = products.map((product, idx) => (
		<tr key={idx} onClick={() => { displayProduct(product); searchCancel();}}>
			<td>{product.title}</td>
		</tr>
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
        <tbody>
          {productRows}
        </tbody>
      </table>
    </div>
  );
};

export default SearchedProducts;

     