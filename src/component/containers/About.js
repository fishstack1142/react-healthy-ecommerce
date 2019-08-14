import React from "react";
import Header from "../Header";
import Footer from "../Footer";


const About = () => {

    return (
        <div>
            <Header />

            <div className="container col-md-5"></div>
            <h3>Hello, welcome to our store</h3>

            <Footer company="about company" email="mailserverroon@gmail.com" />
        </div>
    );
};


export default About;