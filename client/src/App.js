import React from 'react';
import ProductsPage from './containers/ProductsPage';
import Header from './components/Header'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" />
          <Route path='/products' component={ProductsPage}/>
        </div>
      </Router>
    );
  }
}

export default App;