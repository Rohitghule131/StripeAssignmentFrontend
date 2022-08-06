import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productReducer from "../modules/reducers/Reducers"

// created store for manage states
// Added thunk middle were for returning function

export const store = configureStore({
    reducer:{
        productReducer:productReducer
    }
},applyMiddleware(thunk))
