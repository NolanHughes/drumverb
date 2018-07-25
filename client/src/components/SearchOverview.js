import React from 'react'
import { connect } from 'react-redux';
  {/*Make sure it displays sorted products count and not all.*/}
const SearchOverview = ({products, change, sortValue}) => {

  return (

    <div className="search-overview">
      <div className="search-overview_primary">
        <h2 className="product-count">{products.length} listings</h2>     
      </div> 
      <div className="search-overview_secondary ui grid">
        <div className="twelve wide column" id="filtered-by">
          Filtered by:
        </div>
        <div className="four wide column" id="sort-dropdown">
          {/*Map value to props. Make change function a prop and set state in Redux*/}
          <select name="sort" id="sort" onChange={change} value={sortValue}>
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
    products: state.products
  }
}

export default connect(mapStateToProps)(SearchOverview)