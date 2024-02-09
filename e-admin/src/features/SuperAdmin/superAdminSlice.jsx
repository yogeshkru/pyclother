import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import superAdminService from "./superAdminService";
import { toast } from "react-toastify";

export const resetAll = createAction("Reset_all");

export const createSuperAdminOnServer = createAsyncThunk(
  "super/create",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.createsuperAdminUser(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginAdminUserOnServer = createAsyncThunk(
  "super/login",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.loginsuperAdminUser(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const forgotPasswordUserAdmin = createAsyncThunk(
  "super/forgot",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.forgotsuperAdminUser(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetsuperAdminPasswordOnserver = createAsyncThunk(
  "super/reset",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.resetsuperAdminPassword(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// *************************Authenticate Route's **************************

export const updatesuperAuthPasswordOnServer = createAsyncThunk(
  "super/password",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.updatesuperAdminAuthPassword(
        data
      );

      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletesuperAdminUserOnServer = createAsyncThunk(
  "super/delete",
  async (_, thunkAPI) => {
    try {
      const response = await superAdminService.deletesuperAdminUser();
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updatesuperUserOnserServer = createAsyncThunk(
  "super/update-user",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.updatesuperAdminUser(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// ************************Authorized Routes's (User's Routes <BACKEND>)***************************

export const getUserFromServer = createAsyncThunk(
  "super/user/get",
  async (_, thunkAPI) => {
    try {
      const response = await superAdminService.getUsers();
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export let blockUserOnServer = createAsyncThunk(
  "super/user/block",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.blockUser(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export let unBlockUserOnServer = createAsyncThunk(
  "super/user/unblock",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.unblockUser(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export let getUserOnSever = createAsyncThunk(
  "super/user/getuser",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.getUser(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export let deletUserOnServer = createAsyncThunk(
  "super/user/delete",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.deleteUser(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// ********************Authorized Routes's(Admin Routes <BACKEND>)******************

export const createAdminWorkerOnServer = createAsyncThunk(
  "super/admin/create",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.createAdminWorker(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllAdminWorkerFromServer = createAsyncThunk(
  "super/admin/get",
  async (_, thunkAPI) => {
    try {
      const response = await superAdminService.getAllAdminWorker();
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAdminWorkderFromServer = createAsyncThunk(
  "super/admin/getOne",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.getAdminWorker(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const blockAdminWorkOnserver = createAsyncThunk(
  "super/admin/block",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.blockAdminWorkder(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const unblockAdminWorkOnServer = createAsyncThunk(
  "super/admin/unblock",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.unblockAdminWorker(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// ********************* Authorized Routes's(shop Routes <BACKEND>) *********************

export const allShopFromServer = createAsyncThunk(
  "super/shop/get",
  async (_, thunkAPI) => {
    try {
      const response = await superAdminService.allShop();
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export let unBlockShopOnServer = createAsyncThunk(
  "super/shop/unblock",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.unblockShop(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export let blockShopOnServer = createAsyncThunk(
  "super/shop/block",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.blockShop(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getShop = createAsyncThunk(
  "super/shop/getOne",
  async (data, thunkAPI) => {
    try {
      const response = await superAdminService.getShop(data);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  getAllUser:[]
};

export const superAdminSlice = createSlice({
  name: "superAdmin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSuperAdminOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSuperAdminOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.createdSuperAdmin = action.payload;
      })
      .addCase(createSuperAdminOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(loginAdminUserOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdminUserOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.superAdminLogin = action.payload;
      })
      .addCase(loginAdminUserOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(forgotPasswordUserAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPasswordUserAdmin.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.superForgotPassword = action.payload;
      })
      .addCase(forgotPasswordUserAdmin.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetsuperAdminPasswordOnserver.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetsuperAdminPasswordOnserver.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.superResetPassword = action.payload;
      })
      .addCase(resetsuperAdminPasswordOnserver.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updatesuperAuthPasswordOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatesuperAuthPasswordOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.superUpdateAuthPasswordd = action.payload;
      })
      .addCase(updatesuperAuthPasswordOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      })
      .addCase(deletesuperAdminUserOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletesuperAdminUserOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.superDeleteAccount = action.payload;
      })
      .addCase(deletesuperAdminUserOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      })
      .addCase(updatesuperUserOnserServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatesuperUserOnserServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.superDataUpdate = action.payload;
      })
      .addCase(updatesuperUserOnserServer.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      })
      .addCase(getUserFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserFromServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.getAllUser = action.payload?.allUser;
      })
      .addCase(getUserFromServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(blockUserOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(blockUserOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.blockUser = action.payload;
      })
      .addCase(blockUserOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(unBlockUserOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(unBlockUserOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.unBlockuser = action.payload;
      })
      .addCase(unBlockUserOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getUserOnSever.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserOnSever.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.getUser = action.payload;
      })
      .addCase(getUserOnSever.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deletUserOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletUserOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.deleteUser = action.payload;
      })
      .addCase(deletUserOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createAdminWorkerOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAdminWorkerOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.createdAdminUser = action.payload;
      })
      .addCase(createAdminWorkerOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAllAdminWorkerFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAdminWorkerFromServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.getAlladminUser = action.payload;
      })
      .addCase(getAllAdminWorkerFromServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAdminWorkderFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminWorkderFromServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.getAdminWorker = action.payload;
      })
      .addCase(getAdminWorkderFromServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(blockAdminWorkOnserver.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(blockAdminWorkOnserver.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.adminblocked = action.payload;
      })
      .addCase(blockAdminWorkOnserver.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.error;
      })
      .addCase(unblockAdminWorkOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(unblockAdminWorkOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.adminUnBlock = action.payload;
      })
      .addCase(unblockAdminWorkOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(allShopFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allShopFromServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.getAllShops = action.payload;
      })
      .addCase(allShopFromServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(unBlockShopOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(unBlockShopOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.unBlockShop = action.payload;
      })
      .addCase(unBlockShopOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(blockShopOnServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(blockShopOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.blockShop = action.payload;
      })
      .addCase(blockShopOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getShop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getShop.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.getShop = action.payload;
      })
      .addCase(getShop.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetAll, () => initialState);
  },
});

export default superAdminSlice.reducer;
