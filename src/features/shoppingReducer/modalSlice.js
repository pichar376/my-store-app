import { createSlice } from '@reduxjs/toolkit'

export const ModalSlice = createSlice({
  name: 'ModalData',
  initialState: {
    imgError: false,
    productDetail: {}
  },
  reducers: {
    setModalDetail: (state, action) => {
      return {
        ...state, productDetail: { ...action.payload }
      }
    },
    setImgError: (state, action) => {
      return {
        ...state, imgError: action.payload
      }
    },

  }
})

// Action creators are generated for each case reducer function
export const { setModalDetail, setImageError } = ModalSlice.actions

export default ModalSlice.reducer