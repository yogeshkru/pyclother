import {configureStore} from "@reduxjs/toolkit";
import brandDetails  from "../features/brandSlice";
import categorySlice from "../features/categorySlice";
import couponSlice from "../features/coupon/couponSlice";

export const store = configureStore({
    reducer:{
        brand:brandDetails,
        category:categorySlice,
        coupon:couponSlice
    }
})