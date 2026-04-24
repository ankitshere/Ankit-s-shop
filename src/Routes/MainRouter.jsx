
import Product from '../Pages/Product'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
 import  Register  from "../Pages/Register";
import CreateProduct from '../Admin/CreateProduct'
import ProductDetails from '../Admin/ProductDetails'
import { useSelector } from 'react-redux'
import UserProfile from '../Pages/User/UserProfile'
import AuthWrappe from './AuthWrapper'
 const MainRouter = () => {

const user = useSelector((state) => state.usersreducer.user)
console.log(user)
   return (
        <Routes>
        <Route path="/" element={ user ? <Product /> :  <Home />} />

        <Route path="/product" element={<AuthWrappe><Product /></AuthWrappe>} />
        <Route path="/login" element={<Login />} />
        <Route path="/User/UserProfile" element={<AuthWrappe><UserProfile /></AuthWrappe>} />
        <Route path="/admin/CreteProduct" element={<AuthWrappe>
          <CreateProduct/>
        </AuthWrappe>} />
        <Route path="/Products/:id" element={<AuthWrappe><ProductDetails/></AuthWrappe>} />
        <Route path="/register" element={<Register />} />
      </Routes>
   )
 }
 
 export default MainRouter