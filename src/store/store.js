import { configureStore } from "@reduxjs/toolkit";
import navReducer from './navState/reducer'
import staysReducer from './stays/reducer'

export const store = configureStore({
    reducer: {
        navReducer,
        staysReducer
    }
})