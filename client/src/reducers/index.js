import { combineReducers } from 'redux';
import {products, productsAreLoading, queriedProducts, searchValue, cart, addProduct} from './products_reducer';

export default combineReducers({
  products,
  productsAreLoading,
  queriedProducts,
  searchValue,
  cart,
  addProduct
});