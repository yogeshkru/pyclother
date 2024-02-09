import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import addressDetails from "./deliveryService";
import { toast } from "react-toastify";




export const PostAddress = createAsyncThunk(
    "auth/address/addpost",
    async (address, thunkApi) => {
        try {
            const response = await addressDetails.createAddress(address);
            return response;
        } catch (err) {
            toast.error(err?.response?.data?.message);
            return thunkApi.rejectWithValue(err);
        }
    }
);


export const getCartOne = createAsyncThunk(
    "auth/cart/getcart",
    async (cart, thunkApi) => {
        try {
            const response = await addressDetails.getCart(cart);
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
    
    createAddress:{}
  };

  
export const addressSlice = createSlice({
    name:"address",
    initialState: inintialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        
        .addCase(PostAddress.pending,(state,action)=>{
            state.loaders = true
        }).addCase(PostAddress.fulfilled,(state,action)=>{
            state.loaders=false,
            state.Error=false,
            state.Success=true,
            state.createAddress=action.payload

            if(state.Success){
                toast.success('address added successfully')
            }
        }).addCase(PostAddress.rejected,(state,action)=>{
            state.Error = true;
            state.Success = false;
            state.loaders = false;
            state.message = action.error;
        })
        .addCase(getCartOne.pending,(state,action)=>{
            state.loaders = true
        }).addCase(getCartOne.fulfilled,(state,action)=>{
            state.loaders=false,
            state.Error=false,
            state.Success=true
        }).addCase(getCartOne.rejected,(state,action)=>{
            state.Error = true;
            state.Success = false;
            state.loaders = false;
            state.message = action.error;
        })
    }   
})

export default addressSlice.reducer; 