
 import { createSlice } from "@reduxjs/toolkit";

 const ProductQuantitySlice = createSlice({
    name : 'productquantitycounter',
    initialState : {
        count : 1
    },

    reducers : {
        Increment : (state,action)=>{
            state.count = state.count + 1;
        },

        Decrement : (state,action)=>{
            state.count = state.count - 1 ;
        },
        Reset : (state,action) => {
            state.count = 1
        }
    }
 })


 export const {Increment , Decrement , Reset} = ProductQuantitySlice.actions;

 export default ProductQuantitySlice.reducer