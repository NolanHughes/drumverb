import React from 'react';
import { Link } from 'react-router-dom'

import '../css/ProductIndexDisplay.css'

class DisplayProduct extends React.Component {
  render(){
    let products = this.props.products

    const renderProducts = products.map(product => {
      return(
        <li key={product.id} className="four wide column centered list-item">
          <Link to={`/products/${product.id}`}>
              <img className="productImage" src={product.product_image_photos[0].medium_url} alt={product.title}/>
            <div className="product-info">
              <h4>{product.title}</h4>
              <span className="price">${product.price} <span className="shipping-price">+ ${product.shipping_price} Shipping</span></span>
            </div>
          </Link>
        </li>
      )
    });
    
    return (
      <div>
        <ul className="ui grid center container pics" id="product-list">
          {renderProducts}
        </ul>
      </div>
    );
  }
}

export default DisplayProduct

