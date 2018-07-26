import { combineReducers } from 'redux';
import {products, filteredProducts, queriedProducts, searchValue, cart, sortValue} from './products_reducer';

export default combineReducers({
  products,
  filteredProducts,
  queriedProducts,
  searchValue,
  cart,
  sortValue
});