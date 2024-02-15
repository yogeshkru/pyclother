import { config } from "../../utils/axiosConfig";
import axios from "axios";
import CONN from "../../utils/Url";

const createOrder = async(data)=>{
    const response = await axios.post(`${CONN.BASE_URL}order/create-order`,data,config);
    if(response.data){
        response.data
    }
}

const orderService = {
    createOrder
}

export default orderService