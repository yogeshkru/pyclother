import axios from "axios";
import { base_url } from "../utils/base_url";

const register = async (userData) => {
  const response = await axios.post(`${base_url}admin/creatuser`, userData);

  if (response.data) {
    return response.data;
  }
};

const activationToken = async function (userToken) {
  const response = await axios.post(`${base_url}admin/activate`, userToken, {
    withCredentials: true,
  });
  if (response.data) {
    return response.data;
  }
};

const adminService = {
  register,
  activationToken,
};

export default adminService;
