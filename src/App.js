import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import ProductItem from "./component/product/ProductItem";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {

    return (
      <div>

        <Header />

        <ProductItem  productName="product1" unitPrice="price1" />

        <Footer company="company1" email="email@mail.com" />

      </div>
  );

  }
}

export default App;
