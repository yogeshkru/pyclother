import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import eventService from "./eventService";

import { toast } from "react-toastify";

export const Reset_all = createAction("Reset_all");

export const postEvent = createAsyncThunk(
  "event/create",
  async (data, thunkApi) => {
    try {
      const response = await eventService.eventCreate(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getEvent = createAsyncThunk("event/get", async (_, thunkApi) => {
  try {
    const response = await eventService.getEvent();
    return response["events"];
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const deleteEvent = createAsyncThunk(
  "event/delete",
  async (id, thunkApi) => {
    try {
      const response = await eventService.deleteEvent(id);
      thunkApi.dispatch(getEvent());
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const uploadBannerImage = createAsyncThunk(
  "event/banner",
  async (data, thunkApi) => {
    try {
      const response = await eventService.bannerImage(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  isError: false,
  isSuccess: false,
  message: "",
  isLoader: false,
  eventArray: [],
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(postEvent.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(postEvent.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
      })
      .addCase(postEvent.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
        state.message = action.error;
        state.isSuccess = false;
      })
      .addCase(getEvent.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(getEvent.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
        state.eventArray = action.payload;
        console.log(action.payload);
      })
      .addCase(getEvent.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteEvent.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(uploadBannerImage.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(uploadBannerImage.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
      })
      .addCase(uploadBannerImage.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default eventSlice.reducer;
