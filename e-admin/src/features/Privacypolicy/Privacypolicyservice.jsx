import axios from "axios";
import URL from "../../utilis/Url";
import { config } from "../../utilis/axiosConfig";


const privatePolicy=async(data)=>{
    const response=await axios.post(`${URL.BASE_URL}privacy/privacyPost`,data,config)
    return response.data
}

export default {privatePolicy};