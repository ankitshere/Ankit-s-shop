 import React from 'react'
import About from '../Pages/About'
import Product from '../Pages/Product'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
 import  Register  from "../Pages/Register";
import CreateProduct from '../Admin/CreateProduct'
import ProductDetails from '../Admin/ProductDetails'
 const MainRouter = () => {
   return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />   } />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/CreteProduct" element={<CreateProduct/>} />
        <Route path="/Products/:id" element={<ProductDetails/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
   )
 }
 
 export default MainRouter