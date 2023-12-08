import { createSlice } from '@reduxjs/toolkit'

export const ModalSlice = createSlice({
  name: 'ModalData',
  initialState: {

    productDetail: {}
  },
  reducers: {
    setModalDetail: (state, action) => {
      return {
        ...state, productDetail: { ...action.payload }
      }
    },

  }
})

// Action creators are generated for each case reducer function
export const { setModalDetail } = ModalSlice.actions

export default ModalSlice.reducer