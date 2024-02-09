import axios from "axios";
import CONN from "../../utils/Url";
import {config} from "../../utils/axiosConfig"




//name,phone
const createOrder = async(data)=>{
    const response = await axios.post(`${CONN.BASE_URL}order/create-order`,data,config);
    if(response.data){
        return response.data
    }
};

//addressCreate

const createAddress = async(data)=>{
    const response = await axios.post(`${CONN.BASE_URL}address/address-create`,data,config);
    if(response.data){
        return response.data
    }
};


//getCart
const getCart = async()=>{
    const response = await axios.get(`${CONN.BASE_URL}/cart/showtocart`,config);
    if(response.data){
        return response.data
    }
}

const addressDetails = {
    createOrder,
    createAddress,
    getCart
}

export default addressDetails;