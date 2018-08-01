import React from 'react'

import '../css/NewProduct.css'

class TestNewProduct extends React.Component {
  uploadImage = e => {
    e.preventDefault()

    const image_upload = document.querySelector("#image_upload");
    const results = document.querySelector("#results");

    const formData2 = new FormData();

    formData2.append(
      "image_file",
      image_upload.files[0],
      image_upload.files[0].name
    );
     
    for (const item of formData2) {
      results.innerHTML = `
        <p><strong>name:</strong> ${item[0]}</p>
        <p><strong>filename:</strong> ${item[1].name}</p>
        <p><strong>size:</strong> ${item[1].size}</p>
        <p><strong>type:</strong> ${item[1].type}</p>
      `;
    }

    fetch(`http://localhost:3000/api/products/upload`, {
      method: "POST",
      body: formData2
    });

  }

  render() {
    return (     
      <div id="new-product-form" style={{"marginTop": "150px"}}>
        <input type="file" name="image" id="image_upload" accept="image/*" />
        <button onClick={this.uploadImage}>Save Listing</button>
        <div id="results"></div>
      </div>      
    );
  }
}

export default (TestNewProduct);

