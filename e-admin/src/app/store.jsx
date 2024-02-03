import {configureStore} from "@reduxjs/toolkit";
import brandDetails  from "../features/brandSlice";
import categorySlice from "../features/category/categorySlice";
import couponSlice from "../features/coupon/couponSlice";
import productSlice from "../features/product/productSlice";
import superAdminSlice from "../features/SuperAdmin/superAdminSlice";
import colorSlice from "../features/color/colorSlice";
import shopSlice from "../features/shop/shopSlice";
import gstSlice from "../features/Gst/gstSlice";
import uploadImagesSlice from "../features/uploadImages/uploadImagesSlice";
export const store = configureStore({
  reducer: {
    brand: brandDetails,
    coupon: couponSlice,
    product: productSlice,
    superadmin: superAdminSlice,
    color: colorSlice,
    category:categorySlice,
    shop:shopSlice,
    gst:gstSlice,
    updload:uploadImagesSlice
  },
});
