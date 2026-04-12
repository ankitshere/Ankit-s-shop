

import { useEffect } from "react";
import Nav from "./Components/Nav";
import MainRouter from "./Routes/MainRouter";
import { asyncCurrentuser } from "./Store/actions/UserAction";
import { useDispatch } from "react-redux";
const App = () => {

  const dispatch=useDispatch()

  useEffect(()=>{
     dispatch( asyncCurrentuser())
  })

  return (
   <div>
    <Nav/>
    <MainRouter/>
   </div>
   );
};

export default App;
