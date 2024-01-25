import axios from "axios";
import { base_url } from "../utils/base_url";

const register = async (userData) => {
  const response = await axios.post(`${base_url}admin/creatuser`, userData);

  if (response.data) {
    return response.data;
  }
};

const activationToken = async function (userToken) {
  const response = await axios.post(`${base_url}admin/activate`, userToken);
  if (response.data) {
    return response.data;
  }
};

async function adminLogout() {
  const response = await axios.get(`${base_url}admin/logout`);
  if (response.data) {
    return response.data;
  }
}

const adminService = {
  register,
  activationToken,
  adminLogout,
};

export default adminService;
