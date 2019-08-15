import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

const NotFound = () => {
    return (
        <div>
            <Header />

                <div className="container col-md-8 text-center">
                    <h1>404</h1>
                    <h2>Not Found</h2>
                </div>

            <Footer />
        </div>
    );
}

export default NotFound;