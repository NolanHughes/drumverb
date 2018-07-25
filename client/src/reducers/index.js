import { combineReducers } from 'redux';
import {products, productsAreLoading, queriedProducts, searchValue, cart, sortValue} from './products_reducer';

export default combineReducers({
  products,
  productsAreLoading,
  queriedProducts,
  searchValue,
  cart,
  sortValue
});