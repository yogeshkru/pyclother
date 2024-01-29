import axios from "axios";
import CONN from "../../utilis/Url";

const activationToken = async function (userToken) {
  const response = await axios.post(
    `${CONN.BASE_URL}admin/activate/${userToken}`
  );
  if (response.data) {
    return response.data;
  }
};

async function adminLogout() {
  const response = await axios.get(`${CONN.BASE_URL}admin/logout`);
  if (response.data) {
    return response.data;
  }
}

// adminLogin

const adminLogin = async (userData) => {
  const response = await axios.post(
    `${CONN.BASE_URL}admin/admin-login`,
    userData
  );

  if (response.data) {
    return response.data;
  }
};

// **************************Authorized login ***************************

async function updateUser(userData) {
  const response = await axios.patch(
    `${CONN.BASE_URL}admin/admin-updateme`,
    userData
  );

  if (response.data) {
    return response.data;
  }
}

const deleteMe = async () => {
  const response = await axios.delete(`${CONN.BASE_URL}admin/admin-delete-me`);
  if (response.data) {
    return response.data;
  }
};

const register = async (userData) => {
  const response = await axios.post(
    `${CONN.BASE_URL}admin/creatuser`,
    userData
  );

  if (response.data) {
    return response.data;
  }
};

const blockAdminUser = async (data) => {
  const response = await axios.patch(
    `${CONN.BASE_URL}admin/block-user/${data}`
  );
  if (response.data) {
    return response.data;
  }
};

const unBlockAdminUser = async (data) => {
  const response = await axios.patch(`${CONN.BASE_URL}admin/unblock${data}`);
  if (response.data) {
    return response.data;
  }
};

const adminService = {
  activationToken,
  adminLogout,
  adminLogin,

  // Authorized login
  register,
  updateUser,
  deleteMe,
  blockAdminUser,
  unBlockAdminUser,
};

export default adminService;
