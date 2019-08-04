import React from "react";

export default class Calculator extends React.Component {

    render() {
        return (
            <div>
                <h1 className="text-right">340.0</h1>
                <hr/>
                <ul className="list-unstyled">
                    <li className="text-right text-success title">
                        Bing su
                        <button className="btn btn-light btn-sm">X</button>
                    </li>
                    <li className="text-right text-success title">
                        
                    </li>
                </ul>
                <hr/>
                <button className="btn btn-block btn-danger title">
                    confirm
                </button>
                <button className="btn btn-block btn-secondary title">
                    cancel
                </button>

            </div>
        )
    }
}