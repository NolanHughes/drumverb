import React from 'react';
import { Link } from 'react-router-dom'

import '../css/ProductIndexDisplay.css'

const ProductIndexDisplay = ({ products, onProductClick }) => {

  const renderProducts = products.map(product => (
    <li key={product.id} className="four wide column centered list-item ">
      <Link to={`/products/${product.id}`}>
        <div className="reframe">
          <img className="productImage" src={product.image} alt={product.title}/>
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

export default ProductIndexDisplay

