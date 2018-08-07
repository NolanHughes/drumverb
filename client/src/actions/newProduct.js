export function addNewProduct(product) {
  return {
    type: 'ADD_NEW_PRODUCT_SUCCESS',
    product
  };
}