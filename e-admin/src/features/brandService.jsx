import axios from "axios";
import URL from "../utilis/Url";
import {config} from "../utilis/axiosConfig";


//post
const brandCreate=async(userData)=>{
    const response=await axios.post(`${URL.BASE_URL}brand/create-brand`,userData,config)
    if(response.data){
        return response.data
    }
}

//get

const brandGet=async()=>{
    const response=await axios.get(`${URL.BASE_URL}brand/allbrands`,config)
    if(response.data){
        return response.data
    }
}

//patch

const brandPatch=async(data)=>{
    
    const response=await axios.patch(`${URL.BASE_URL}brand/updatebrand/${data.id}`,data?.brandValue,config)
    if(response.data){
        return response.data
    }
    
}

//delete

const brandDelete=async(data)=>{
    const response=await axios.delete(`${URL.BASE_URL}brand/deleteBrand/${data}`,config)
    if(response.data){
        return response.data
    }
}

//find

const brandFind=async(data)=>{
    const response=await axios.get(`${URL.BASE_URL}brand/findBrand/${data._id}`,data)
    if(response.data){
        return response.data
    }
}



const brandeService={
    brandCreate,
    brandGet,
    brandPatch,
    brandDelete,
    brandFind
}

export default brandeService;

