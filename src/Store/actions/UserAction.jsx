 import  axios from "../../Api/AxiosConfig";



 export const asyncuserregister=(user)=> async(dispatch,getState)=>{
 
try {
     const res= await axios.post("/users", user);
     console.log(res)
} catch (error) {
    console.log(error)
}

 }