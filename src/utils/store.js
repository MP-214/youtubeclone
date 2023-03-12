
import { configureStore } from "@reduxjs/toolkit";
import cacheSlice from "./cacheSlice";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";



export const store = configureStore({
    reducer: {
        cache:cacheSlice,
        app:appSlice,
        chat:chatSlice
    }
})