import { combineReducer, combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducers";

const rootReducer = combineReducers({

    orders: OrderReducer,
    product: ProductReducer
});

export default rootReducer;