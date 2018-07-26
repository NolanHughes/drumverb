//***Make sure to add filterdProducts back in when reimplemented***
import { combineReducers } from 'redux';
import {products, queriedProducts, searchValue, cart, sortValue} from './products_reducer';

export default combineReducers({
  products,
  queriedProducts,
  searchValue,
  cart,
  sortValue
});