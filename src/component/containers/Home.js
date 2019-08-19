import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MainScreen from '../main/MainScreen';
import axios from "axios";
import { connect } from "react-redux";
import { productsFetch } from "../../redux/actions/index";

import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends Component {

  constructor(props) {
      super(props);
      //use react instead
      //this.state = { products : "" };


  }


  componentDidMount() {

    this.props.productsFetch();    



    // this.setState({
    //   products : [
    //     { productId: 1, productName: "Burger", unitPrice: "129", thumbnail: "images/product/burger.png" },
    //     { productId: 2, productName: "Burito", unitPrice: "89", thumbnail: "images/product/burito.png" },
    //     { productId: 3, productName: "Cupcake", unitPrice: "99", thumbnail: "images/product/cupcake.png" },
    //     { productId: 4, productName: "Donut", unitPrice: "59", thumbnail: "images/product/donut.png" },
    //     { productId: 5, productName: "French Fries", unitPrice: "109", thumbnail: "images/product/fies.png" },
    //     { productId: 6, productName: "Sandwich", unitPrice: "169", thumbnail: "images/product/sandwich.png" },
    //     { productId: 7, productName: "Taco", unitPrice: "189", thumbnail: "images/product/taco.png" }
        
    //   ]
    // });

    // fetch("http://localhost:3001/products", { method : "GET"})
    // .then(res => res.json())
    // .then(res => {this.setState({ products : res })})
    // .then(res => { console.log(res)});


    //use redux instead
    // axios.get("http://localhost:3001/products").then(res => {
    //   console.log(res.data);
    //   { this.setState({ products : res.data })};
    // });

}

  render() {

    return (
      <div>

        <Header />

        <MainScreen products={this.props.products} />

        <Footer company="company1" email="email@mail.com" />

      </div>
  );
  }
}

function mapStateToProps(state) {
    console.log("data from home page");
    console.log(state);
    return { products: state.product };

}


export default connect(mapStateToProps, { productsFetch })(Home);
