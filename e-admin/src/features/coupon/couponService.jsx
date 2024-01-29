import axios from "axios";
import URL from "../../utilis/Url";
import { config } from "../../utilis/axiosConfig";
//POST

const couponPost=async(userData)=>{
    const response=await axios.post(`${URL.BASE_URL}coupon/create-coupon`,userData,config)
    if(response.data){
        return response.data
    }
}

//GET

const couponGet=async()=>{
    const response=await axios.get(`${URL.BASE_URL}coupon/get-coupon`,config)
    if(response.data){
        return response.data
    }
}

//PATCH

const couponPatch=async(data)=>{
    const response=await axios.patch(`${URL.BASE_URL}coupon/patch-coupon/${data}`,data,config)
    if(response.data){
        return response.data
    }
}

//DELETE

const couponDelete=async(data)=>{
    const response=await axios.delete(`${URL.BASE_URL}coupon/delete-coupon/${data}`,config)
    if(response.data){
        return response.data
    }

}

//FIND

const couponFind=async(data)=>{
     const response=await axios.get(`${URL.BASE_URL}coupon/find-coupon/${data}`,config)
     if(response.data){
        return response.data
     }
}

const Coupondetails={
    couponPost,
    couponGet,
    couponPatch,
    couponDelete,
    couponFind

}

export default Coupondetails;