import React from "react";

const Footer = (props) => {
    return (
        <div className="container-fluid">
        <hr />
            <div className="text-center title text-uppercase">
                <small>
                    <h6>all right - {props.company} {props.email}</h6>
                </small>
            </div>
        </div>
    )
}


export default Footer;