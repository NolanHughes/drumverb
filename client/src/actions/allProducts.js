export function fetchAllProducts(url) {
  return (dispatch) => {

    fetch(url)
    .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
    })
    .then((response) => response.json())
    .then((products) => dispatch(fetchAllProductsSuccess(products)))
  };
}


export function fetchAllProductsSuccess(products) {
  return {
    type: 'PRODUCTS_FETCH_SUCCESS',
    products
  };
}