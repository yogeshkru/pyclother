import axios from "axios";
import CONN from "../utils/Url"


//signup
const userRegister=async(userData)=>{
    const response=await axios.post(`${CONN.BASE_URL}user/createUser`,userData)
    if(response.data){
        return response.data
    }
}

//login
const userLogin=async(userData)=>{
    const response=await axios.post(`${CONN.BASE_URL}user/login`,userData)
    if(response.data){
        return response.data
    }
}


const userDetails={
    userRegister,
    userLogin
}

export default userDetails






// import axios from "axios";

// class UserDetails {
//   async userRegister(userData) {
//     try {
//       const response = await axios.post(`${process.env.BASIC_URL}/createUser`, userData);
//       if (response.data) {
//         return response.data;
//       }
//     } catch (error) {
//       console.error("Error in user registration:", error.message);
//       throw error;
//     }
//   }
// }

// const usersServiceInstance = new UserDetails();
// export default usersServiceInstance;
