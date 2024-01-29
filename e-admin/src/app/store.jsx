import { configureStore } from "@reduxjs/toolkit";
import brandDetails from "../features/brandSlice";
import couponSlice from "../features/coupon/couponSlice";
import productSlice from "../features/product/productSlice";
import superAdminSlice from "../features/SuperAdmin/superAdminSlice";
export const store = configureStore({
<<<<<<< HEAD
    reducer:{
        brand:brandDetails,
        // category:categorySlice
    }
})
=======
  reducer: {
    brand: brandDetails,
    coupon: couponSlice,
    product: productSlice,
    superadmin: superAdminSlice,
  },
});
>>>>>>> 1d011f8e6951f6812d2fe36031bb4e141fc5caf9
