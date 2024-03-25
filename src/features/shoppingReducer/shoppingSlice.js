import { createSlice } from '@reduxjs/toolkit'

export const ShoppingSlice = createSlice({
  name: 'shoppingData',
  initialState: {
    products: [],
    value: 0,
    cart: [],
    search: ""

  },
  reducers: {
    setProducts: (state, action) => {
      return {
        ...state, products: [...action.payload]
      }
    },
    addToCart: (state, action) => {


      const newItem = state.products.find((el) => el.id === action.payload.id)

      const itemInCart = state.cart.find((el) => el.id === newItem.id)




      return itemInCart ?
        {
          ...state, cart: state.cart.map((el) => el.id === newItem.id ? { ...el, quantity: el.quantity + 1 }
            : el
          )
        }
        : {
          ...state, cart: [...state.cart, { ...newItem, quantity: 1 }]
        }
      // return {
      //   ...state, cart: [...state.cart, newItem]
      // }
    },
    removeToCart: (state, action) => {
      const uploadItems = state.cart.filter((el) => el.id != action.payload.id)


      return { ...state, cart: uploadItems }
    },
    removeOneToCart: (state, action) => {
      const uploadItems = state.cart.filter((el) => el.id != action.payload.id)

      if (action.payload.quantity > 1) {
        return {
          ...state, cart: state.cart.map((el) => el.id === action.payload.id
            ? { ...el, quantity: el.quantity - 1 }
            : el
          )
        }
      } else {
        return { ...state, cart: uploadItems }
      }


    },
    addProduct: (state, action) => {
      if (action.payload === "+") {
        console.log("+++++")
      } else
        if (action.payload === "-") {
          console.log("------")
        }
    },

    setSearch: (state, action) => {
      return { ...state, search: action.payload }
    },
    fetchProductsPending: (state) => {
      return { ...state, loading: true };
    },
    fetchProductsFulfilled: (state, action) => {
      return { ...state, loading: false, products: action.payload };
    },
    fetchProductsRejected: (state, action) => {
      // Handle errors (optional)
      return { ...state, loading: false };
    },
  }
})

// Action creators are generated for each case reducer function
export const { addProducts, setProducts, addToCart, removeToCart, removeOneToCart, setSearch } = ShoppingSlice.actions

export default ShoppingSlice.reducer