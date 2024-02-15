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


//get
const getUserAddressFromServer = async()=>{
    const response = await axios.get(`${CONN.BASE_URL}address/address-find`,config);
    if(response.data){
        return response.data
    }
}


//deleteAddress

const deleteAddress =async function(id){
    const response = await axios.delete(`${CONN.BASE_URL}address/address-delete/${id}`,config)
    if(response.data){
        return response.data
    }
}

//patch
const patchAddress=async function(data){
    const response=axios.patch(`${CONN.BASE_URL}address/address_patch_billing/${data.id}`,data.addressPatch,config)
    return response.data
}


const addressDetails = {

    createAddress,
    getUserAddressFromServer,
    deleteAddress,
    patchAddress
}

export default addressDetails;