import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./State";
import * as action from "./Actions"


const productReducer = createSlice({
    name:"productReducer",
    initialState:initialState,
    reducers:{
        // count increment action for add quantity of product 
        countIncrementHandler:(state)=>{
            // if count is less than or equal to 2 then if condition gets true and multiply price with quantity
            if(state.count<=2){
                state.count += 1
                state.price = 299 * state.count
            }
        },
        // if count is greater than or equal to 2 then if condition gets true and multiply price with quantity
        countDecrementHandler:(state)=>{
            if(state.count>=2){
                state.count -= 1
                state.price = 299 * state.count
            }
        }
    },
    // get product action for get data from backend
    
    extraReducers:(builder)=>{
        builder.addCase(action.Get_Product.fulfilled,(state,payload)=>{
            state.product = payload.payload
            state.price = state.product.price
            state.imageUrl.push(state.product.product_url1)
            state.imageUrl.push(state.product.product_url2)
            state.imageUrl.push(state.product.product_url3)
            state.imageUrl.push(state.product.product_url4)
            state.productFetch = true
        })
        builder.addCase(action.Get_Product.rejected,(state)=>{
            state.error = true
        })
    }
})

export default productReducer.reducer
export const {countIncrementHandler, countDecrementHandler} = productReducer.actions