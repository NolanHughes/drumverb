import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
 
const DisplayFilteredProducts = ({ products }) => {
  const renderProducts = products.map(product => (
    <li key={product.id} className="four wide column centered list-item ">
      <Link to={`/products/${product.id}`}>
        <div className="reframe">
          <img className="productImage" src={product.image_url} alt={product.title}/>
        </div>
        <div className="product-info">
          <h4>{product.title}</h4>
          <span>${product.price}</span>
        </div>
      </Link>
    </li>
  ));
  
  return (
    <div>
      <ul className="ui grid center container pics" id="product-list">
        {renderProducts}
      </ul>
    </div>
  );
}
 
const mapStateToProps = (state, ownProps) => {

  const products = state.products.filter(product => 
    product.title.toLowerCase().includes(ownProps.match.params.searchValue.toLowerCase()) ||
    product.category.toLowerCase().includes(ownProps.match.params.searchValue.toLowerCase()) ||
    product.brand.toLowerCase().includes(ownProps.match.params.searchValue.toLowerCase()) ||
    product.model.toLowerCase().includes(ownProps.match.params.searchValue.toLowerCase()) ||
    product.description.toLowerCase().includes(ownProps.match.params.searchValue.toLowerCase())
  )
  
  if (products) {
    return { 
      products
    }
  } else {
    return { products: {} }
  }
}
 
export default connect(mapStateToProps)(DisplayFilteredProducts);