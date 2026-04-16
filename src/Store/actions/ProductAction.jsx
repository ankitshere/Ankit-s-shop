import { useDispatch } from "react-redux";
import { loadproduct } from "../../reducers/ProductSlice";
import axios from "axios";







export const asyncloadProduct = () => async (dispatch, getState) => {
  try {
    
    const {data}=await axios.get("/product");
    dispatch(loadproduct(data))
     
  }
  catch (error) {
  console.log(error)
 }
};
export const asyncCreateProduct = (product) => async(dispatch) => {
  try {
    
      await axios.post("product", product);
      dispatch(loadproduct())
     
  }
  catch (error) {
  console.log(error)
 }
};