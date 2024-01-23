import axios from "axios";


const register = async (userData) => {
  const response = await axios.post(`${process.env.BASIC_URL}admin/creatuser`, userData);

  if (response.data) {
    return response.data;
  }
};

const activationToken = async function (userToken) {
  const response = await axios.post(`${process.env.BASIC_URL}admin/activate`, userToken, {
    withCredentials: true,
  });
  if (response.data) {
    return response.data;
  }
};

 async function adminLogout  (){
  const response= await axios.get(`${process.env.BASIC_URL}admin/logout`,{withCredentials:true})
  if(response.data){
    return response.data
  }
}

const adminService = {
  register,
  activationToken,
  adminLogout
};

export default adminService;
