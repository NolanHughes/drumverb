import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../css/ProductSearch.css'

const QueriedProducts = ({ queriedProducts, clearQueriedProducts, clearSearchValue, searchValue, changeFilteredBy }) => {
	const productRows = queriedProducts.slice(0, 4).map((product, idx) => (
    <Link style={{ display: 'block' }} key={product.id} to={`/searched-products/${product.title}`} onClick={() => {changeFilteredBy(product.title);clearQueriedProducts(); clearSearchValue() }}>{product.title}</Link>
	));

	const searchValueLink = <Link style={{ display: 'block' }} key={0} to={`/searched-products/${searchValue}`} onClick={() => {changeFilteredBy(searchValue); clearQueriedProducts(); clearSearchValue() }}>{searchValue}</Link>

	let opacityValue

	if (searchValue.length > 0) {
		opacityValue = 1
	} else {
		opacityValue = 0
	}

  return (
		<div id="queried-products-div" style={{opacity: opacityValue}}>
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

     