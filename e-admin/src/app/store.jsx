import { configureStore } from "@reduxjs/toolkit";
import brandDetails from "../features/brandSlice";
import couponSlice from "../features/coupon/couponSlice";
import productSlice from "../features/product/productSlice";
import superAdminSlice from "../features/SuperAdmin/superAdminSlice";
import colorSlice from "../features/color/colorSlice";
export const store = configureStore({
  reducer: {
    brand: brandDetails,
    coupon: couponSlice,
    product: productSlice,
    superadmin: superAdminSlice,
    color: colorSlice,
  },
});
