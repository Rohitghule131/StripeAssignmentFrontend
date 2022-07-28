import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productReducer from "./redux/Reducers"

export const store = configureStore({
    reducer:{
        productReducer:productReducer
    }
},applyMiddleware(thunk))
