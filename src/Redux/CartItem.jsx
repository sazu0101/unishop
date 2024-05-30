
 import { createSlice } from "@reduxjs/toolkit";

 const CartSlice = createSlice({
    name : 'cart',
    initialState : {
    Cart :JSON.parse(localStorage.getItem('cart')) || [],
    shipping : '',
    },

    reducers : {
        AddtoCart : (state,action) => {

            let {_id,price,product,quantity,title,slug} = action.payload;
            let CartItems;
          
            CartItems = { 
              _id,
              price,
              quantity,
              title,
              slug
            }
             state.Cart = [...state.Cart,CartItems];
            
        },

        DeleteFromCart : (state,action) => {
            let updatedCart;
            updatedCart = state.Cart.filter((item)=> item._id !== action.payload)
            state.Cart = updatedCart;
        },    
           
         ResetCart : (state,action) =>{
            state.Cart = [];
        }


    }
 })

 export const {AddtoCart , DeleteFromCart} = CartSlice.actions 

 export default CartSlice.reducer;