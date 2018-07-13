import React from 'react'

const Products = ({products, searchValue, searchChange, searchCancel, displayProduct, helloThere}) => {
	const productRow = products.map((product, idx) => (
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
                  <input
                    className='prompt'
                    type='text'
                    placeholder='Search drums...'//Change to product upon expanding
                    value={searchValue}
                    onChange={searchChange}
                  />
                  <button onClick={helloThere}>Search</button>
                </div>
                
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {productRow}
        </tbody>
      </table>
    </div>
  );
};

export default Products;

     