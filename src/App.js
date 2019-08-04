import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import ProductItem from "./component/product/ProductItem";
import MainScreen from './component/main/MainScreen';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = { products : "" };
  }


  componentDidMount() {
    this.setState({
      products : [
        { productId: 1, productName: "Burger", unitPrice: "129", thumbnail: "images/product/burger.png" },
        { productId: 2, productName: "Burito", unitPrice: "89", thumbnail: "images/product/burito.png" },
        { productId: 3, productName: "Cupcake", unitPrice: "99", thumbnail: "images/product/cupcake.png" },
        { productId: 4, productName: "Donut", unitPrice: "59", thumbnail: "images/product/donut.png" },
        { productId: 5, productName: "French Fries", unitPrice: "109", thumbnail: "images/product/fies.png" },
        { productId: 6, productName: "Sandwich", unitPrice: "169", thumbnail: "images/product/sandwich.png" },
        { productId: 7, productName: "Taco", unitPrice: "189", thumbnail: "images/product/taco.png" }
        
      ]
    });
}

  render() {

    return (
      <div>

        <Header />

        <MainScreen products={this.state.products} />

        <Footer company="company1" email="email@mail.com" />

      </div>
  );

  }
}

export default App;
