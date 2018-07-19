import React from 'react'
import { Link } from 'react-router-dom'

import '../css/ProductSearch.css'

const QueriedProducts = ({ queriedProducts, clearQueriedProducts, clearSearchValue }) => {

	const productRows = queriedProducts.map((product, idx) => (
    <Link style={{ display: 'block' }} key={product.id} to={`${product.id}`} onClick={() => {clearQueriedProducts(); clearSearchValue();}}>{product.title}</Link>
	));

  return (
		<div>
      {productRows}
    </div>
  );
};

export default QueriedProducts;

     