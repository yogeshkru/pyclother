import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import addressDetails from "./deliveryService";
import { toast } from "react-toastify";

export const resetAll = createAction("Reset_all");

export const PostAddress = createAsyncThunk(
  "auth/address/addpost",
  async (address, thunkApi) => {
    try {
      const response = await addressDetails.createAddress(address);
      // thunkApi.dispatch(getUserAddress())

      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const getUserAddress = createAsyncThunk(
  "auth/cart/getcart",
  async (_, thunkApi) => {
    try {
      const response = await addressDetails.getUserAddressFromServer();
      return response.addressFind;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const deleteUserAddress = createAsyncThunk(
  "auth/address/delete",
  async (id, thunkApi) => {
    try {
      const response = await addressDetails.deleteAddress(id);
      // thunkApi.dispatch(getUserAddress())
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const PatchUserAddress = createAsyncThunk(
    "auth/address/patch",
    async (id, thunkApi) => {
      try {
        const response = await addressDetails.patchAddress(id);
        // thunkApi.dispatch(getUserAddress())
        return response;
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );

const initialState = {
  Error: false,
  Success: false,
  message: "",
  loaders: false,

  createAddress: {},
  getUserAddressSuccess: "",
  userAddress: [],
};

export const addressSlice = createSlice({
  name: "address",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(PostAddress.pending, (state, action) => {
        state.loaders = true;
      })
      .addCase(PostAddress.fulfilled, (state, action) => {
        (state.loaders = false),
          (state.Error = false),
          (state.Success = true),
          (state.createAddress = action.payload);

        if (state.Success) {
          toast.success("address added successfully");
        }
      })
      .addCase(PostAddress.rejected, (state, action) => {
        state.Error = true;
        state.Success = false;
        state.loaders = false;
        state.message = action.error;
      })
      .addCase(getUserAddress.pending, (state, action) => {
        state.loaders = true;
      })
      .addCase(getUserAddress.fulfilled, (state, action) => {
        (state.loaders = false), (state.Error = false), (state.Success = true);
        (state.userAddress = action.payload),
          (state.getUserAddressSuccess = "userAddressSuccess");
      })
      .addCase(getUserAddress.rejected, (state, action) => {
        state.Error = true;
        state.Success = false;
        state.loaders = false;
        state.message = action.error;
      })
      .addCase(deleteUserAddress.pending, (state) => {
        state.loaders = true;
      })
      .addCase(deleteUserAddress.fulfilled, (state) => {
        state.loaders = false;
        state.Error = false;
        state.Success = true;
      })
      .addCase(deleteUserAddress.rejected, (state, action) => {
        state.loaders = false;
        state.Error = true;
        state.Success = false;
        state.message = action.error;
      })

      .addCase(PatchUserAddress.pending, (state) => {
        state.loaders = true;
      })
      .addCase(PatchUserAddress.fulfilled, (state) => {
        state.loaders = false;
        state.Error = false;
        state.Success = true;
      })
      .addCase(PatchUserAddress.rejected, (state, action) => {
        state.loaders = false;
        state.Error = true;
        state.Success = false;
        state.message = action.error;
      })
      .addCase(resetAll, () => initialState);
  },
});

export default addressSlice.reducer;
