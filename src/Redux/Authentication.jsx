
import { createSlice } from "@reduxjs/toolkit";

const authSLice = createSlice({
    name : 'authentication',
    initialState : {
        email : JSON.parse(localStorage.getItem("email")) || null,
        password : JSON.parse(localStorage.getItem("password")) || null, 
        role : JSON.parse(localStorage.getItem("role")),
        token : JSON.parse(localStorage.getItem("token")) || null,
    },

    reducers : {
        setUser : (state,action)=>{
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.role = action.payload.role;
            state.token = action.payload.token;

        },

        removeUser : (state,action)=>{
            state.email = null;
            state.password = null;
            state.role = null;
            state.token = null;

        }
    }
})

export const {setUser , removeUser} = authSLice.actions;

export default authSLice.reducer