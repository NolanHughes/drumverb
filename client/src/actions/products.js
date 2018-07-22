//Refactor some of these into seperate files
export function productsAreLoading(bool) {
  return {
    type: 'PRODUCTS_ARE_LOADING',
    isLoading: bool
  };
}

export function productsFetchDataSuccess(products) {
  return {
 		type: 'PRODUCTS_FETCH_DATA_SUCCESS',
 		products
  };
}

export function searchValue(value) {
  return{
    type: 'SET_SEARCH_VALUE',
    value
  }
}

export function productsFetchData(url) {
  return (dispatch) => {
    dispatch(productsAreLoading(true));

    fetch(url)
    .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(productsAreLoading(false));

        return response;
    })
    .then((response) => response.json())
    .then((products) => dispatch(productsFetchDataSuccess(products)))
  };
}

export function queriedProductsFetchDataSuccess(manyProducts) {
  const MATCHING_ITEM_LIMIT = 5;//Change to top 5 instead of first 5 and make categories or whatever.
  const products = manyProducts.slice(0, MATCHING_ITEM_LIMIT)

  return {
    type: 'QUERIED_PRODUCTS_FETCH_DATA_SUCCESS',
    products
  };
}

export function queriedProductsFetchData(query) {
  const url = `http://localhost:3000/api/products?q=${query.target.value}`

  return (dispatch) => {
    dispatch(productsAreLoading(true));
    dispatch(searchValue(query.target.value))

    fetch(url)
    .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(productsAreLoading(false));

        return response;
    })
    .then((response) => response.json())
    .then((products) => dispatch(queriedProductsFetchDataSuccess(products)))
  };
}

export function clearQueriedProducts() {
  return {
    type: 'CLEAR_QUERIED_PRODUCTS'  
  };
}

export function clearSearchValue() { 
  return {
    type: 'CLEAR_SEARCH_VALUE'  
  };
}

export function addProductToCart(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    product
  }
}
                
export function removeProductFromCart(index) {
  return {
    type: 'REMOVE_PRODUCT_FROM_CART',
    index
  }
}

export function addNewProductSuccess(product, products) {
  return {
    type: 'ADD_NEW_PRODUCT_SUCCESS',
    product
  };
}

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

