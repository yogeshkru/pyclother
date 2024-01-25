import axios from "axios";
import URL from "../utilis/Url";

//colorcreate
const colorCreate=async(userData)=>{
    const response=await axios.post(`${URL.BASE_URL}color/colors`,userData)
    if(response.data){
        return response.data
    }
}

const colordata={
    colorCreate
}

export default colordata;