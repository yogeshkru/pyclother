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

      thunApi.dispatch(getAllUserFromServer());
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
      thunkApi.dispatch(getAllUserFromServer());
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
      thunkApi.dispatch(getAllUserFromServer());
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
      thunkApi.dispatch(getAllUserFromServer());
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
      thunkApi.dispatch(getAllUserFromServer());
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
      thunkApi.dispatch(getAllUserFromServer());
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const getAllUserFromServer = createAsyncThunk(
  "auth/getall-user",
  async (_, thunkApi) => {
    try {
      const response = await usersService.getAllUser();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// ***********************************Add To Cart*************************

export const addUserProductToServer = createAsyncThunk(
  "auth/addtocart",
  async (product, thunkApi) => {
    try {
      const response = await usersService.addToUserCart(product);
      if (response) {
        thunkApi.dispatch(getUserCartProductFromServer());
        return response;
      }
    } catch (error) {
      toast.error(err?.response?.data?.message);

      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getUserCartProductFromServer = createAsyncThunk(
  "autj/get-user-cart",
  async (_, thunkApi) => {
    try {
      const response = await usersService.getUserCartProduct();
      if (response) {
        return response.cart;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateUserCartProductQuantity = createAsyncThunk(
  "auth/user-cart/update",
  async (data, thunApi) => {
    try {
      const response = await usersService.userCartQuantity(data);
      thunApi.dispatch(getUserCartProductFromServer());
      if (response) {
        return response;
      }
    } catch (error) {
      return thunApi.rejectWithValue(error);
    }
  }
);

export const userCartDeleteProductFromServer = createAsyncThunk(
  "auth/user-delete/cart",
  async (id, thunkApi) => {
    try {
      const response = await usersService.userCartDelete(id);
      thunkApi.dispatch(getUserCartProductFromServer());
      if (response) {
        return response;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getUserProfileOnServer = createAsyncThunk(
  "auth/get-user-profile",
  async (_, thunkApi) => {
    try {
      const response = await usersService.getUserProfile();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
//Wishlist post
export const wishListPostData = createAsyncThunk(
  "auth/whislistPost",
  async (userData, thunkApi) => {
    try {
      const response = await usersService.wishListPost(userData);
      thunkApi.dispatch(wishListGetData());
      return response;
    } catch (err) {
      toast.error(err?.response?.message?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const wishListGetData = createAsyncThunk(
  "auth/whislistGet",
  async (_, thunkApi) => {
    try {
      const response = await usersService.wishListGet();

      thunkApi.dispatch(getAllUserFromServer());
      return response;
    } catch (err) {
      toast.error(err?.response?.message?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const inintialState = {
  Error: false,
  Success: false,
  signupData: "",
  message: "",
  loaders: false,
  createUser: "",
  userSignSuccess: "",
  loginUser: "",
  userCartProduct: [],
  userUpdatedetails: {},
  userProfile: {},
  userCartProduct: [],
  Whislistget: [],
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
        state.userSignSuccess = "signupSuccess";

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

        state.loginUser = action.payload;

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
      .addCase(addUserProductToServer.pending, (state) => {
        state.loaders = false;
      })
      .addCase(addUserProductToServer.fulfilled, (state, action) => {
        state.loaders = false;
        state.Error = false;
        state.Success = true;
        state.userCartAdded = action.payload;
      })
      .addCase(addUserProductToServer.rejected, (state, action) => {
        state.Error = true;
        state.Success = false;
        state.loaders = false;
        state.message = action.error;
      })
      .addCase(getUserCartProductFromServer.pending, (state) => {
        state.loaders = false;
      })
      .addCase(getUserCartProductFromServer.fulfilled, (state, action) => {
        state.loaders = false;
        state.Error = false;
        state.Success = true;
        state.userCartProduct = action.payload;
      })
      .addCase(getUserCartProductFromServer.rejected, (state, action) => {
        state.Error = true;
        state.Success = false;
        state.loaders = false;
        state.message = action.error;
      })
      .addCase(updateUserCartProductQuantity.pending, (state) => {
        state.loaders = false;
      })
      .addCase(updateUserCartProductQuantity.fulfilled, (state, action) => {
        state.Success = true;
        state.loaders = false;
        state.Error = false;
      })
      .addCase(updateUserCartProductQuantity.rejected, (state, action) => {
        state.Error = true;
        state.loaders = false;
        state.Success = false;
        state.message = action.error;
      }).addCase(userCartDeleteProductFromServer.pending,(state)=>{
        state.loaders=false
      }).addCase(userCartDeleteProductFromServer.fulfilled,(state)=>{
        state.Success=true;
        state.loaders=false;
        state.Error=false
      }).addCase(userCartDeleteProductFromServer.rejected,(state,action)=>{
        state.Error=true;
        state.loaders=false;
        state.Error=true;
        state.message=action.error
      }).addCase(getUserProfileOnServer.pending, (state) => {
        state.loaders = true;
      })
      .addCase(getUserProfileOnServer.fulfilled, (state, action) => {
        state.Error = false;
        state.Success = true;
        state.loaders = false;
        state.userProfile = action.payload.data.user;
      })
      .addCase(getUserProfileOnServer.rejected, (state, action) => {
        state.Error = true;
        state.Success = false;
        state.loaders = false;
        state.message = action.error;
      })
      .addCase(wishListPostData.pending, (state) => {
        state.loaders = true;
      })
      .addCase(wishListPostData.fulfilled, (state) => {
        state.Error = false;
        state.Success = true;
        state.loaders = false;
      })
      .addCase(wishListPostData.rejected, (state, action) => {
        state.Error = true;
        state.Success = false;
        state.loaders = false;
      })
      .addCase(wishListGetData.pending, (state) => {
        state.loaders = true;
      })
      .addCase(wishListGetData.fulfilled, (state, action) => {
        state.Error = false;
        state.Success = true;
        state.loaders = false;
        state.Whislistget = action.payload.getBlog;
      })
      .addCase(wishListGetData.rejected, (state, action) => {
        state.Error = true;
        state.Success = false;
        state.loaders = false;
      })

      .addCase(resetAll, () => inintialState);
  },
});

export default usersSlice.reducer;
