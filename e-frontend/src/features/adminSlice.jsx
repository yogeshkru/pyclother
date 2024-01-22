import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";
import { toast } from "react-toastify";
export const resetState = createAction("Reset_all");

export const registerAdminUser = createAsyncThunk(
  "auth/adminregister",
  async (userData, thunkAPI) => {
    try {
      const response = await adminService.register(userData);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const activateNewAdminUser = createAsyncThunk(
  "auth/adminactivate",
  async (userToken, thunkAPI) => {
    try {
      const response = await adminService.activationToken(userToken);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const adminLogout = createAsyncThunk(
  "auth/adminlogout",
  async (thunkAPI) => {
    try {
      const response = await adminService.adminLogout();
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(asyncErrorhandler);
    }
  }
);

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authAdminSlice = createSlice({
  name: "adminauth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAdminUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerAdminUser.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false;
        state.isSuccess = true;
        state.createUser = action.payload;
      })
      .addCase(registerAdminUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(activateNewAdminUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(activateNewAdminUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.activateNewAdmin = true;
      })
      .addCase(activateNewAdminUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      })
      .addCase(adminLogout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adminLogout.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.userLogout = action.payload;
      })
      .addCase(adminLogout.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default authAdminSlice.reducer;
