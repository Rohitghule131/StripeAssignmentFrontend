import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import * as url from "../Urls"

// created product actions here

export const Get_Product = createAsyncThunk('get/product',async()=>{
    const response = await axios.get(url.PRODUCT_URL).catch(err=>console.log(err))
    return response.data
})
