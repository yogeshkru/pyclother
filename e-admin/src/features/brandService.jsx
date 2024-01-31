import axios from "axios";
import URL from "../utilis/Url";


//post
const brandCreate=async(userData)=>{
    const response=await axios.post(`${URL.BASE_URL}brand/brands`,userData)
    if(response.data){
        return response.data
    }
}

//get

const brandGet=async()=>{
    const response=await axios.get(`${URL.BASE_URL}brand/allbrands`)
    if(response.data){
        return response.data
    }
}

//patch

const brandPatch=async(data)=>{
    const response=await axios.patch(`${URL.BASE_URL}brand/updatebrand/${data._id}`,data)
    if(response.data){
        return response.data
    }
    
}

//delete

const brandDelete=async(data)=>{
    const response=await axios.delete(`${URL.BASE_URL}brand/deleteBrand/${data._id}`,data)
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

