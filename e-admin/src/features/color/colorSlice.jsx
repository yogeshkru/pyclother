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
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

//GET
export const colorget = createAsyncThunk("color/get", async (_,thunkApi) => {
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
      const response = await colordata.colorfind(dat);
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
