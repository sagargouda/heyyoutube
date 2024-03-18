import {configureStore} from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice'
import searchReducer from './searchSlice'

export  const appStore = configureStore({
    reducer: {
        toggles: toggleReducer,
        search: searchReducer
    }
})