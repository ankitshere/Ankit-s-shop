import { configureStore, createReducer } from '@reduxjs/toolkit'
import productSlice from '../reducers/ProductSlice'
import  userSlice  from '../reducers/UserSlice'
import  cartSlice  from '../reducers/CartSlice'

export const store = configureStore({
  reducer: {
    productsreducer:productSlice,
    usersreducer:userSlice,
    cartsreducer:cartSlice,
  },

})