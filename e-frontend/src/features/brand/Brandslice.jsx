import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandeService from "./Brandservice";

export const brandGets = createAsyncThunk(
  "auth/brand/get",
  async (_, thunkApi) => {
    try {
      const response = await brandeService.brandGet();
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const categoryGetData = createAsyncThunk(
  "auth/categoryGet",
  async (_, thunkApi) => {
    try {
      const response = await brandeService.categoryGet();

      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);


const initialState = {
  isError: false,
  isSuccess: false,
  isLoader: true,
  isMessage: "",
  Getbrand: [],
  Getcategory:[]
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(brandGets.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(brandGets.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = action.payload?.status;
        state.Getbrand = action.payload;
      })

      .addCase(brandGets.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.isMessage = action.error;
      })
      .addCase(categoryGetData.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(categoryGetData.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = action.payload?.status;
        state.Getcategory = action.payload;
      })

      .addCase(categoryGetData.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.isMessage = action.error;
      });
  },
});

export default brandSlice.reducer;
