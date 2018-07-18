import React from 'react';
import ProductsPage from './containers/ProductsPage';
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  //Eventually change so /products is landing page
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={() => <div id="welcome-div">Welcome to Drumverb! Click on the products link to get started.</div>}/>
          <Route path='/products' component={ProductsPage}/>
        </div>
      </Router>
    );
  }
}

export default App;