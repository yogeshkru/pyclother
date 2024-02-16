import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import productService from "./productService";


export const resetAll = createAction("Reset_all");

export const getAllProduct = createAsyncThunk(
  "product/all/from",
  async (data, thunkAPI) => {
    try {
      const response = await productService.getProduct(data);
      
      return response.getAllProducts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  "product/one",
  async (id, thunkAPI) => {
    try {
      const response = await productService.getOneProduct(id);
      thunkAPI.dispatch(getAllProduct())
    
      return response.product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const RatingsPost=createAsyncThunk(
  "rating/post",async(userData,thunkAPI)=>{
   try{
    const response=await productService.Ratings(userData)
    
   
    return response
   }catch(err){
    return thunkAPI.rejectWithValue(err)
   }


  }
)

const initialState = {
  isError: false,
  isSuccess: false,
  message: "",
  isLoader: false,
  wholeProduct: [],
  singleProduct:{}
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
        state.wholeProduct = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getOneProduct.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(RatingsPost.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(RatingsPost.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoader = false;
        state.isSuccess = true;
      
      })
      .addCase(RatingsPost.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.isSuccess = false;
       
      });
  },
});



export default productSlice.reducer;