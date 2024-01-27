import axios from "axios";
import URL from "../../utilis/Url";

// Post Admin ?

const AdminSignup=async(userDate)=>{
    const response=await axios.post(`${URL.BASE_URL}admin/activate/${userDate}`,userDate)
    if(response.data){
        return response.data
    }
}


//Login

const AdminLogin=async(userDate)=>{
    const response=await axios.post(`${URL.BASE_URL}admin/admin-login`,userDate)
    if(response.data){
        return response.data
    }
}

//Patch

const AdminReset=async(userDate)=>{
    const response=await axios.patch(`${URL.BASE_URL}admin/admin-reset-password/${userDate}`,userDate)
    if(response.data){
        return response.data
    }
}

const adminData={
    AdminSignup,
    AdminLogin,
    AdminReset
}

export default adminData;