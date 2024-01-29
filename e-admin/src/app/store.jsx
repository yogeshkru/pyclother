import {configureStore} from "@reduxjs/toolkit";
import brandDetails  from "../features/brandSlice";
import categorySlice from "../features/category/categorySlice";
import couponSlice from "../features/coupon/couponSlice";
import productSlice from "../features/product/productSlice";
import superAdminSlice from "../features/SuperAdmin/superAdminSlice";
import shopSlice from "../features/shop/shopSlice";
export const store = configureStore({
  reducer: {
    brand: brandDetails,
    coupon: couponSlice,
    product: productSlice,
    superadmin: superAdminSlice,
    category:categorySlice,
    shop:shopSlice
  },
});
