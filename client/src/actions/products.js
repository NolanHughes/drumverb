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
