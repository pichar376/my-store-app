import { configureStore } from '@reduxjs/toolkit'
import ShoppingReducer from './features/shoppingReducer/shoppingSlice'
import ModalReducer from "./features/shoppingReducer/modalSlice"

export default configureStore({
  reducer: {
    shoppingData: ShoppingReducer,
    modalDetail: ModalReducer
  },
})