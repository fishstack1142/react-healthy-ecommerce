import React from "react";

// const ProductItem = (props) => {
//     //js deconstructor
//     const {productName, unitPrice} = props;

//     return(
//         <div>
//             <p>{productName} </p>
//             <p>{unitPrice}</p>
//         </div>

//     )
// }

class ProductItem extends React.Component {

    constructor(props) {
        super(props);
    }

    doSomething(e) {

        alert(e.target.value);

    }


    render() {

        const {productId, productName, unitPrice, thumbnail} = this.props.product;

        return(
            <div className="col-md-3 col-sm-5">
                <div className="text-center align-content-center">
                    <img src={thumbnail}  alt="1" className=" rounded mx-auto img-fluid img-thumbnail center"/>
                </div>
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right" >{unitPrice} THB</p>
                <button className="btn btn-block btn-secondary title" value={unitPrice} onClick={() => this.props.onAddOrder(this.props.product)}>
                    buy 
                </button>
                <hr/>
            </div>
        )
    }
}

export default ProductItem;