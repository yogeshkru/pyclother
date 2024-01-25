import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandeService from "./brandService";
import { toast } from "react-toastify";

export const resetAll = createAction("Reset_all");
//create
export const brandSignup = createAsyncThunk(
  "auth/brand",
  async (userData, thunkApi) => {
    try {
      const response = await brandeService.brandCreate(userData);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

//get

export const brandGets = createAsyncThunk("auth/get", async (thunkApi) => {
  try {
    const response = await brandeService.brandGet();
    return response;
  } catch (err) {
    toast.error(err?.response?.data?.message);
    return thunkApi.rejectWithValue(err);
  }
});

//patch

export const brandPatchs = createAsyncThunk(
  "auth/patch",
  async (userData, thunkApi) => {
    try {
      const response = await brandeService.brandPatch(userData);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);
//delete

export const brandDelete = createAsyncThunk(
  "auth/delete",
  async (userData, thunkApi) => {
    try {
      const response = await brandeService.brandDelete(userData);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

//find

export const brandFinds = createAsyncThunk(
    "auth/find",
    async (userData, thunkApi) => {
      try {
        const response = await brandeService.brandFind(userData);
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
  isLoader: false,
  isMessage: "",
};

export const brandDetails = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //create
    builder
      .addCase(brandSignup.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(brandSignup.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = action.payload?.status;

        if (state.isSuccess) {
          toast.success(action.payload?.message?.message);
        }
      })

      .addCase(brandSignup.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.isMessage = action.error;
      })

      //get
      .addCase(brandGets.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(brandGets.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = action.payload?.status;

        if (state.isSuccess) {
          toast.success(action.payload?.message?.message);
        }
      })

      .addCase(brandGets.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.isMessage = action.error;
      })

      //patch

      .addCase(brandPatchs.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(brandPatchs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = action.payload?.status;

        if (state.isSuccess) {
          toast.success(action.payload?.message?.message);
        }
      })

      .addCase(brandPatchs.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.isMessage = action.error;
      })


      //delete

      .addCase(brandDelete.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(brandDelete.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = action.payload?.status;

        if (state.isSuccess) {
          toast.success(action.payload?.message?.message);
        }
      })

      .addCase(brandDelete.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.isMessage = action.error;
      })

      //find

      .addCase(brandFinds.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(brandFinds.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = action.payload?.status;

        if (state.isSuccess) {
          toast.success(action.payload?.message?.message);
        }
      })

      .addCase(brandFinds.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.isMessage = action.error;
      })
      .addCase(resetAll,()=>initialState)
  },
});


export default brandDetails.reducer
