import React from 'react';
import { Link } from 'react-router-dom'

import '../ProductIndexDisplay.css'

const ProductIndexDisplay = ({ products, onProductClick }) => {
  const renderProducts = products.map(product => (
    <li key={product.id} className="four wide column centered list-item">
      <Link to={`/products/${product.id}`}>
        <img className="productImage" src="https://images.reverb.com/image/upload/s--E8z-Spvm--/a_exif,c_thumb,f_jpg,fl_progressive,g_south,h_226,q_auto:eco,w_226/v1531944161/mwfsjtzjruqblf6n5wbq.jpg" alt={product.title}/>
        <div className="product-info">
          <h4>{product.title}</h4>
          <span>${product.price}</span>
        </div>
      </Link>
    </li>
  ));
  
  return (
    <div>
      <ul className="ui grid center container" id="product-list">
        {renderProducts}
      </ul>
    </div>
  );
}

export default ProductIndexDisplay

