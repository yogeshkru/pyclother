import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";
import Coupondetails from "./couponservice";
import { toast } from "react-toastify";

export const resetAll = createAction("reset_all");

export const couponPostData = createAsyncThunk(
  "auth/coupon/post",
  async (data, thunkApi) => {
    try {
      const response = await Coupondetails.couponPost(data);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const Categoryget = createAsyncThunk(
  "auth/get",
  async (_,thunkApi) => {
    try {
      const response = await Coupondetails.couponGet();
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);


export const couponPatchData = createAsyncThunk(
  "auth/coupon/patch",
  async (data, thunkApi) => {
    try {
      const response = await Coupondetails.couponPatch(data);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const couponFindData = createAsyncThunk(
  "auth/coupon/findone",
  async (data, thunkApi) => {
    try {
      const response = await Coupondetails.couponFind(data);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const couponDeletes = createAsyncThunk(
  "auth/coupon/delete",
  async (data, thunkApi) => {
    try {
      const response = await Coupondetails.couponDelete(data);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const initialState = {
  Error: false,
  Success: false,
  Message: "",
  Loaders: false,
  couponGet: [],
  couponPatch: {},
  couponDelete: undefined,
  couponFind: undefined,
};
export const CouponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Post
    builder
      .addCase(couponPostData.pending, (state, action) => {
        state.Loaders = true;
      })
      .addCase(couponPostData.fulfilled, (state, action) => {
        state.Success = true;
        state.Error = false;
        state.Loaders = false;
      })
      .addCase(couponPostData.rejected, (state, action) => {
        state.Error = true;
        state.Loaders = false;
        state.Success = false;
        state.Message = action.error;
      })

      //Get
      .addCase(Categoryget.pending, (state, action) => {
        state.Loaders = true;
      })
      .addCase(Categoryget.fulfilled, (state, action) => {
        state.Success = true;
        state.Error = false;
        state.Loaders = false;
        state.couponGet = action.payload;
      })
      .addCase(Categoryget.rejected, (state, action) => {
        state.Error = true;
        state.Loaders = false;
        state.Success = false;
        state.Message = action.error;
      })

      //Patch

      .addCase(couponPatchData.pending, (state, action) => {
        state.Loaders = false;
      })
      .addCase(couponPatchData.fulfilled, (state, action) => {
        state.Loaders = false;
        state.Error = false;
        state.Success = true;
        state.couponPatch = action.payload;
      })
      .addCase(couponPatchData.rejected, (state, action) => {
        state.Error = true;
        state.Loaders = false;
        state.Success = false;
        state.Message = action.error;
      })

      //Delete

      .addCase(couponDeletes.pending, (state, action) => {
        state.Loaders = false;
      })
      .addCase(couponDeletes.fulfilled, (state, action) => {
        state.Loaders = false;
        state.Error = false;
        state.Success = true;
        state.couponDelete = action.payload;
      })
      .addCase(couponDeletes.rejected, (state, action) => {
        state.Error = true;
        state.Loaders = false;
        state.Success = false;
        state.Message = action.error;
      })

      //Find
      .addCase(couponFindData.pending, (state, action) => {
        state.Loaders = false;
      })
      .addCase(couponFindData.fulfilled, (state, action) => {
        state.Loaders = false;
        state.Error = false;
        state.Success = true;
        state.couponFind = action.payload;
      })
      .addCase(couponFindData.rejected, (state, action) => {
        state.Error = true;
        state.Loaders = false;
        state.Success = false;
        state.Message = action.error;
      })

      .addCase(resetAll, () => initialState);
  },
});

export default CouponSlice.reducer;
