import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import Privacypolicyservice from "./Privacypolicyservice";
import { toast } from "react-toastify";


export const privacy=createAsyncThunk("auth/privacy",async(data,thunkApi)=>{
    try{
       const response=await Privacypolicyservice.privatePolicy(data)
       return response
    }catch(err){
       toast.error(err?.response?.data?.message)
       return thunkApi.rejectWithValue(err)
    }
})

const initialState={
    status:"idle",
    error:null
}

export const privacyPolicySlice=createSlice({
    name:"privacy",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(privacy.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(privacy.fulfilled,(state,action)=>{
            state.status="successed"
        })
        .addCase(privacy.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.error.message
        })
    }
    
})

export default privacyPolicySlice.reducer;