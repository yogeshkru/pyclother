import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/usersSlice";
import productSlice from "../features/product/productSlice";
import querySlice from "../features/enquery/enqSlice";
export const store = configureStore({
  reducer: {
    users:usersSlice,
    product:productSlice,
    query:querySlice

  },
});
