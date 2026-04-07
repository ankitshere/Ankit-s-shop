import { createSlice } from "@reduxjs/toolkit";


const initialState={
    data:[],
}


 const Userslice=createSlice({

    name:"user",
    initialState,
    reducers:{
        loaduser:(state,action)=>{
            // console.log(action)
      state.data = action.payload;
        },
    },

 });


  export const {loaduser}=Userslice.actions;
 export default Userslice.reducer;