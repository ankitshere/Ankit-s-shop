import axios from "axios";
import { loaduser } from "./UserSlice";

export const getAsyncuser =  ()=>   async(dispatch,getstate) =>  {
  try {

    console.log(  "Curent State=>>>>"  ,getstate())
    const res = await axios.get("http://localhost:3000/users");
    // console.log(res);   
dispatch(loaduser(res.data));


  } catch (error) {
    console.log(error);
  }
};
