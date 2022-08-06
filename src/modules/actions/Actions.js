import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import * as url from "../../utils/Urls"

// created product actions here

// created thunk action for get data from backend using axios get

export const Get_Product = createAsyncThunk('get/product',async()=>{
    const response = await axios.get(url.PRODUCT_URL).catch(err=>console.log(err))
    return response.data
})
