import { createSlice } from "@reduxjs/toolkit";

 
const initialState ={
    data:[],
}

   export  const cartSlice=createSlice({
    initialState,
    name:"cart",
    reducers:{
        loadcart:(state, action)=>{

            state.cart=action.payload;
        }
    }

   });

export default cartSlice.reducer;

export const {loadcart} =cartSlice.actions