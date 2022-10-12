import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      id: 1,
      title: 'Kristina',
      price: 700,
      img: 'Layer_151.png',
      isAvailable: false,
    },
    {
      id: 2,
      title: 'Natalya',
      price: 300,
      img: 'Layer_152.png',
      isAvailable: true,
    },
    {
      id: 3,
      title: 'Natalya',
      price: 500,
      img: 'Layer_153.png',
      isAvailable: false,
    },
    {
      id: 4,
      title: 'Natalya',
      price: 100,
      img: 'Layer_154.png',
      isAvailable: false,
    },
    {
      id: 5,
      title: 'Natalya',
      price: 50,
      img: 'Layer_155.png',
      isAvailable: false,
    },
    {
      id: 6,
      title: 'Natalya',
      price: 20,
      img: 'Layer_156.png',
      isAvailable: false,
    },
    {
      id: 7,
      title: 'Natalya',
      price: 80,
      img: 'Layer_157.png',
      isAvailable: false,
    },
    {
      id: 8,
      title: 'Natalya',
      price: 140,
      img: 'Layer_149.png',
      gradient: true,
    },
    {
      id: 9,
      title: 'Natalya',
      price: 250,
      img: 'Layer_151.png',
      isAvailable: false,
    },
    {
      id: 10,
      title: 'Natalya',
      price: 190,
      img: 'Layer_152.png',
      isAvailable: false,
    },
    {
      id: 11,
      title: 'Natalya',
      price: 10,
      img: 'Layer_153.png',
      isAvailable: false,
    },
    {
      id: 12,
      title: 'Natalya',
      price: 330,
      img: 'Layer_154.png',
      isAvailable: false,
    },
  ],
  featured: [
    {
      id: 3,
      title: 'Natalya',
      review: 'awesome',
      img: 'Layer_153.png',
    },
    {
      id: 4,
      title: 'Natalya',
      review: 'marketing',
      img: 'Layer_154.png',
    },
    {
      id: 6,
      title: 'Natalya',
      review: 'awesome',
      img: 'Layer_156.png',
    },
    {
      id: 7,
      title: 'Natalya',
      review: 'awesome',
      img: 'Layer_157.png',
    },

    {
      id: 9,
      title: 'Natalya',
      review: 'marketing',
      img: 'Layer_151.png',
    },
    {
      id: 10,
      title: 'Natalya',
      review: 'awesome',
      img: 'Layer_152.png',
    },
    {
      id: 11,
      title: 'Natalya',
      review: 'marketing',
      img: 'Layer_153.png',
    },
    {
      id: 12,
      title: 'Natalya',
      review: 'awesome',
      img: 'Layer_154.png',
    },
  ],
  favourite: [],
  cart: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      const { productId } = action.payload
      const product = state.products.find(
        (product) => Number(product.id) === Number(productId)
      )
      state.favourite.push(product)
    },
    removeFromFavourite: (state, action) => {
      const { productId } = action.payload
      state.favourite = state.favourite.filter((obj) => obj.id !== productId)
    },
    addToCart: (state, action) => {
      const { productId, count } = action.payload
      const found = state.cart.find((el) => el.id === productId)
      if (found && count) {
        const product = state.cart.find(
          (product) => Number(product.id) === Number(productId)
        )
        product.count += count
      } else {
        const product = state.products.find(
          (product) => Number(product.id) === Number(productId)
        )
        product.count = count
        state.cart.push(product)
      }
    },
    minusFromCart: (state, action) => {
      const { productId, count } = action.payload
      const found = state.cart.find((el) => el.id === productId)
      if (found && count) {
        const product = state.cart.find(
          (product) => Number(product.id) === Number(productId)
        )
        product.count -= 1
      } else {
        const product = state.products.find(
          (product) => Number(product.id) === Number(productId)
        )
        product.count = count
        state.cart.push(product)
      }
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload
      state.cart = state.cart.filter((obj) => obj.id !== productId)
    },
    replaceInCart: (state, action) => {
      const { productId, count } = action.payload
      const found = state.cart.find((el) => el.id === productId)
      if (found && count) {
        const product = state.cart.find(
          (product) => Number(product.id) === Number(productId)
        )
        product.count = count
      }
    },
  },
})

export const selectAllProducts = (state) => state.products.products

export const selectAllFeaturedProducts = (state) => state.products.featured

export const selectProductById = (state, productId) =>
  state.products.products.find((product) => product.id === productId)

export const selectAllFavourites = (state) => state.products.favourite

export const selectAllCart = (state) => state.products.cart

export const {
  addToFavourite,
  removeFromFavourite,
  addToCart,
  minusFromCart,
  removeFromCart,
  replaceInCart,
} = productsSlice.actions

export default productsSlice.reducer
