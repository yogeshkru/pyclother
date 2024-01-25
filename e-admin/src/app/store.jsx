import {configureStore} from "@reduxjs/toolkit";
import brandDetails  from "../features/brandSlice";

export const store = configureStore({
    reducer:{
        brand:brandDetails
    }
})