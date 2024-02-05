import {configureStore} from "@reduxjs/toolkit";
import brandDetails  from "../features/brandSlice";
import categorySlice from "../features/category/categorySlice";
import couponSlice from "../features/coupon/couponSlice";
import productSlice from "../features/product/productSlice";
import superAdminSlice from "../features/SuperAdmin/superAdminSlice";
import colorSlice from "../features/color/colorSlice";
import shopSlice from "../features/shop/shopSlice";
import Gst from "../features/Gst/gstSlice";
<<<<<<< HEAD
import uploadImagesSlice from "../features/uploadImages/uploadImagesSlice";;
=======
import uploadImagesSlice from "../features/uploadImages/uploadImagesSlice"
>>>>>>> 4a4e520a37268963453ff43be9a35c0916157d73
export const store = configureStore({
  reducer: {
    brand: brandDetails,
    coupon: couponSlice,
    product: productSlice,
    superadmin: superAdminSlice,
    color: colorSlice,
    category:categorySlice,
    shop:shopSlice,
    gst:Gst,
<<<<<<< HEAD
    uploadimage:uploadImagesSlice
=======
    upload:uploadImagesSlice

>>>>>>> 4a4e520a37268963453ff43be9a35c0916157d73
  },
});
