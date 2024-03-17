import {configureStore} from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice'

export  const appStore = configureStore({
    reducer: {
        toggles: toggleReducer
    }
})