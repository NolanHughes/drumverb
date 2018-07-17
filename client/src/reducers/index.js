import { combineReducers } from 'redux';
import {products, productsAreLoading} from './products_reducer';

export default combineReducers({
  products,
  productsAreLoading
});