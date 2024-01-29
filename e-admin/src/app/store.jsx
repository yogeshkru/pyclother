import {configureStore} from "@reduxjs/toolkit";
import brandDetails  from "../features/brandSlice";
import categorySlice from "../features/categorySlice";

export const store = configureStore({
    reducer:{
        brand:brandDetails,
        // category:categorySlice
    }
})