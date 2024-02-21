import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ordergetOrder  from "./Orderservice";

export const orderdetailsGets = createAsyncThunk(
  "auth/order",
  async (_, thunkApi) => {
    try {
      const responsive = ordergetOrder.ordergetOrder();
      return responsive;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

const initialState = {
  success: false,
  loader: false,
  error: false,
  ordergetallorders: [],
};

export const OrderGetSlice = createSlice({
  name: "orderget",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(orderdetailsGets.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(orderdetailsGets.fulfilled, (state, action) => {
        state.loader = false;
        state.error = false;
        state.success = true;
        state.ordergetallorders = action.payload.orders;
      })
      .addCase(orderdetailsGets.rejected, (state, action) => {
        state.loader = false;
        state.error = true;
        state.success = false;
      });
  },
});

export default OrderGetSlice.reducer;
