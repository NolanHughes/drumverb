import React from 'react';
import { Link } from 'react-router-dom'

import '../css/ProductIndexDisplay.css'

const ProductIndexDisplay = ({ products, onProductClick }) => {

  const renderProducts = products.map(product => (
    <li key={product.id} className="four wide column centered list-item ">
      <Link to={`/products/${product.id}`}>
          <img className="productImage" src={product.product_image_photos[0].medium_url} alt={product.title}/>
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

