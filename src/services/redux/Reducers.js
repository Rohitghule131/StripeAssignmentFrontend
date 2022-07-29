import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./State";
import * as action from "./Actions"

const productReducer = createSlice({
    name:"productReducer",
    initialState:initialState,
    reducers:{
        countIncrementHandler:(state)=>{
            if(state.count<=2){
                state.count += 1
                state.price = 299 * state.count
            }
        },
        countDecrementHandler:(state)=>{
            if(state.count>=2){
                state.count -= 1
                state.price = 299 * state.count
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(action.Get_Product.fulfilled,(state,payload)=>{
            state.product = payload.payload
            state.price = state.product[0].price
            state.imageUrl.push(state.product[0].product_url1)
            state.imageUrl.push(state.product[0].product_url2)
            state.imageUrl.push(state.product[0].product_url3)
            state.imageUrl.push(state.product[0].product_url4)
            state.productFetch = true
        })
        builder.addCase(action.Get_Product.rejected,(state)=>{
            state.error = true
        })
    }
})

export default productReducer.reducer
export const {countIncrementHandler, countDecrementHandler} = productReducer.actions