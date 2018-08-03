import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../css/ProductSearch.css'

const QueriedProducts = ({ queriedProducts, clearQueriedProducts, clearSearchValue, searchValue }) => {
	const productRows = queriedProducts.slice(0, 4).map((product, idx) => (
    <Link style={{ display: 'block' }} key={product.id} to={`/searched-products/${product.title}`} onClick={() => {clearQueriedProducts(); clearSearchValue();}}>{product.title}</Link>
	));

	const searchValueLink = <Link style={{ display: 'block' }} key={0} to={`/searched-products/${searchValue}`} onClick={() => {clearQueriedProducts(); clearSearchValue();}}>{searchValue}</Link>

  return (
		<div>
			{searchValueLink}
      {productRows}
    </div>
  );
};

const mapStateToProps = (state) => {
	return {
		searchValue: state.searchValue
	}
}

export default connect(mapStateToProps)(QueriedProducts);

     