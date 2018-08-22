import React from 'react'
import { connect } from 'react-redux';

import { setSortValue } from '../actions/index';

const SearchOverview = ({products, setSortValue, sortValue, filteredBy}) => {

  return (
    <div className="search-overview">
      <div className="search-overview_primary">
        <h2 className="product-count">{products.length} listings</h2>     
      </div> 
      <div className="search-overview_secondary ui grid">
        <div className="twelve wide column" id="filtered-by">
          Filtered by: {filteredBy}
        </div>
        <div className="four wide column" id="sort-dropdown">
          <select name="sort" id="sort" onChange={setSortValue} defaultValue={sortValue}>
            <option value="published_at|desc">Most Recent First</option>
            <option value="price|asc">Price Low to High</option>
            <option value="price|desc">Price High to Low</option>
          </select>
        </div>   
      </div> 
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sortValue: state.sortValue,
    filteredBy: state.filteredBy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSortValue: (value) => dispatch(setSortValue(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchOverview)