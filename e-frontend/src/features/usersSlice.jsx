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
export const userLogin=createAsyncThunk(
  "auth/login",async(userData,thunkApi)=>{
    try{
   const response=await usersService.userLogin(userData)
   return response
    }catch(err){
      toast.error(err?.response?.data?.message)
    }
  }
)


const inintialState = {
  Error: false,
  Success: false,
  message: "",
  loaders: false,
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
      .addCase(resetAll, () => inintialState);
  },
});

export default usersSlice.reducer;
