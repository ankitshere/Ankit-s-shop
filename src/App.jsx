import { useEffect } from "react";
import { getAsyncuser } from "./Store/UserAction";
import { useDispatch, useSelector } from "react-redux";
const App = () => {

const data =useSelector((state) => state);

  const dispatch = useDispatch();
console.log(data)

  useEffect(() => {


    dispatch(getAsyncuser());
  }, []);

  return <div>App</div>;
};

export default App;
