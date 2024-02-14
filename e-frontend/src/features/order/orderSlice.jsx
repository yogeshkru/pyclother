import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "./orderService";
import { toast } from "react-toastify";

export const Reset_all = createAction("Reset_all");

export const postOrder = createAsyncThunk(
  "user/order/post",
  async (data, thunkApi) => {
    try {
      const response = await orderService.createOrder(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  isError: false,
  isSuccess: false,
  message: "",
  isLoader: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.isLoader = false;
        state.isSuccess = true;
        state.isError = false;
        state.createdOrder = action.payload;
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
        state.message = action.error;
        state.isSuccess = false;
      });
  },
});

export default orderSlice.reducer;
