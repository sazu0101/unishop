
 import { createSlice } from "@reduxjs/toolkit";

 const FilterProductSlice = createSlice({
    name : "filterproduct",
    initialState : {
       category_Wise_Products :[],
    },

    reducers : {
      categoryWiseProductsAction:(state,action)=>{
        state.category_Wise_Products = [...action.payload];
      },
        LowestPriceProduct : (state,action) => {
           let products = action.payload; 
           state.category_Wise_Products = [...products].sort((a,b)=> a.price - b.price)
        },

        HighestPriceProduct : (state,action) =>{
          let products = action.payload;
          state.category_Wise_Products = [...products].sort((a,b)=> b.price - a.price)
        },

        ProductFromAtoZ : (state,action) => {
          let products = action.payload;
          state.category_Wise_Products = [...products].sort((a,b) => a.title.localeCompare(b.title))
        },

        ProductFromZtoA : (state,action) => {   
         let products = action.payload;
         state.category_Wise_Products  = [...products].sort((a,b)=> b.title.localeCompare(a.title));
        },

        polobrand :(state,action)=>{
         let products = action.payload;
         state.category_Wise_Products = [...products].filter((product)=> product.brand==='polo' )
        },

        nobrand:(state,action)=>{
          let products = action.payload;
          state.category_Wise_Products = [...products].filter((product)=> product.brand ==='no-brand' )
        },
        hpBrand : (state,action) => {
           let products = action.payload;
           state.category_Wise_Products = [...products].filter((product)=> product.brand === "hp")
        },
        TreateBrand : (state,action) => {
          let products = action.payload;
          state.category_Wise_Products = [...products].filter((product)=> product.brand === "Treate")
        },
        NestleBrand : (state,action) => {
          let products = action.payload;
          state.category_Wise_Products = [...products].filter((product)=> product.brand === "Nestle")
        },
        PranBrand : (state,action) => {
          let products = action.payload;
          state.category_Wise_Products = [...products].filter((product)=>product.brand === "pran")
        }
    }
 })

 export const {categoryWiseProductsAction,LowestPriceProduct , HighestPriceProduct , ProductFromAtoZ, ProductFromZtoA , polobrand,nobrand,hpBrand,TreateBrand,NestleBrand,PranBrand} = FilterProductSlice.actions;
 export default FilterProductSlice.reducer;