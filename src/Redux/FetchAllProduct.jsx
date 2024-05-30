
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config.json"


 export const FetchAllProduct = createAsyncThunk("allproduct/FetchAllProduct", async () => {
    const res = await axios.get(`${config.apiUrl}/api/product/get-product`);
    return res.data.products;
 });


 const ProductSlice = createSlice({
    name : 'allproduct',
    initialState :  {
        loading : false,
        products : [],
        error : null,
    },   

   
   extraReducers : (builder) =>  {

      builder.addCase(FetchAllProduct.pending,(state)=>{
         state.loading = true
      });

      builder.addCase(FetchAllProduct.fulfilled,(state,action)=> {
         state.loading = false;
         state.products = action.payload;
      });

      builder.addCase(FetchAllProduct.rejected,(state,action)=>{
         state.loading = false;
         state.products = [];
         state.error = action.payload.error;

      })

   }

 })


  export default ProductSlice.reducer