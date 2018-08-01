import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// import BookIndex from './Book/Index';
import TestNewProduct from './components/TestNewProduct';
// import BookEdit from './Book/Edit';
// import NotFound from './NotFound';

const history = createBrowserHistory();
const Routes = () =>
  <Router history={history}>
    <Switch>
      {/*<Route path="/books/:id/edit" component={BookEdit} />*/}
      {/*<Route path="/books/" component={BookIndex} />*/}
      <Route path="/test-product" component={TestNewProduct} />
    {/*<Route path="*" component={NotFound} />*/}
    </Switch>
  </Router>;

export default Routes;