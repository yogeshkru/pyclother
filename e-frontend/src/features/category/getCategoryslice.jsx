import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "./getCategory";
import { toast } from "react-toastify";
export const resetAll = createAction("reaetAll");

export const categoryGetData = createAsyncThunk(
  "auth/categoryGet",
  async (_, thunkApi) => {
    try {
      const response = await categoryService.categoryGet();

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
  categoryGet: [],
};
export const getCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Post
    builder

      //Get
      .addCase(categoryGetData.pending, (state, action) => {
        state.Loaders = true;
      })
      .addCase(categoryGetData.fulfilled, (state, action) => {
        state.Success = true;
        state.Error = false;
        state.Loaders = false;
        state.categoryGet = action.payload?.categorieget;
      })
      .addCase(categoryGetData.rejected, (state, action) => {
        state.Error = true;
        state.Loaders = false;
        state.Success = false;
        state.Message = action.error;
      })

      .addCase(resetAll, () => initialState);
  },
});

export default getCategorySlice.reducer;
