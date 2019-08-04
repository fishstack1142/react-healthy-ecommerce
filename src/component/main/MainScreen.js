import React from 'react';
import Calculator from './Calculator';

import ProductList from '../product/ProductList';

export default class MainScreen extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} />
                    </div>
                    <div className="col-md-3">
                        <Calculator />
                    </div>
                </div>
             </div>
        );
    }
}

