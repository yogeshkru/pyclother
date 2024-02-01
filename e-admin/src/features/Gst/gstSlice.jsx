import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Gst from "./gstService"
import { toast } from "react-toastify";

export const Reset_all = createAction("Reset_all");


export const Postgst = createAsyncThunk(
    "auth/gst/gstpost",
    async (gst, thunkApi) => {
        try {
            const response = await Gst.CreateGst(gst);
            return response;
        } catch (err) {
            toast.error(err?.response?.data?.message);
            return thunkApi.rejectWithValue(err);
        }
    }
);
export const Getgst = createAsyncThunk(
    "auth/gst/gstget",
    async (_, thunkApi) => {
        try {
            const response = await Gst.getGst();
            return response;
        } catch (err) {
            toast.error(err?.response?.data?.message);
            return thunkApi.rejectWithValue(err);
        }
    }
);
export const Getone = createAsyncThunk("auth/gst/onegst", async (data, thunkApi) => {
    try {
        const response = await Gst.gstOneGst(data);
        return response;
    } catch (err) {
        toast.error(err?.response?.data?.message);
        return thunkApi.rejectWithValue(err);
    }
});
export const DeleteGst = createAsyncThunk(
    "auth/gst/deletegst",
    async (data, thunkApi) => {
        try {
            const response = await Gst.deleteGst(data);
            return response;
        } catch {
            toast.error(err?.response?.data?.message);
            return thunkApi.rejectWithValue(err);
        }
    }
); 

export const PatchGst = createAsyncThunk(
    "auth/gst/patchgst",
    async (data, thunkApi) => {
      try {
        const response = await Gst.updateGst(data);
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
    message: "",
    isLoader: false,
    getGst:[]
  };

  export const GstDetail = createSlice({
    name: "gst",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        //add
        .addCase(Postgst.pending, (state, action) => {
          state.isLoader = true;
        })
        .addCase(Postgst.fulfilled, (state, action) => {
          state.isLoader = false;
          state.isSuccess = true;
          state.isError = false;
          state.CreateGst = action.payload;
        })
  
        .addCase(Postgst.rejected, (state, action) => {
          state.isLoader = false;
          state.isError = true;
          state.message = action.error;
          state.isSuccess = false;
        })
  
        // get
        .addCase(Getgst .pending, (state, action) => {
          state.isLoader = true;
        })
        .addCase(Getgst .fulfilled, (state, action) => {
          state.isLoader = false;
          state.isSuccess = true;
          state.isError = false;
          state.getGst = action.payload;
        })
        .addCase(Getgst .rejected, (state, action) => {
          state.isLoader = false;
          state.isError = true;
          state.message = action.error;
          state.isSuccess = false;
        })
        // getone
        .addCase(Getone.pending, (state, action) => {
          state.isLoader = true;
        })
        .addCase(Getone.fulfilled, (state, action) => {
          state.isLoader = false;
          state.isSuccess = true;
          state.isError = false;
          state.Getone = action.payload;
        })
        .addCase(Getone.rejected, (state, action) => {
          state.isLoader = false;
          state.isError = true;
          state.message = action.error;
          state.isSuccess = false;
        })
  
        // delete
        .addCase( DeleteGst.pending, (state, action) => {
          state.isLoader = true;
        })
        .addCase( DeleteGst.fulfilled, (state, action) => {
          state.isLoader = false;
          state.isError = false;
          state.message = action.error;
          state.isSuccess = true;
        })
        .addCase( DeleteGst.rejected, (state, action) => {
          state.isLoader = false;
          state.isError = true;
          state.message = action.error;
          state.isSuccess = false;
        })
        .addCase(PatchGst.pending, (state, action) => {
          state.isLoader = true;
        })
        .addCase(PatchGst.fulfilled, (state, action) => {
          state.isLoader = false;
          state.isError = false;
          state.createCategories = action.payload;
          state.isSuccess = true;
        })
        .addCase(PatchGst.rejected, (state, action) => {
          state.isLoader = false;
          state.isError = true;
          state.message = action.error;
          state.isSuccess = false;
        });
    },
  });

  export default GstDetail.reducer;