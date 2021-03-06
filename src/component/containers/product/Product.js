import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import ProductList from "../../product/ProductList";
import { withRouter } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
import { productsFetch, productDelete } from "../../../redux/actions";


class Product extends Component {

    constructor(props) {
        super(props);
        // this.state = { products : null };
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);

    }

    componentDidMount() {
        // axios.get("http://localhost:3001/products").then(res => {
        //     this.setState({ products : res.data });
        // });
        this.props.productsFetch();
        console.log('from props page');
        console.log(this.props);
    }

    componentDidUpdate() {
        // axios.get("http://localhost:3001/products").then(res => {
        //     this.setState({ products : res.data });
        // });
        // this.props.productsFetch();
        console.log('from props update');
        console.log(this.props);
    }

    editProduct(product) {
        this.props.history.push('products/edit/' + product.id);
    }

    delProduct(product) {
        // axios.delete("http://localhost:3001/products/" + product.id).then(res => {
        //     axios.get("http://localhost:3001/products/").then( 
        //         res => {
        //             this.setState({ products : res.data });
        //         });
        // });
        this.props.productDelete(product.id);
    }


    render() {
        return (
            <div>
                <Header />

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <h1>Product</h1>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-success title float-right"
                                onClick={() => this.props.history.push('products/add') } >add</button>
                            </div>
                        </div>

                        <ProductList products={this.props.products} 
                        onDelProduct={this.delProduct}
                        onEditProduct={this.editProduct} /> 
                    </div>

                <Footer />
            </div>
        );

    }
}


function mapStateToProps({ product }){
    return { products : product };
}


export default withRouter(connect(mapStateToProps, { productsFetch, productDelete })(Product));
