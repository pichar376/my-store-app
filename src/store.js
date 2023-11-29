import { configureStore } from '@reduxjs/toolkit'
import ShoppingReducer from './features/shoppingReducer/shoppingSlice'

export default configureStore({
  reducer: {
    shoppingData: ShoppingReducer,
  },
})