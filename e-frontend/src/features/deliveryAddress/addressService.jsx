import axios from "axios";
import CONN from "../../utils/Url";
import {config} from "../../utils/axiosConfig"

//addressCreate

const createAddress = async(data)=>{
    const response = await axios.post(`${CONN.BASE_URL}address/address-create`,data,config);
    if(response.data){
        return response.data
    }
};
//get shipping
const getShippingAddress = async(data)=>{
    const response = await axios.get(`${CONN.BASE_URL}address/address-get-shipping/${data}`,config);
    if(response.data){
        return response.data
    }
}
//get billing
const getBillingAddress = async(data)=>{
    const response = await axios.get(`${CONN.BASE_URL}address/address-get-billing/${data}`,config);
    if(response.data){
        return response.data
    }
}
//patch shipping
const patchShippingAddress=async(data)=>{
    const response = await axios.patch(`${CONN.BASE_URL}address/address_patch_shipping/${data}`,
    data.shippingValue,config);
    if(response.data){
        return response.data
    }
}
//patch billing
const patchBillingAddress=async(data)=>{
    const response = await axios.patch(`${CONN.BASE_URL}address/address_patch_billing/${data}`,
    data.billingValue,config);
    if(response.data){
        return response.data
    }
}
// delete
const deleteAddress=async(data)=>{
    const response = await axios.delete(`${CONN.BASE_URL}address/address-delete/${data}`,config)
    if(response.data){
        return response.data
    }
}
//createOrderitem

const createOrderItem =async(data)=>{
    const response=await axios.post(`${CONN.BASE_URL}order-item/create-order-item`,
    data,config)
    if(response.data){
        return response.data
    }
}

const address={
    createAddress,
    getShippingAddress,
    getBillingAddress,
    patchBillingAddress,
    patchShippingAddress,
    deleteAddress,
    createOrderItem
}

export default address;