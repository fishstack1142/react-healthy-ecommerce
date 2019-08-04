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


    render() {

        const {productName, unitPrice} = this.props;

        return(
            <div>
                <p>{productName}</p>
                <p>{unitPrice}</p>
            </div>
        )
    }
}

export default ProductItem;