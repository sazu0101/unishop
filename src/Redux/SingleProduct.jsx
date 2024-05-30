
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleProduct = createAsyncThunk(`singleproduct/getSingleProduct`, async (url) =>{
    try {
        const { data } = await axios.get(url)
        if (data.success) return data.singleProduct
    } catch (error) {
        console.log(error);
    }
})

const SingleProductSlice = createSlice({
    name: "singleproduct",
    initialState: {
        loading: false,
        SingleProduct: null,
        error: null
    },

    extraReducers: (builder) => {
        builder.addCase(getSingleProduct.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getSingleProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.SingleProduct = action.payload;
        });

        builder.addCase(getSingleProduct.rejected, (state, action) => {
            state.SingleProduct = null;
            state.error = action.payload.error;
        });
    }
});



export default SingleProductSlice.reducer;