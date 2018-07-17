import React from 'react';
import { Link } from 'react-router-dom'

const ProductIndexDisplay = ({ products, onProductClick }) => {
  const renderProducts = products.map(product => (
    <Link style={{ marginRight: '12px' }} key={product.id} to={`/products/${product.id}`}>{product.title}</Link>
  ));
  
  return (
    <div>
      <ul>
        {renderProducts}
      </ul>
    </div>
  );
}

export default ProductIndexDisplay
