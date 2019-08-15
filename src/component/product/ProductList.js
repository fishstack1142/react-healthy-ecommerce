import React from "react";

import ProductItem from "./ProductItem.js";

export default class ProductList extends React.Component {

    showProducts() {

        // if(this.props.products) {
            return this.props.products && this.props.products.map(product => (
                // <ProductItem productName={product.productName} unitPrice={product.unitPrice}  thumbnail={product.thumbnail} />
                //use spread operator instead
                <ProductItem key={product.id} product={product} onAddOrder={this.props.onAddOrder} 
                onDelProduct={this.props.onDelProduct}
                onEditProduct={this.props.onEditProduct} />
            ));
        // }
    }

    render() {
        return (
            <div className="row">
                {this.showProducts()}
            </div>

        );
    }
}

