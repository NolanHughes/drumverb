export function fetchAllProducts(url) {
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
    .then((products) => dispatch(fetchAllProductsSuccess(products)))
  };
}

export function productsAreLoading(bool) {
  return {
    type: 'PRODUCTS_ARE_LOADING',
    isLoading: bool
  };
}

export function fetchAllProductsSuccess(products) {
  return {
    type: 'PRODUCTS_FETCH_SUCCESS',
    products
  };
}