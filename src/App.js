import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/containers/Home';
import About from './component/containers/About';

import Order from './component/containers/order/Order';

import Product from './component/containers/product/Product';

class App extends Component {

    renderRouter() {
      return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/orders" component={Order} />
          <Route path="/products" component={Product} />
        </Switch>
      );
    }

    render() {
      return (
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
