import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "./categoryService";
import { toast } from "react-toastify";
export const resetAll = createAction("reaetAll");

export const categoryPostData = createAsyncThunk(
  "auth/categoryPost",
  async (userData, thunkApi) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < userData?.images.length; i++) {
        formData.append("images", userData?.images[i]);
      }
      formData.append("category_title", userData?.category_title);
      formData.append("category_description", userData?.category_description);
      formData.append("meta_title", userData?.meta_title);
      formData.append("meta_description", userData?.meta_description);
      formData.append("sort", userData?.sort);

      const response = await categoryService.categoryPost(userData);
      thunkApi.dispatch(categoryGet());
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const categoryGetData = createAsyncThunk(
  "auth/categoryGet",
  async (_, thunkApi) => {
    try {
      const response = await categoryService.categoryGet();
   
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const categoryPatchData = createAsyncThunk(
  "auth/categoryPatch",
  async (userData, thunkApi) => {
    try {
      const response = await categoryService.categoryPatch(userData);
      thunkApi.dispatch(categoryGet());
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const categoryDeleteData = createAsyncThunk(
  "auth/categoryDelete",
  async (userData, thunkApi) => {
    try {
      const response = await categoryService.categoryDelete(userData);
      thunkApi.dispatch(categoryGet());
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const categoryFindData = createAsyncThunk(
  "auth/categoryFind",
  async (userData, thunkApi) => {
    try {
      const response = await categoryService.categoryFind(userData);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const initialState = {
  Error: false,
  Success: false,
  Message: "",
  Loaders: false,
  categoryGet: [],
  categoryPatch: {},
  categoryDelete: undefined,
  categoryFind: undefined,
};
export const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Post
    builder
      .addCase(categoryPostData.pending, (state, action) => {
        state.Loaders = true;
      })
      .addCase(categoryPostData.fulfilled, (state, action) => {
        state.Success = true;
        state.Error = false;
        state.Loaders = false;

        if (state.Success) {
          toast.success("Added Category");
        }
      })
      .addCase(categoryPostData.rejected, (state, action) => {
        state.Error = true;
        state.Loaders = false;
        state.Success = false;
        state.Message = action.error;
      })

      //Get
      .addCase(categoryGetData.pending, (state, action) => {
        state.Loaders = true;
      })
      .addCase(categoryGetData.fulfilled, (state, action) => {
        state.Success = true;
        state.Error = false;
        state.Loaders = false;
        state.categoryGet = action.payload.categorieget;
      })
      .addCase(categoryGetData.rejected, (state, action) => {
        state.Error = true;
        state.Loaders = false;
        state.Success = false;
        state.Message = action.error;
      })

      //Patch

      .addCase(categoryPatchData.pending, (state, action) => {
        state.Loaders = false;
      })
      .addCase(categoryPatchData.fulfilled, (state, action) => {
        state.Loaders = false;
        state.Error = false;
        state.Success = true;
        state.categoryPatch = action.payload;
        if (state.Success) {
          toast.success("Updated Category");
        }
      })
      .addCase(categoryPatchData.rejected, (state, action) => {
        state.Error = true;
        state.Loaders = false;
        state.Success = false;
        state.Message = action.error;
      })

      //Delete

      .addCase(categoryDeleteData.pending, (state, action) => {
        state.Loaders = false;
      })
      .addCase(categoryDeleteData.fulfilled, (state, action) => {
        state.Loaders = false;
        state.Error = false;
        state.Success = true;
        state.categoryDelete = action.payload;
        if (state.Success) {
          toast.error("Deleted Category");
        }
      })
      .addCase(categoryDeleteData.rejected, (state, action) => {
        state.Error = true;
        state.Loaders = false;
        state.Success = false;
        state.Message = action.error;
      })

      //Find
      .addCase(categoryFindData.pending, (state, action) => {
        state.Loaders = false;
      })
      .addCase(categoryFindData.fulfilled, (state, action) => {
        state.Loaders = false;
        state.Error = false;
        state.Success = true;
        state.categoryFind = action.payload;
      })
      .addCase(categoryFindData.rejected, (state, action) => {
        state.Error = true;
        state.Loaders = false;
        state.Success = false;
        state.Message = action.error;
      })

      .addCase(resetAll, () => initialState);
  },
});

export default CategorySlice.reducer;
