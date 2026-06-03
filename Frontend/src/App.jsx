

import { useEffect } from "react";
import Nav from "./Components/Nav";
import MainRouter from "./Routes/MainRouter";
import { asyncCurrentuser } from "./Store/actions/UserAction";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { loadproduct } from "./reducers/ProductSlice";
import { asyncloadProduct } from "./Store/actions/ProductAction";
const App = () => {

  const dispatch=useDispatch()

  useEffect(()=>{
     dispatch( asyncCurrentuser())
     dispatch(asyncloadProduct())
  },[])

  return (
   <div>
      <ToastContainer/>
    <Nav/>
    <MainRouter/>
   </div>
   );
};

export default App;
