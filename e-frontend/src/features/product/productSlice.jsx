import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

export const resetAll = createAction("Reset_all");

export const getAllProduct = createAsyncThunk(
  "product/all",
  async (data, thunkAPI) => {
    try {
      const response = await productService.getProduct(data);
      return response.getAllProducts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  "product/one",
  async (id, thunkAPI) => {
    try {
      const response = await productService.getProduct(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isError: false,
  isSuccess: false,
  message: "",
  isLoader: false,
  wholeProduct: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
        state.wholeProduct = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getOneProduct.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
        state.oneProduct = action.payload;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});



export default productSlice.reducer;