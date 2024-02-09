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

const getOrderOne = async()=>{
    const response = await axios.get(`${CONN.BASE_URL}order/get-myorder`,config);
    if(response.data){
        return response.data
    }
};

const getAddress = async()=>{
    const response = await axios.get(`${CONN.BASE_URL}`)
}
