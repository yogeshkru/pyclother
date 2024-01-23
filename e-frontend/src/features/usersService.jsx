import axios from "axios";


const userRegister=async(userData)=>{
    const response=await axios.get(`${process.env.BASIC_URL}/createUser`,userData)
    if(response.data){
        return response.data
    }
}

const userDetails={
    userRegister
}

export default userDetails