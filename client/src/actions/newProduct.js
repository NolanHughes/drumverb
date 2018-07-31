export function addNewProduct(product) {
  const url = `http://localhost:3000/api/products`
  const history = product.props.history

  const brand = product.refs.brand.value
  const model = product.refs.model.value
  const condition = product.refs.condition.value
  const year = product.refs.year.value
  const finish = product.refs.finish.value 
  const title = product.refs.title.value;
  const price = product.refs.price.value;
  const made_in = product.refs.made_in.value
  const category = product.refs.category.value
  const image_url = product.refs.image_url.value;
  const description = product.refs.description.value;

  const data = { product: {brand: brand, model: model, condition: condition, year: year, finish: finish, title: title,  price: price, made_in: made_in, category: category, image_url: image_url, description: description} }

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
    .then((product) => {
      history.push(`/products/${product.id}`)
      dispatch(addNewProductSuccess(product))})
  };
}

export function addNewProductSuccess(product) {
  return {
    type: 'ADD_NEW_PRODUCT_SUCCESS',
    product
  };
}