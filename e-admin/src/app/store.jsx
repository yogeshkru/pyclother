import {configureStore} from "@reduxjs/toolkit";
import brandDetails  from "../features/brandSlice";
import categorySlice from "../features/category/categorySlice";
import couponSlice from "../features/coupon/couponSlice";
import productSlice from "../features/product/productSlice";
import superAdminSlice from "../features/SuperAdmin/superAdminSlice";
import colorSlice from "../features/color/colorSlice";
import shopSlice from "../features/shop/shopSlice";
import Gst from "../features/Gst/gstSlice";
import uploadImagesSlice from "../features/uploadImages/uploadImagesSlice"
import enquirySlice from "../features/Enquiry/enquirySlice";
import eventSlice from "../features/events/eventSlice";
import privacyPolicySlice  from "../features/Privacypolicy/Privarypolicyslice";
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
    upload:uploadImagesSlice,
    enquiry:enquirySlice,
    event:eventSlice,
    privacy:privacyPolicySlice

  },
});
