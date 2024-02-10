import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/usersSlice";
import productSlice from "../features/product/productSlice";
import querySlice from "../features/enquery/enqSlice";
import StepperSlice from "../features/stepper/StepperSlice";
export const store = configureStore({
  reducer: {
    users:usersSlice,
    product:productSlice,
    query:querySlice,
    step:StepperSlice

  },
});
