import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Category from './categoryService';
import { toast } from "react-toastify";

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
export const Categoryget = createAsyncThunk(
    "auth/get",
    async (thunkApi) => {
        try {
            const response = await Category.Categoryget();
            return response;
        } catch (err) {

            toast.error(err?.response?.data?.message)
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
            toast.error(err?.response?.data?.message)
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
            toast.error(err?.response?.data?.message)
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
            toast.error(err?.response?.data?.message)
            return thunkApi.rejectWithValue(err)
        }
    }
)


const initialState = {
    isError: false,
    isSuccess: false,
    message: "",

    createCategories: {},
    isLoader: false
}
export const Categorydetails = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // CREATE
            .addCase(Categorypost.pending, (state, action) => {
                state.isLoader = true

            })


            .addCase(Categorypost.fulfilled, (state, action) => {
                state.isLoader = false
                state.isSuccess = true
                state.isError = false
                state.createCategoriesPosts = action.payload

                // if(state.isSuccess){
                //     state.message=action.payload?.message?.message
                // }
            })
            .addCase(Categorypost.rejected, (state, action) => {
                state.isLoader = false
                state.isError = true
                state.message = action.error
                state.isSuccess = false
            })

            // GET
            .addCase(Categoryget.pending, (state, action) => {
                state.isLoader = true

            })
            .addCase(Categoryget.fulfilled, (state, action) => {
                state.isLoader = false
                state.isError = false
                state.categories = action.payload
                state.isSuccess = true
            })
            .addCase(Categoryget.rejected, (state, action) => {
                state.isLoader = false
                state.isError = true
                state.message = action.error
                state.isSuccess = false
            })


            //patch

            .addCase(Categorypatch.pending, (state, action) => {
                state.isLoader = true

            })
            .addCase(Categorypatch.fulfilled, (state, action) => {
                state.isLoader = false
                state.isError = false
                state.createCategories = action.payload
                state.isSuccess = true
            })
            .addCase(Categorypatch.rejected, (state, action) => {
                state.isLoader = false
                state.isError = true
                state.message = action.error
                state.isSuccess = false
            })

            // delete

            .addCase(Categorydelete.pending, (state, action) => {
                state.isLoader = true

            })
            .addCase(Categorydelete.fulfilled, (state, action) => {
                state.isLoader = false
                state.isError = false
                state.categoriesdelete = action.payload
                state.isSuccess = true
            })
            .addCase(Categorydelete.rejected, (state, action) => {
                state.isLoader = false
                state.isError = true
                state.message = action.error
                state.isSuccess = false
            })

            //find

            .addCase(Categoryfind.pending, (state, action) => {
                state.isLoader = true

            })
            .addCase(Categoryfind.fulfilled, (state, action) => {
                state.isLoader = false
                state.isError = false
                state.createCategoriefinds = action.payload
                state.isSuccess = true


            })
            .addCase(Categoryfind.rejected, (state, action) => {
                state.isLoader = false
                state.isError = true
                state.message = action.error
                state.isSuccess = false
            })
    }

})


export default Categorydetails.reducer

