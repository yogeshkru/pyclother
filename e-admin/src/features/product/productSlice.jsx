import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

export const resetState = createAction("Reset_all");

export const postProductOnServer = createAsyncThunk(
  "product/post",
  async (product, thunkAPI) => {
 
    try {
      const formData = new FormData();
      for (let i = 0; i < product?.images.length; i++) {
        formData.append("images", product?.images[i]);
      }

      formData.append("name", product?.name);
      formData.append("description", product?.description);
      formData.append("brand", product?.brand);
      formData.append("color", product?.color);

      formData.append("price", product?.price);
      formData.append("sku", product?.sku);
      formData.append("tag", product?.tag);
      formData.append("model", product?.model);
      formData.append("stack", product?.stack);
      formData.append("Gst", product?.Gst);
      formData.append("quantity", product?.quantity);
      formData.append("category", product?.category);
      formData.append("diamension_class", product?.diamension_class);
      formData.append("rewardpoint", product?.rewardpoint);
      formData.append("sort", product?.sort);
      formData.append("length", product?.length);
      formData.append("size", product?.size);
      formData.append("height", product?.height);
      formData.append("brether", product?.brether);
      formData.append("weight", product?.weight);

      formData.append("weight_class", product?.weight_class);

      formData.append("meta_title", product?.meta_title);

      formData.append("meta_description", product?.meta_description);
      formData.append("meta_keyboard", product?.meta_keyboard);

      const response = await productService.productPost(formData);
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
      thunkAPI.dispatch(getAllProduct());
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
      thunkAPI.dispatch(shopData());

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
      thunkAPI.dispatch(shopData());

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
  navigate_product:""
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
        state.navigate="product-navigate"
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
