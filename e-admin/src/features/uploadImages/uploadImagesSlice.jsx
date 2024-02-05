import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import updloadImageService from "./uploadImagesService";
import { toast } from "react-toastify";

export const resetAll = createAction("Reset_all");

export const bannerImageUploadOnServer = createAsyncThunk(
  "upload/banner/image",
  async (data, thunkAPI) => {
    try {
      const response = await updloadImageService.uploadImages(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

<<<<<<< HEAD
export const productUpload=createAsyncThunk("auth/productImage",async(data,thunkApi)=>{
  try{
    const formData=new FormData()
    for(let i=0;i<data.length;i++){
      formData.append("images",data[i])
    }
    const response=await updloadImageService.uploadProductImage(formData)
   
    return response;
    

  }
  catch(err){
    return thunkApi.rejectWithValue(err)
  }
})
=======
export const uploadProductImageOnServer = createAsyncThunk(
  "upload/image",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < data.length; i++) {
        formData.append("images", data[i]);
      }
      const response = await updloadImageService.uploadProductImage(formData);
      return response.urls;
    } catch (error) {
      return thunkAPI.rejectWithValue(value)
    }
  }
);

export const deleletProductImageonserver=createAsyncThunk(
  "upload/delete",async(data,thunApi)=>{
    try{
      const response=await updloadImageService.deleteImage(data);
      return response
    }catch(err){
          return thunApi.rejectWithValue(err)
    }
  }
)
>>>>>>> 4a4e520a37268963453ff43be9a35c0916157d73

const initialState = {
  isError: false,
  isSuccess: false,
  isLoader: false,
  message: "",
<<<<<<< HEAD
 
=======
  productImage:[]
>>>>>>> 4a4e520a37268963453ff43be9a35c0916157d73
};

export const imageSlice = createSlice({
  name: "uploadimage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bannerImageUploadOnServer.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(bannerImageUploadOnServer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoader = false;
        state.bannerImage = action.payload;
      })
      .addCase(bannerImageUploadOnServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.error;
      })
<<<<<<< HEAD

      .addCase(productUpload.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(productUpload.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoader = false;
       
      })
      .addCase(productUpload.rejected, (state, action) => {
=======
      .addCase(uploadProductImageOnServer.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(uploadProductImageOnServer.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
        state.productImage.push(action.payload)
      })
      .addCase(uploadProductImageOnServer.rejected, (state, action) => {
>>>>>>> 4a4e520a37268963453ff43be9a35c0916157d73
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.error;
<<<<<<< HEAD
      })
=======
        console.log(state.message)
      })
      .addCase(deleletProductImageonserver.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(deleletProductImageonserver.fulfilled, (state, action) => {
        
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
      
      })
      .addCase(deleletProductImageonserver.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.error;
     
      })

>>>>>>> 4a4e520a37268963453ff43be9a35c0916157d73
      .addCase(resetAll, () => initialState);
  },
});

export default imageSlice.reducer;
