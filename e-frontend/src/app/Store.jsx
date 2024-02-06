import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/usersSlice";
import productSlice from "../features/product/productSlice";
export const store = configureStore({
  reducer: {
    users:usersSlice,
    product:productSlice
  },
});
