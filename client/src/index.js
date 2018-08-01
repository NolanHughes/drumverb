import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import { createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';

// import App from './App';
import Routes from './Routes'
// import rootReducer from './reducers';

import './semantic-ui/semantic.min.css';

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

// ReactDOM.render(
// 	<Provider store={store}>
//   	<App />
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();