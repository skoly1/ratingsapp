import { configureStore } from '@reduxjs/toolkit'
import Reviews from './slices/Reviews'

export default configureStore({
    reducer: {
        reviews:Reviews
    },
})