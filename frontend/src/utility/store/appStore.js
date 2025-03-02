import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice.jsx'
export const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
})