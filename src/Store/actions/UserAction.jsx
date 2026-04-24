import { Navigate } from "react-router-dom";
import instance from "../../Api/AxiosConfig";
import { loaduser, removeuser } from "../../reducers/UserSlice";
import axios from "axios";


export const asyncuserregister = (user) => async (dispatch, getState) => {
  try {
    const res = await instance.post("/users", user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};



export const asyncCurrentuser = () => async (dispatch) => {
  try {
    
     const user= JSON.parse(localStorage.getItem("user"))
     if(user) dispatch(loaduser(user));
     else console.log("user not found");
     
  }
  catch (error) {
  console.log(error)
 }
};
export const asynclogoutinuser = () => async (dispatch) => {
  try {
  
      localStorage.removeItem("user");
      dispatch(removeuser());
    console.log("user is logout!")
  }
  catch (error) {
  console.log(error)
 }
 Navigate("/home")
};


export const asyncloginuser = (user) => async (dispatch) => {
  try {
    const { data } = await instance.get(
      `/users?email=${encodeURIComponent(user.email)}`
    );

    console.log("login response data:", data[0]);
    localStorage.setItem("user",JSON.stringify(data[0]))

    if (Array.isArray(data) && data.length > 0) {
      const loggedInUser = data[0];
      if (loggedInUser.password === user.password) {
        dispatch(loaduser(loggedInUser));
        return loggedInUser;
      }
      console.log("Login failed: password mismatch.");
      return null;
    }

    console.log("Login failed: no matching email found.");
  
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};




export const asyncupdateuser = (id, user) => async (dispatch) => {
  try {
    const res = await instance.patch(`/users/${id}`, user);

    dispatch({
      type: "UPDATE_USER",
      payload: res.data,
    });

    // ✅ localStorage
    localStorage.setItem("user", JSON.stringify(res.data));

  } catch (error) {
    console.log(error);
  }
};


export const asyncDeteleuser = ( id ) => async(dispatch) => {
  try {
    
     await axios.delete(`http://localhost:3000/users/${id}`);
dispatch(asynclogoutinuser());
     
  }
  catch (error) {
  console.log(error)
 }
};