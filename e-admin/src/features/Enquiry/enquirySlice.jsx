import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Enquiries from "./enquiryService";
import { toast } from "react-toastify";

export const Reset_all = createAction("Reset_all");

export const Postenquiry = createAsyncThunk(
  "auth/enq/enqpost",
  async (enq, thunkApi) => {
    try {
      const response = await Enquiries.Createenquiry(enq);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const Getenquirys = createAsyncThunk(
  "auth/enq/enqget",
  async (_,thunkApi) => {
    try {
      const response = await Enquiries.Getenquiry();
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const Getone = createAsyncThunk("auth/enq/getone", async (data,thunkApi) => {
  try {
    const response = await Enquiries.GetoneEnquiry(data);
    return response;
  } catch (err) {
    toast.error(err?.response?.data?.message);
    return thunkApi.rejectWithValue(err);
  }
});

export const DeleteEnquiry = createAsyncThunk(
  "auth/enq/deleteenq",
  async (_,thunkApi) => {
    try {
      const response = await Enquiries.DeleteEnquiry(data);
      return response;
    } catch {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const Patchenquiry = createAsyncThunk(
  "auth/enq/patchenq",
  async (enq, thunkApi) => {
    try {
      const response = await Enquiries.Patchenquiry(enq);
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
};
export const EnquiryDetail = createSlice({
  name: "enq",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //add
      .addCase(Postenquiry.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(Postenquiry.fulfilled, (state, action) => {
        state.isLoader = false;
        state.isSuccess = true;
        state.isError = false;
        state.Createenquiry = action.payload;
      })

      .addCase(Postenquiry.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
        state.message = action.error;
        state.isSuccess = false;
      })

      // get
      .addCase(Getenquirys.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(Getenquirys.fulfilled, (state, action) => {
        state.isLoader = false;
        state.isSuccess = true;
        state.isError = false;
        state.Getenquirys = action.payload;
      })
      .addCase(Getenquirys.rejected, (state, action) => {
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
      .addCase(DeleteEnquiry.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(DeleteEnquiry.fulfilled, (state, action) => {
        state.isLoader = false;
        state.isError = false;
        state.message = action.error;
        state.isSuccess = true;
      })
      .addCase(DeleteEnquiry.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
        state.message = action.error;
        state.isSuccess = false;
      })
      .addCase(Patchenquiry.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(Patchenquiry.fulfilled, (state, action) => {
        state.isLoader = false;
        state.isError = false;
        state.createCategories = action.payload;
        state.isSuccess = true;
      })
      .addCase(Patchenquiry.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
        state.message = action.error;
        state.isSuccess = false;
      });
  },
});
export default EnquiryDetail.reducer;
