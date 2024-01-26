import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Category from './categoryService'

export const reset = createAction('Reset_all')
export const Categorypost = createAsyncThunk(
    "auth/categorypost",
    async (cats, thunkApi) => {

        try {
            const response = await Category.Categorycreate(cats);
            return response

        } catch (err) {
            toast.error(err?.response?.data?.message)
            return thunkApi.rejectWithValue(err);
        }
    }
)

export const Categoryget = createAsyncThunk = (
    "auth/get",
    async (thunkApi) => {
        try {
            const response = await Category.Categoryget();
            return response;
        } catch (err) {
            toast.err(err?.response?.data?.message)
            return thunkApi.rejectWithValue(err)
        }
    }
)

export const Categorypatch = createAction(
    "auth/patch",
    async (cats, thunkApi) => {
        try {
            const response = await Category.Categorypatch(cats)
            return response
        } catch (err) {
            toast.err(err?.response?.data?.message)
            return thunkApi.rejectWithValue(err)
        }


    }
)
export const Categorydelete = createAction(
    "auth/patch",
    async (cats, thunkApi) => {
        try {
            const response = await Category.Categorydelete(cats)
            return response
        } catch (err) {
            toast.err(err?.response?.data?.message)
            return thunkApi.rejectWithValue(err)
        }


    }
)

export const Categoryfind = createAction(
    "auth/find",
    async (thunkApi) => {
        try {
            const response = await Category.Categoryfind()
            return response
        } catch (err) {
            toast.err(err?.response?.data?.message)
            return thunkApi.rejectWithValue(err)
        }
    }
)


const initialState={
    isError:false,
    isSuccess:false,
    message:"",
categories:[],
isLoader:false
}
export const Categorydetails=createSlice({
    name:"category",
    initialState ,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(Categorypost.pending,(state,action)=>{
            state.isLoader=true
            
        })
        .addCase(Categorypost.fulfilled,(state,action)=>{
            state.isLoader=false
            state.isSuccess=true
            state.isError=false
            state.categories=action.payload

            // if(state.isSuccess){
            //     state.message=action.payload?.message?.message
            // }
        })
        .addCase(Categorypost.rejected,(state,action)=>{
            state.isLoader=false
            state.isError=true
            state.message=action.error
            state.isSuccess=false
        })

    }
})
 
export default Categorydetails.reducer

