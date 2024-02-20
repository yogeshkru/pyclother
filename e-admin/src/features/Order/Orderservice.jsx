import axios from "axios"

import URL from "../../utilis/Url"
import { config } from "../../utilis/axiosConfig"

export const ordergetOrder=async()=>{
    const responsive=await axios.get(`${URL.BASE_URL}order/get-shop-product`,config)
    return responsive.data
}


const Order={
    ordergetOrder
}

export default Order;