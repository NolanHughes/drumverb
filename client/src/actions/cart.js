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

export function deleteCart(cart) {
	return {
		type: 'DELETE_CART',
		cart
	}
}