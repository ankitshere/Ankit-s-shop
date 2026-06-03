import { useDispatch } from "react-redux";
import { loadproduct } from "../../reducers/ProductSlice";
import axios from "axios";







export const asyncloadProduct = () => async (dispatch, getState) => {
  try {
    
    const {data}=await axios.get("http://localhost:3000/products");
  dispatch(loadproduct(data))

  }
  catch (error) {
  console.log(error)
 }
};
export const asyncCreateProduct = (product) => async(dispatch) => {
  try {
    
     await axios.post("http://localhost:3000/products", product);
dispatch(asyncloadProduct())
     
  }
  catch (error) {
  console.log(error)
 }
};
export const asyncupdateProduct = ( id ,product) => async(dispatch) => {
  try {
    
     await axios.patch(`http://localhost:3000/products/${id}`, product);
dispatch(asyncloadProduct());
     
  }
  catch (error) {
  console.log(error)
 }
};
export const asyncDeteleProduct = ( id ) => async(dispatch) => {
  try {
    
     await axios.delete(`http://localhost:3000/products/${id}`);
dispatch(asyncloadProduct());
     
  }
  catch (error) {
  console.log(error)
 }
};