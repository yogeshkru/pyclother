import { configureStore } from "@reduxjs/toolkit";
import authAdminSlice from "../features/adminSlice";
import usersSlice from "../features/usersSlice";
export const store = configureStore({
  reducer: {
    adminauth: authAdminSlice,
    users:usersSlice
  },
});
