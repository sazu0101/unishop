
import { createSlice } from "@reduxjs/toolkit";

const Variable_Slice =  createSlice({
    name : 'variables',
    initialState : {
    show : false,
    },

    reducers : {
        ShowModalFun : (state) =>{
            state.show = true
        },
        CloseModalFun : (state) => {
            state.show = false
        }
    }
})

export const {ShowModalFun , CloseModalFun} = Variable_Slice.actions;
    
export default Variable_Slice.reducer;