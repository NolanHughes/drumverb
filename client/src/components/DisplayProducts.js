import React from 'react';
import { Link } from 'react-router-dom'

import '../css/ProductIndexDisplay.css'

class DisplayProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  static getDerivedStateFromProps(props, current_state) {
    debugger
    if (current_state.products !== props.products) {
      return {
        products: props.products
      }
    }
    return null; 
  }

  render(){
    let products = this.state.products

    const renderProducts = products.map(product => {
      return(
        <li key={product.id} className="four wide column centered list-item">
          <Link to={`/products/${product.id}`}>
              <img className="productImage" src={product.product_image_photos[0].medium_url} alt={product.title}/>
            <div className="product-info">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          </Link>
          <div className="like-button-div">
            <button className="like-button" id={product.id} value={product.likes} onClick={(e) => this.addToCounter(e)}>
              Likes {product.likes}
            </button>
          </div>
        </li>
      )
    });
    
    return (
      <div>
        <button onClick={() => this.filterByLikes(5)}>More than 5 likes</button>
        <ul className="ui grid center container pics" id="product-list">
          {renderProducts}
        </ul>
      </div>
    );
  }

  filterByLikes(number) {
    const filteredProducts = this.state.products.filter(product => product.likes > 5 )
    // debugger
    this.setState({
      products: filteredProducts
    })
    debugger
  }

  addToCounter(e) {
    const products = this.state.products
    const product = products.find(product => product.id === parseInt(e.target.id, 10))
    product.likes = product.likes + 1 

    this.setState({
      products: products
    })

    this.submitLike(product)
  }

  submitLike(product) {
    fetch('http://localhost:3000/products/' + product.id, {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

}

export default DisplayProduct

