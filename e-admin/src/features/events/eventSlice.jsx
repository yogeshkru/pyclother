import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import eventService from "./eventService";



export const Reset_all = createAction("Reset_all");

export const postEvent = createAsyncThunk(
  "event/create",
  async (data, thunkApi) => {

    try {
  
    
      const formData=new FormData()
      formData.append("images",{banners:[data]})
   
      const response = await eventService.eventCreate(formData);
     
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getEvents = createAsyncThunk("event/get", async (_, thunkApi) => {
  try {
    const response = await eventService.getEvent();
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const getAdminEvents = createAsyncThunk("event/getSuper", async (_, thunkApi) => {
  try {
    const response = await eventService.getSuperEvent();
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});


export const PatchadminEevent=createAsyncThunk("event/patchData",async(data,thunkApi)=>{
  try {
    const response = await eventService.PatchSuperEvent(data);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
})

export const deleteEvent = createAsyncThunk(
  "event/delete",
  async (id, thunkApi) => {
    try {
      const response = await eventService.deleteEvent(id);
      thunkApi.dispatch(getEvents());
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
  eventSuperAdmin:[]
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
      .addCase(getEvents.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
        state.eventArray = action.payload?.bannergetShopAll;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAdminEvents.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(getAdminEvents.fulfilled, (state,action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
        state.eventSuperAdmin = action.payload?.bannergetAll;
      })
      .addCase(getAdminEvents.rejected, (state,action) => {
       
        state.isLoader = false;
        state.isSuccess = true;
        state.isError = action.error;
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
      })

      .addCase(PatchadminEevent.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(PatchadminEevent.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
      })
      .addCase(PatchadminEevent.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default eventSlice.reducer;
