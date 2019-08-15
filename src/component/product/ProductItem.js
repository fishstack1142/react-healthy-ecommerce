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
                <h5 className="mt-2 text-success">{productName}</h5>
                <p className="title text-right" >{unitPrice} THB</p>

                { this.props.onAddOrder &&
                <button className="btn btn-block btn-secondary title" value={unitPrice} onClick={() => this.props.onAddOrder(this.props.product)}>
                    buy 
                </button>
                }

                { (this.props.onDelProduct || this.props.onEditProduct) &&
                <button className="btn btn-info col-6 title"
                onClick={() => this.props.onEditProduct(this.props.product)}>
                    edit 
                </button>
                }


                { (this.props.onDelProduct || this.props.onEditProduct) &&
                <button className="btn btn-danger col-5 float-right title" value={unitPrice} onClick={() => this.props.onDelProduct(this.props.product)}>
                    remove 
                </button>
                }

                <hr/>
            </div>
        );
    }
}

export default ProductItem;