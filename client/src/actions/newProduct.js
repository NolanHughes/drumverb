export function addNewProduct(product) {
  const url = `http://localhost:3000/api/products`

  const title = product.refs.title.value;
  const description = product.refs.description.value;
  const price = product.refs.price.value;
  const image_url = product.refs.image_url.value;

  const data = { product: {title: title, description: description, price: price, image_url: image_url} }

  return (dispatch) => {
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
    })
    .then((response) => response.json())
    .then((product) => dispatch(addNewProductSuccess(product)))
  };
}

export function addNewProductSuccess(product, products) {
  return {
    type: 'ADD_NEW_PRODUCT_SUCCESS',
    product
  };
}