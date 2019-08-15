import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

import axios from "axios";

class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = {orders: null};
    }

    componentDidMount() {

        axios.get("http://localhost:3001/orders").then(
            res => {
                this.setState({orders : res.data});
            }
        );
    }

    delOrder(order) {
        axios.delete("http://localhost:3001/orders/" + order.id).then(res => {
            axios.get("http://localhost:3001/orders").then(
                res => {
                    this.setState({ orders : res.data });
                }
            );
        });
    }

    showOrders() {

        return this.state.orders && this.state.orders.map( order => {

            const date = new Date(order.orderedDate);

            return (
                <div key={order.id} className="col-md-3">    
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>x</button>
                    </p>
                    <h5> date: {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>

                    <ul>
                        {order.orders && order.orders.map(record => {
                            return (<li key={record.product.id}>
                                    {record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                                </li>);
                        })}
                    </ul>
                    <p className="title">total: {order.totalPrice}</p>
                </div>
            );
        });
    }


    render() {
        return(
            <div>
                <Header />

                    <div className="container-fluid">
                        <h1>Order</h1>
                        <div className="row">
                            {this.showOrders()}
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }

}


export default Order;