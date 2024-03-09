import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/usersSlice";
import productSlice from "../features/product/productSlice";
import querySlice from "../features/enquery/enqSlice";
import StepperSlice from "../features/stepper/StepperSlice";
import userAddress from "../features/deliveryDetails/deliverySlice";
import getCategoryslice from "../features/category/getCategoryslice";
import Brandslice from "../features/brand/Brandslice";
export const store = configureStore({
  reducer: {
    users:usersSlice,
    product:productSlice,
    query:querySlice,
    step:StepperSlice,
    userAddress:userAddress,
    category:getCategoryslice,
    brand:Brandslice
  },
});
