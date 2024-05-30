
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config.json";


export const Fetch_Computer_Items = createAsyncThunk('/Fetch_Computer_Items/computer_products', async()=>{
   const res = await axios.get(`${config.apiUrl}/api/product/computer-items`)
   return res.data.computer_items;
}) 

const computer_item_Slice = createSlice({
   name:'computer_products',
   initialState : {
      loading : false,
      computer_items : [],
      error : null,
   },


   extraReducers : (builder) =>{
      
      builder.addCase(Fetch_Computer_Items.pending,(state)=>{
         state.loading = true
      });

      
      builder.addCase(Fetch_Computer_Items.fulfilled,(state,action)=> {
         state.loading = false;
         state.computer_items = action.payload;
      });

      builder.addCase(Fetch_Computer_Items.rejected,(state,action)=>{
         state.loading = false;
         state.computer_items = [];
         state.error = action.payload.error;

      })
   }
}) 


export default computer_item_Slice.reducer;