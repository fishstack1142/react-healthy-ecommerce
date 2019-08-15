import React from "react";

import logo from '../images/logo/logosummerholiday.png';

import { Link } from "react-router-dom";

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {date : new Date()};
        //setInterval(() => this.tick(), 1000);
    }

    componentDidMount() {
        console.log('componentDidMount');
        //this.timerID = setInterval(() => this.tick(), 1000);
    }


    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('...componentWillUnmount')
        clearInterval(this.timerID);

    }


    tick() {
        this.setState({date : new Date()});
    }

    render() {
        return (

            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-warning"><img style={{height: 75}} src={logo} />React Healthy E-Commerce </h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="text-muted mt-4">
                            {this.state.date.toLocaleTimeString()}
                        </h5>
                        <ul className="list-inline">
                        
                            <li className="list-inline-item title"><Link to="/">Main</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link to="/orders">Orders</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link to="/products">Products</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link to="/about">About</Link></li>

                        </ul>
                    </div>

                    <hr/>
                </div>
                <hr />
            
            </div>

        );
    }
}