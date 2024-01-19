import { configureStore } from "@reduxjs/toolkit";
import authAdminSlice from "../features/adminSlice";

export const store = configureStore({
  reducer: {
    adminauth: authAdminSlice,
  },
});
