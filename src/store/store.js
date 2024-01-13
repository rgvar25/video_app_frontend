import { configureStore } from "@reduxjs/toolkit"
import authSLice from "./authSLice"


const store = configureStore({
    reducer: {
        auth: authSLice
    }
})

export default store;