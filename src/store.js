import { configureStore } from '@reduxjs/toolkit'
import ShoppingReducer from './features/shoppingReducer/shoppingSlice'
import ModalReducer from "./features/shoppingReducer/modalSlice"
import { thunk } from 'redux-thunk'

export default configureStore({
  reducer: {
    shoppingData: ShoppingReducer,
    modalDetail: ModalReducer
  },
  middleware: [thunk],
})