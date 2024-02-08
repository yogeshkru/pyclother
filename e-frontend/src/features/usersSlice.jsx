import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import usersService from "./usersService";
import { toast } from "react-toastify";
export const resetAll = createAction("Reset_all");

//signup
export const usersSignup = createAsyncThunk(
  "auth/user",
  async (userData, thunApi) => {
    try {
      const response = await usersService.userRegister(userData);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunApi.rejectWithValue(err);
    }
  }
);

//login 
export const userLogin = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      const response = await usersService.userLogin(userData);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

//forget
export const userForget = createAsyncThunk(
  "auth/forget",
  async (userData, thunkApi) => {
    try {
      const response = await usersService.userForget(userData);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

// Reset

export const userResetAPI = createAsyncThunk(
  "auth/reset",
  async (token, thunkApi) => {
    try {
      const response = await usersService.userReset(token);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkApi.rejectWithValue(error);
    }
  }
);

//userupdate
export const userUpdates = createAsyncThunk(
  "auth/update",
  async (token, thunkApi) => {
    try {
      const response = await usersService.userUpdate(token);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

//userdeleteme
export const userdeleteme = createAsyncThunk(
  "auth/deleteme",
  async (token, thunkApi) => {
    try {
      const response = await usersService.userdeleteme(token);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const inintialState = {
  Error: false,
  Success: false,
  message: "",
  loaders: false,
  createUser:{}
};


export const usersSlice = createSlice({
  name: "user",
  initialState: inintialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(usersSignup.pending, (state, action) => {
        state.loaders = true;
      })
      .addCase(usersSignup.fulfilled, (state, action) => {
        state.Error = false;
        state.loaders = false;
        state.Success = action.payload?.status;
        state.createUser = action.payload;

        if (state.Success) {
          toast.success(action.payload?.message?.message);
        }
      })
      .addCase(usersSignup.rejected, (state, action) => {
        state.Error = true;
        state.Success = false;
        state.loaders = false;
        state.message = action.error;
      })
      .addCase(userLogin.pending, (state, action) => {
        state.loaders = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.Error = false;
        state.Success = action.payload.message.message;
        state.loaders = false;
        state.createLogin = action.payload;

        if (state.Success) {
          toast.success(action.payload?.message?.message);
        }
      })

      .addCase(userLogin.rejected, (state, action) => {
        state.Error = true;
        state.loaders = false;
        state.Success = false;
        state.message = action.error;
      })

      //forget
      .addCase(userForget.pending, (state, action) => {
        state.loaders = true;
      })
      .addCase(userForget.fulfilled, (state, action) => {
        state.loaders = false;
        state.Error = false;
        state.Success = action.payload?.status;
        state.userForget = action.payload;

        if (state.Success) {
          toast.success(action.payload?.message);
        }
      })

      .addCase(userForget.rejected, (state, action) => {
        state.Error = true;
        state.Success = false;
        state.loaders = false;
        state.message = action.error;
      })
      .addCase(userResetAPI.pending, (state) => {
        state.loaders = true;
      })
      .addCase(userResetAPI.fulfilled, (state, action) => {
        state.loaders = false;
        state.Error = false;
        state.Success = true;
        state.userReset = action.payload;
      })
      .addCase(userResetAPI.rejected, (state, action) => {
        state.Error = true;
        state.Success = false;
        state.loaders = false;
        state.message = action.error;
      })
      .addCase(userUpdates.pending, (state) => {
        state.loaders = true;
      })
      .addCase(userUpdates.fulfilled, (state, action) => {
        state.loaders = false;
        state.Error = false;
        state.Success = action.payload?.status;
        state.userForget = action.payload;

        if (state.Success) {
          toast.success(action.payload?.message);
        }
      })
      .addCase(userUpdates.rejected, (state, action) => {
        state.Error = true;
        state.Success = false;
        state.loaders = false;
        state.message = action.error;
      })
      .addCase(userdeleteme.pending, (state) => {
        state.loaders = true;
      })

      .addCase(userdeleteme.fulfilled, (state, action) => {
        state.loaders = false;
        state.Error = false;
        state.Success = action.payload?.status;
        state.userForget = action.payload;

        if (state.Success) {
          toast.success(action.payload?.message);
        }
      })

      .addCase(userdeleteme.rejected, (state, action) => {
        state.Error = true;
        state.Success = false;
        state.loaders = false;
        state.message = action.error;
      })
      
      .addCase(resetAll, () => inintialState);
  },
});

export default usersSlice.reducer;
