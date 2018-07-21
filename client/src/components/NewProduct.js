import React from 'react'

import '../css/NewProduct.css'

class NewProduct extends React.Component {
  handleClick() {
    const title = this.refs.title.value;
    const description = this.refs.description.value;
    const price = this.refs.price.value;
    const image_url = this.refs.image_url.value;

    const data = { product: {title: title, description: description, price: price, image_url: image_url} }

    fetch('http://localhost:3000/api/products', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return (
      <div id="new-product">
        <input ref="title" placeholder="Enter the title of the product" />
        <input ref="description" placeholder="Enter a description" />
        <input ref="price" placeholder="Enter a price" />
        <input ref="image_url" placeholder="Enter a image url" />
        <button onClick={() => this.handleClick(this)}>Submit</button>
      </div>
    );
  }
}

export default NewProduct