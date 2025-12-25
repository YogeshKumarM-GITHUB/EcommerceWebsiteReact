import {configureStore}  from '@reduxjs/toolkit'
import userSliceReducer from '../features/user/userSlice.js'

export default configureStore({
    reducer:{
       user:userSliceReducer
    },
})
