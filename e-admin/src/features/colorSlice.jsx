import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import colordata from "./colorService";
import { toast } from "react-toastify";
export const resetAll = createAction("reset_All");

//CREATE
export const createColor = createAsyncThunk(
  "ayth/color",
  async (userData, thunkApi) => {
    try {
      const response = await colordata.colorCreate(userData);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

//GET
export const colorget = createAsyncThunk("auth/get", async (thunkApi) => {
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
  "auth/patch",
  async (userData, thunkApi) => {
    try {
      const response = await colordata.colorPatch(userData);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

//delete

export const colorDelete = createAsyncThunk(
  "auth/delete",
  async (userData, thunkApi) => {
    try {
      const response = await colordata.colordelete(userData);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

//find

export const colorFinds = createAsyncThunk(
  "auth/find",
  async (userData, thunkApi) => {
    try {
      const response = await colordata.colorfind(userData);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const initialState={
    isError:false,
    isSuccess:false,
    
    
}
