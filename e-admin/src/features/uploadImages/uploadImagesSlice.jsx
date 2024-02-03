import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import updloadImageService from "./uploadImagesService";
import { toast } from "react-toastify";

export const resetAll = createAction("Reset_all");

export const bannerImageUploadOnServer = createAsyncThunk(
  "upload/banner/image",
  async (data, thunkAPI) => {
    try {
      const response = await updloadImageService.uploadImages(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const uploadProductImageOnServer = createAsyncThunk(
  "upload/image",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < data.length; i++) {
        formData.append("images", data[i]);
      }
      const response = await updloadImageService.uploadProductImage(formData);
      return response.urls;
    } catch (error) {
      return thunkAPI.rejectWithValue(value)
    }
  }
);

const initialState = {
  isError: false,
  isSuccess: false,
  isLoader: false,
  message: "",
};

export const imageSlice = createSlice({
  name: "uploadimage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bannerImageUploadOnServer.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(bannerImageUploadOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoader = false;
        state.bannerImage = action.payload;
      })
      .addCase(bannerImageUploadOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(uploadProductImageOnServer.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(uploadProductImageOnServer.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
        state.productImage = action.payload;
      })
      .addCase(uploadProductImageOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.error;
        console.log(state.message)
      })
      .addCase(resetAll, () => initialState);
  },
});

export default imageSlice.reducer;
