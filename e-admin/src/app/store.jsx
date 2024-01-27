import {configureStore} from "@reduxjs/toolkit";
import brandDetails  from "../features/brandSlice";

import couponSlice from "../features/coupon/couponSlice";

export const store = configureStore({
    reducer:{
        brand:brandDetails,
        
        coupon:couponSlice
    }
})