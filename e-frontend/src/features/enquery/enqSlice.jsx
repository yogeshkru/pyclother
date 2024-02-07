
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import enqService from "./enqService";
import { toast } from "react-toastify";
export const Reset_all = createAction("Reset_all");

export const Postenquiry = createAsyncThunk(
    "auth/enq/enqpost",
    async (enq, thunkApi) => {
        try {
            const response = await enqService.Createenquiry(enq);
            return response;
        } catch (err) {
            toast.error(err?.response?.data?.message);
            return thunkApi.rejectWithValue(err);
        }
    }
);


const initialState = {
    isError: false,
    isSuccess: false,
    message: "",
    isLoader: false,

}

export const EnquiryDetail = createSlice({
    name: "enquery",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(Postenquiry.pending, (state, action) => {
            state.isLoader = true
        }).addCase(Postenquiry.fulfilled, (state, action) => {
            state.isLoader = false;
            state.isSuccess = true;
            state.isError = false
            state.createdquery=action.payload
            if(state.isSuccess){
        toast.success('Your message has been successfully sent. You will receive a notification via email.');

            }
        }).addCase(Postenquiry.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
            state.message = action.error;
            state.isSuccess = false
        })
    }
})


export default EnquiryDetail.reducer;