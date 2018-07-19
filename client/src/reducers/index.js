import { combineReducers } from 'redux';
import {products, productsAreLoading, queriedProducts, searchValue, cart} from './products_reducer';

export default combineReducers({
  products,
  productsAreLoading,
  queriedProducts,
  searchValue,
  cart
});