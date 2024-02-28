import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import shopService from "./shopService";
export const ResetAll=createAction("reset_All")

export const handleAsyncRequest = async (serviceFunction, data, thunkApi) => {
  try {
    const response = await serviceFunction(data);
    return response;
  } catch (err) {
    toast.error(err?.response?.data?.message);
    return thunkApi.rejectWithValue(err);
  }
};

export const shopSignData = createAsyncThunk(
  "auth/ShopSign",
  async (data, thunkApi) => {
    return handleAsyncRequest(shopService.createShop, data, thunkApi);
  }
)

export const shopLoginData=createAsyncThunk(
    "auth/ShopLogin",
    async(data,thunApi)=>{
        
        return handleAsyncRequest(shopService.loginShop,data,thunApi)
    }
)

export const shopForgetData=createAsyncThunk(
    "auth/ShopForget",
    async(data,thunApi)=>{
        return handleAsyncRequest(shopService.forgetPassShop,data,thunApi)
    }

)


export const shopResetData=createAsyncThunk(
    "auth/ShopReset",
    async(data,thunApi)=>{
        return handleAsyncRequest(shopService.resetPassword,data,thunApi)
    }
)

export const shopUpdateData=createAsyncThunk(
    "auth/ShopUpdate",
    async(data,thunApi)=>{
        return handleAsyncRequest(shopService.updateDetailsShop,data,thunApi)
    }
    
)

export const shopupDataShopPassword=createAsyncThunk(
    "auth/ShopUpdateData",
    async(data,thunkApi)=>{
        return handleAsyncRequest(shopService.updateShopPassword,data,thunkApi)
    }
)

export const ShopDeleteData=createAsyncThunk(
    "auth/ShopDelete",
    async(data,thunApi)=>{
        return handleAsyncRequest(shopService.deleteAuthShop,data,thunApi)
    }
)

export const ShopByRoleId=createAsyncThunk(
    "auth/getRole",async(data,thunApi)=>{
        return handleAsyncRequest(shopService.getShopuserByid,data,thunApi)
    }
)




const initialState={
    isError:false,
    isSuccess:false,
    Message:"",
    isLoaders:false,
    CrateShop:{},
    LoginShop:"",
    patchShop:{},
    ResetShop:{},
    UpdateShop:{},
    UpDateShopPassword:{},
    DeleteShop:{},
    Role:""

}
export const shopSlice=createSlice({
    name:"shop",
    initialState,
    reducers:{},
    
    extraReducers:(builder)=>{
        builder
        .addCase(shopSignData.pending,(state,action)=>{
            state.isLoaders=true
        })
        .addCase(shopSignData.fulfilled,(state,action)=>{
            state.isLoaders=false;
            state.isError=false;
            state.isSuccess=true;
            state.CrateShop=action.payload
            
        })
        .addCase(shopSignData.rejected,(state,action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoaders=false;
            state.Message=action.error
        })


     
        .addCase(shopLoginData.pending,(state,action)=>{
            state.isLoaders=true
        })
        .addCase(shopLoginData.fulfilled,(state,action)=>{
            state.isLoaders=false;
            state.isError=false;
            state.isSuccess=true;
            state.LoginShop=action.payload

            if(state.isSuccess){
                toast.success("Create Successfully")
            }
          
            
        })
        .addCase(shopLoginData.rejected,(state,action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoaders=false;
            state.Message=action.error
        })


     

        .addCase(shopForgetData.pending,(state,action)=>{
            state.isLoaders=true
        })
        .addCase(shopForgetData.fulfilled,(state,action)=>{
            state.isLoaders=false;
            state.isError=false;
            state.isSuccess=true;
            state.patchShop=action.payload;
            
        })
        .addCase(shopForgetData.rejected,(state,action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoaders=false;
            state.Message=action.error
        })


        .addCase(shopResetData.pending,(state,action)=>{
            state.isLoaders=true
        })
        .addCase(shopResetData.fulfilled,(state,action)=>{
            state.isLoaders=false;
            state.isError=false;
            state.isSuccess=true;
            state.ResetShop=action.payload;
            
        })
        .addCase(shopResetData.rejected,(state,action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoaders=false;
            state.Message=action.error
        })

        .addCase(shopUpdateData.pending,(state,action)=>{
            state.isLoaders=true
        })
        .addCase(shopUpdateData.fulfilled,(state,action)=>{
            state.isLoaders=false;
            state.isError=false;
            state.isSuccess=true;
            state.UpdateShop=action.payload;
            
        })
        .addCase(shopUpdateData.rejected,(state,action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoaders=false;
            state.Message=action.error
        })

        .addCase(shopupDataShopPassword.pending,(state,action)=>{
            state.isLoaders=true
        })
        .addCase(shopupDataShopPassword.fulfilled,(state,action)=>{
            state.isLoaders=false;
            state.isError=false;
            state.isSuccess=true;
            state.UpDateShopPassword=action.payload;
            
        })
        .addCase(shopupDataShopPassword.rejected,(state,action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoaders=false;
            state.Message=action.error
        })

        .addCase(ShopDeleteData.pending,(state,action)=>{
            state.isLoaders=true
        })
        .addCase(ShopDeleteData.fulfilled,(state,action)=>{
            state.isLoaders=false;
            state.isError=false;
            state.isSuccess=true;
            state.DeleteShop=action.payload;
            
        })
        .addCase(ShopDeleteData.rejected,(state,action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoaders=false;
            state.Message=action.error
        })
        .addCase(ShopByRoleId.pending,(state,action)=>{
            state.isLoaders=true
        })
        .addCase(ShopByRoleId.fulfilled,(state,action)=>{
            state.isLoaders=false;
            state.isError=false;
            state.isSuccess=true;
            state.Role=action.payload?.data?.user?.role;
            
        })
        .addCase(ShopByRoleId.rejected,(state,action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoaders=false;
            state.Message=action.error
        })
        .addCase(ResetAll,()=>initialState)
        
    }
})


export default shopSlice.reducer;