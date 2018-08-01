import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers';

import './semantic-ui/semantic.min.css';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);