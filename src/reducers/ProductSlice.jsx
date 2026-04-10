import { createSlice } from "@reduxjs/toolkit";

 
const initialState ={
    data:[],
}

   export  const productSlice=createSlice({
    initialState,
    name:"product",
    reducers:{
        loadproduct:(state, action)=>{

            state.product=action.payload;
        }
    }

   });

export default productSlice.reducer;

export const {loadproduct} =productSlice.actions