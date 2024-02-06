import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

export const resetState = createAction("Reset_all");

export const postProductOnServer = createAsyncThunk(
  "product/post",
  async (product, thunkAPI) => {
    try {
      const response = await productService.productPost(product);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllProduct = createAsyncThunk(
  "product/get",
  async (_, thunkAPI) => {
    try {
      const response = await productService.productGetAll();
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  "product/one",
  async (data, thunkAPI) => {
    try {
      const response = await productService.productOne(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const shopData = createAsyncThunk(
  "shop/product",
  async (_, thunkApi) => {
    try {
      const response = await productService.getAllShop();
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const productUpdateOnServer = createAsyncThunk(
  "product/update",
  async (data, thunkAPI) => {
    try {
      const response = await productService.productUpdate(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProductOnServer = createAsyncThunk(
  "product/delete",
  async (data, thunkAPI) => {
    try {
      const response = await productService.productDelete(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  getAllproduct: [],
  getAllShopProduct: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postProductOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postProductOnServer.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(postProductOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.getAllproduct = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getOneProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.getProduct = action.payload;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(productUpdateOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(productUpdateOnServer.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.updatedProduct = action.payload;
      })
      .addCase(productUpdateOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      })
      .addCase(deleteProductOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProductOnServer.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.deletedProduct = action.payload;
      })
      .addCase(deleteProductOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      })
      .addCase(shopData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(shopData.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.getAllShopProduct = action.payload.shopData;
      })
      .addCase(shopData.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      })

      .addCase(resetState, () => initialState);
  },
});

export default productSlice.reducer;
