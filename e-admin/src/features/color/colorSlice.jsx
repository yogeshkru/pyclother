import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import colordata from "./colorService";
import { toast } from "react-toastify";
export const resetAll = createAction("reset_All");

//CREATE
export const createColor = createAsyncThunk(
  "color/create",
  async (userData, thunkApi) => {
    try {
      const response = await colordata.colorCreate(userData);
     
      thunkApi.dispatch(colorgets()); 

      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

//GET
export const colorgets = createAsyncThunk("color/get", async (_, thunkApi) => {
  try {
    const response = await colordata.colorGet();
    return response;
  } catch (err) {
    toast.error(err?.response?.data?.message);
    return thunkApi.rejectWithValue(err);
  }
});

//PATCH

export const colorpatch = createAsyncThunk(
  "colot/patch",
  async (data, thunkApi) => {
    try {
      const response = await colordata.colorPatch(data);
      thunkApi.dispatch(colorgets()); 
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

//delete

export const colorDelete = createAsyncThunk(
  "colot/delete",
  async (data, thunkApi) => {
    try {
      const response = await colordata.colordelete(data);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

//find

export const colorFinds = createAsyncThunk(
  "color/find",
  async (data, thunkApi) => {
    try {
      const response = await colordata.colorfind(data);
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
  isLoading: false,
  message: "",
  getAllColor:[]
};

export const ColorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createColor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createColor.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.createColor = action.payload;
        if(state.isSuccess){
          toast.success("Color Added")
        }
      })
      .addCase(createColor.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(colorgets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(colorgets.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.getAllColor = action.payload.colorAllget;
      })
      .addCase(colorgets.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(colorpatch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(colorpatch.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        if(state.isSuccess){
          toast.success("Update Color")
        }
      })
      .addCase(colorpatch.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(colorDelete.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(colorDelete.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        
        if(state.isSuccess){
          toast.error("Deleted Color")
        }
      })
      .addCase(colorDelete.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(colorFinds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(colorFinds.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.colorFinds = action.payload;
      })
      .addCase(colorFinds.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isLoading = false;
        state.message = action.error;
      })
      .addCase(resetAll, () => initialState);
  },
});

export default ColorSlice.reducer;
