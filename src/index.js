import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const element = <h1>hello react ecommerce</h1>

function Welcome(){
    return <h1>Welcome to React Ecommerce page</h1>
}

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<Welcome />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
