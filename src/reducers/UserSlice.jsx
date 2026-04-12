import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    data:null,
}

   export  const userSlice=createSlice({
    initialState,
    name:"user",
    reducers:{
        loaduser:(state, action)=>{

            state.user=action.payload;
        }
    }

   });

export default userSlice.reducer;

export const {loaduser} =userSlice.actions