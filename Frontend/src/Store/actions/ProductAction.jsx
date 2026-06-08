import { useDispatch } from "react-redux";
import { loadproduct } from "../../reducers/ProductSlice";
import axios from "axios";







export const asyncloadProduct = () => async (dispatch, getState) => {
  try {
    
    const {data}=await axios.get("https://ankit-s-shop.onrender.com/products");
  dispatch(loadproduct(data))

  }
  catch (error) {
  console.log(error)
 }
};
export const asyncCreateProduct = (product) => async(dispatch) => {
  try {
    
     await axios.post("https://ankit-s-shop.onrender.com/products", product);
dispatch(asyncloadProduct())
     
  }
  catch (error) {
  console.log(error)
 }
};
export const asyncupdateProduct = ( id ,product) => async(dispatch) => {
  try {
    
     await axios.patch(`https://ankit-s-shop.onrender.com/products/${id}`, product);
dispatch(asyncloadProduct());
     
  }
  catch (error) {
  console.log(error)
 }
};
export const asyncDeteleProduct = ( id ) => async(dispatch) => {
  try {
    
     await axios.delete(`https://ankit-s-shop.onrender.com/products/${id}`);
dispatch(asyncloadProduct());
     
  }
  catch (error) {
  console.log(error)
 }
};