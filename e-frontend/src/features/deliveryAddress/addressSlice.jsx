import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import address from "./addressService";
import { toast } from "react-toastify";



export const PostAddress = createAsyncThunk(
    "auth/address/addpost",
    async (data, thunkApi) => {
        try {
            const response = await address.createAddress(data);
            return response;
        } catch (err) {
            toast.error(err?.response?.data?.message);
            return thunkApi.rejectWithValue(err);
        }
    }
);

export const getshippingAddress = createAsyncThunk(
    "auth/address/getshipping",
    async (data, thunkApi) => {
        try {
            const response = await address.getShippingAddress(data);
            return response;
        } catch (err) {
            toast.error(err?.response?.data?.message);
            return thunkApi.rejectWithValue(err);
        }
    }
);

export const getbillingAddress = createAsyncThunk(
    "auth/address/getbilling",
    async (data, thunkApi) => {
        try {
            const response = await address.getBillingAddress(data);
            return response;
        } catch (err) {
            toast.error(err?.response?.data?.message);
            return thunkApi.rejectWithValue(err);
        }
    }
);

export const patchshippingAddress = createAsyncThunk(
    "auth/address/patchshipping",
    async (data, thunkApi) => {
        try {
            const response = await address.patchShippingAddress(data);
            return response;
        } catch (err) {
            toast.error(err?.response?.data?.message);
            return thunkApi.rejectWithValue(err);
        }
    }
);

export const patchbillingAddress = createAsyncThunk(
    "auth/address/patchbilling",
    async (data, thunkApi) => {
        try {
            const response = await address.patchBillingAddress(data);
            return response;
        } catch (err) {
            toast.error(err?.response?.data?.message);
            return thunkApi.rejectWithValue(err);
        }
    }
);

export const deleteAddress = createAsyncThunk(
    "auth/address/delete",
    async (data, thunkApi) => {
        try {
            const response = await address.deleteAddress(data);
            return response;
        } catch (err) {
            toast.error(err?.response?.data?.message);
            return thunkApi.rejectWithValue(err);
        }
    }
);

export const Postorderitem = createAsyncThunk(
    "auth/order/addpost",
    async (data, thunkApi) => {
        try {
            const response = await address.createOrderItem(data);
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
    createOrderItem: {},
    createAddress: {},
    getShippingAddress: [],
    getBillingAddress: []

};

export const AddressesSlice = createSlice({
    name: "addresses",
    initialState: inintialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(PostAddress.pending, (state, action) => {
                state.loaders = true
            }).addCase(PostAddress.fulfilled, (state, action) => {
                state.loaders = false,
                    state.Error = false,
                    state.Success = true,
                    state.createAddress = action.payload

                if (state.Success) {
                    toast.success('address added successfully')
                }
            }).addCase(PostAddress.rejected, (state, action) => {
                state.Error = true;
                state.Success = false;
                state.loaders = false;
                state.message = action.error;
            })
            .addCase(getshippingAddress.pending, (state, action) => {
                state.loaders = true
            }).addCase(getshippingAddress.fulfilled, (state, action) => {
                state.loaders = false,
                    state.Error = false,
                    state.Success = true

            }).addCase(getshippingAddress.rejected, (state, action) => {
                state.Error = true;
                state.Success = false;
                state.loaders = false;
                state.message = action.error;
            })
            .addCase(getbillingAddress.pending, (state, action) => {
                state.loaders = true
            }).addCase(getbillingAddress.fulfilled, (state, action) => {
                state.loaders = false,
                    state.Error = false,
                    state.Success = true

            }).addCase(getbillingAddress.rejected, (state, action) => {
                state.Error = true;
                state.Success = false;
                state.loaders = false;
                state.message = action.error;
            })
            .addCase(patchshippingAddress.pending, (state, action) => {
                state.loaders = true
            }).addCase(patchshippingAddress.fulfilled, (state, action) => {
                state.loaders = false,
                    state.Error = false,
                    state.Success = true

            }).addCase(patchshippingAddress.rejected, (state, action) => {
                state.Error = true;
                state.Success = false;
                state.loaders = false;
                state.message = action.error;
            })
            .addCase(patchbillingAddress.pending, (state, action) => {
                state.loaders = true
            }).addCase(patchbillingAddress.fulfilled, (state, action) => {
                state.loaders = false,
                    state.Error = false,
                    state.Success = true

            }).addCase(patchbillingAddress.rejected, (state, action) => {
                state.Error = true;
                state.Success = false;
                state.loaders = false;
                state.message = action.error;
            })
            .addCase(deleteAddress.pending, (state, action) => {
                state.loaders = true
            }).addCase(deleteAddress.fulfilled, (state, action) => {
                state.loaders = false,
                    state.Error = false,
                    state.Success = true

            }).addCase(deleteAddress.rejected, (state, action) => {
                state.Error = true;
                state.Success = false;
                state.loaders = false;
                state.message = action.error;
            })
            .addCase(Postorderitem.pending, (state, action) => {
                state.loaders = true
            }).addCase(Postorderitem.fulfilled, (state, action) => {
                state.loaders = false,
                    state.Error = false,
                    state.Success = true
                    state.createAddress = action.payload

                    if (state.Success) {
                        toast.success('order added successfully')
                    }
            }).addCase(Postorderitem.rejected, (state, action) => {
                state.Error = true;
                state.Success = false;
                state.loaders = false;
                state.message = action.error;
            })
    }
})



export default  AddressesSlice.reducer