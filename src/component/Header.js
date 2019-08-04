import React from "react";

import logo from '../images/logo/logosummerholiday.png'

class Header extends React.Component {

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
                        <h1 className="text-warning"><img style={{height: 75}} src={logo} />Super E-commerce </h1>
                    </div>
                    <div className="col-md-4 text-right">
                        {this.state.date.toLocaleTimeString()}
                    </div>

                    <hr/>
                </div>
            
            </div>

        );
    }
}

export default Header;